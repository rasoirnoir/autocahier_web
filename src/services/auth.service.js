import axios from "axios";

const API_URL = "http://cpincorp.ddns.net:51510/";

class AuthService {
    login(user) {
        return axios
            .post(API_URL + "login", {
                name: user.username,
                password: user.password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return axios.post(API_URL + "register", {
            username: user.name,
            password: user.password,
            admin: user.admin,
        });
    }
}

export default new AuthService();
