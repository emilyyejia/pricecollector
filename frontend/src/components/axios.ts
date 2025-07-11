import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/';
const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }

})

export default AxiosInstance