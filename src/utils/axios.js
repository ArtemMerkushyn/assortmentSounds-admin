import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:8080/api'
    baseURL: 'https://assortment-sounds-api.vercel.app'
});

export default instance;