import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `http://cpincorp.ddns.net:51510/`;

class TourneeService {
    static getAllTournees() {
        return axios.get(API_URL + "/tournee", {
            headers: authHeader(),
        });
    }
    static getInfosTournee(id) {
        return axios.get(API_URL + "/tournee/" + id, { header: authHeader() });
    }
    static createTournee(id) {
        return axios.post(API_URL + "/tournee", {
            headers: authHeader(),
            numero: id,
        });
    }
    static updateTournee(id, date_crea, date_maj) {
        return axios.put(API_URL + "/tournee/" + id, {
            header: authHeader(),
            date_crea: date_crea,
            date_maj: date_maj,
        });
    }
    static deleteTournee(id) {
        return axios.delete(API_URL + "/tournee/" + id, {
            headers: authHeader(),
        });
    }
    static getPdisTournee(id) {
        return axios.get(API_URL + "/tournee/" + id + "/pdis", {
            headers: authHeader(),
        });
    }
}

export default TourneeService;
