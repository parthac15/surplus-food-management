import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = axios.create({
    baseURL: API_URL,
});
