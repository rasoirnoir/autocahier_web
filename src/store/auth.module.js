import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const initialState = user
    ? { status: { loggedIn: true }, user, token }
    : { status: { loggedIn: false }, user: null, token: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                function (response) {
                    commit("loginSuccess", response);
                    return Promise.resolve(response);
                },
                function (error) {
                    commit("loginFailure");
                    return Promise.reject(error);
                },
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit("logout");
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                function (response) {
                    commit("registerSuccess");
                    return Promise.resolve(response.data);
                },
                function (error) {
                    commit("registerFailure");
                    return Promise.reject(error);
                },
            );
        },
    },
    mutations: {
        loginSuccess(state, data) {
            state.status.loggedIn = true;
            state.user = data.user;
            state.token = data.token;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.token = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
            state.token = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
    },
};
