import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://cpincorp.ddns.net:51510/tournee";

class TourneeService {
    getAllTournees() {
        return axios.get(API_URL, { headers: authHeader() });
    }
    getInfosTournee(id) {
        return axios.get(API_URL + "/" + id, { header: authHeader() });
    }
    createTournee(id) {
        return axios.post(API_URL, { headers: authHeader(), numero: id });
    }
    updateTournee(id, date_crea, date_maj) {
        return axios.put(API_URL + "/" + id, {
            header: authHeader(),
            date_crea: date_crea,
            date_maj: date_maj,
        });
    }
    deleteTournee(id) {
        return axios.delete(API_URL + "/" + id, { headers: authHeader() });
    }
    getPdisTournee(id) {
        return axios.get(API_URL + "/" + id + "/pdis", {
            headers: authHeader(),
        });
    }
}
