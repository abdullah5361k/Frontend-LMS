import axios from "axios"

const BASE_URL = "http://localhost:3000/api/v1"

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})


axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;