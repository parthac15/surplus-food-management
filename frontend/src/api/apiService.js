import axios from 'axios';

const API_URL = 'https://<your-backend-service>.onrender.com/api';

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};
