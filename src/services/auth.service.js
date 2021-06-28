import axios from "axios";

// const PORT = 51510; //5000 en local
// // const API_URL = `http://192.168.1.96:${PORT}/`;
// // const API_URL = `http://127.0.0.1:5000/`;
const API_URL = `http://cpincorp.ddns.net:51510/`;

class AuthService {
    login(user) {
        return axios
            .get(API_URL + "login", {
                auth: {
                    username: user.username,
                    password: user.password,
                },
            })
            .then((response) => {
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
                        // JSON.stringify(response.data.token),
                        response.data.token,
                    );
                    return response.data;
                } else {
                    console.log(
                        `No token returned. ${JSON.stringify(response.data)}`,
                    );
                    throw new Error("Wrong login or password.");
                }
                // if(response.data.token){

                //     localStorage.setItem("")
                // }
            })
            .catch((error) => {
                //console.log(`auth.service: ${error}`);
                throw error;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
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
