import axios from "axios";

const API_URL = "http://cpincorp.ddns.net:51510/";

class AuthService {
    login(user) {
        return axios
            .get(API_URL + "login", {
                auth: {
                    username: user.username,
                    password: user.password,
                },
            })
            .then(function (response) {
                console.log(
                    `DEBUG: login response.data : ${JSON.stringify(
                        response.data,
                    )}`,
                );
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    //TODO Il manque une info: le statut admin de l'utilisateur qui devrait être renvoyé par l'API
                    return response.data;
                } else {
                    throw new Error("Connexion error.");
                }
                // if(response.data.token){

                //     localStorage.setItem("")
                // }
            })
            .catch(function (error) {
                //console.log(`auth.service: ${error}`);
                throw error;
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
