import axios from "axios";
const apiHost = import.meta.env.VITE_API_URL;
console.log(apiHost)
const api = axios.create({
    baseURL: apiHost,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});
export default api;
