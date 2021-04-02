import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://cpincorp.ddns.net:51510/pdi";

class PdiService {
  createPdi(noms, adresse, depot, tournee, ordre) {
    return axios.put(API_URL, {
      headers: authHeader(),
      noms: noms,
      adresse: adresse,
      depot: depot,
      tournee: tournee,
      ordre: ordre,
    });
  }
  getPdis() {
    return axios.get(API_URL, { headers: authHeader() });
  }
  getInfosPdi(id) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }
  updatePdi(id, noms, adresse, depot, tournee, ordre, date_crea, date_maj) {
    return axios.update(API_URL + "/" + id, {
      headers: authHeader(),
      noms: noms,
      adresse: adresse,
      depot: depot,
      tournee: tournee,
      ordre: ordre,
      date_crea: date_crea,
      date_maj: date_maj,
    });
  }
  deletePdi(id) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() });
  }
}
