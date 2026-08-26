import axios from 'axios';

const API_URL_V1 = axios.create({
    baseURL: '/api',
});

export default API_URL_V1;