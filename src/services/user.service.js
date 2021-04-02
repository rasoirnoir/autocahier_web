/* eslint-disable prettier/prettier */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://cpincorp.ddns.net:51510";


class UserService{
    getUsers(){
        return axios.get(API_URL + '/users');
    }
}
