import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        jsw: "",
    },
    mutations: {},
    actions: {},
    modules: {
        auth,
    },
});
