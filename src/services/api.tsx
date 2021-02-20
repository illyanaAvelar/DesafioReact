import axios from 'axios';

const api = axios.create({
    baseURL: 'https://g6rentcar.azurewebsites.net/api/'
})

export default api;