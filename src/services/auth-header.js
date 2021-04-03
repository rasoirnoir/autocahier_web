export default function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        return { Authorization: "Bearer " + user.accessToken };
        //Dans l'api la propriété x-access-token est testée dans l'en-tête de la requête
        //return { x-access-token: user.accessToken };
    } else {
        return {};
    }
}
