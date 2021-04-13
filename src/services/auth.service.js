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
                if (response.data.token) {
                    console.log(
                        `Utilisateur : ${JSON.stringify(response.data.user)}`,
                    );
                    console.log(
                        `Token : ${JSON.stringify(response.data.token)}`,
                    );
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user),
                    );
                    localStorage.setItem(
                        "token",
                        JSON.stringify(response.data.token),
                    );
                    return response.data.user;
                } else {
                    console.log(
                        `Login did not get a token : ${JSON.stringify(
                            response.data,
                        )}`,
                    );
                    throw new Error("Wrong login or password.");
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
