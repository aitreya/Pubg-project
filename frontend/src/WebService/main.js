import Config from "./config"
import axios from "axios"

let url = Config.api_url

const axiosObject = axios.create({
    baseURL: url
})

export default async function apiCall(method, url, params) {

    switch (method) {
        case "GET" : return axiosObject.get(url, params);
        case "POST" : return axiosObject.post(url, params);
        default: return false;
    }

}