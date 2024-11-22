import axios from "axios";

// const url = 'http://localhost:3000'
const url = 'https://gerenciabikeapi.onrender.com/'

const api = axios.create({
    baseURL: url
});

export default api;