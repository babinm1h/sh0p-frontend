import axios from "axios"


export const API_URL = "http://localhost:7777/"


const $host = axios.create({
    baseURL: API_URL,
    withCredentials: true
})


const $authHost = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

$authHost.interceptors.request.use(config => {
    if (config.headers) {
        config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    }
    return config
})


export { $authHost, $host }