export default function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");

    if (user && token) {
        //Dans l'api la propriété x-access-token est testée dans l'en-tête de la requête
        return { "x-access-tokens": token, "content-type": "application/json" };
    } else {
        return {};
    }
}
