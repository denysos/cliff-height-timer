import axios from "axios"


const urlbq = "http://localhost:9090/api/banque/client"

export default class BQserviceClientsApi {
    static getAll() {
        return axios.get(urlbq + "/all")
    }


    static create(client) {
        axios.create(urlbq, client);
    }
}