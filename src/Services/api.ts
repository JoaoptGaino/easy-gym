import axios from 'axios';

const api = axios.create({
    baseURL:'https://easy-gym-api.herokuapp.com/api'
});

export default api;