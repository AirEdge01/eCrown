import axios from 'axios';

const API = axios.create({
    baseURL: '/api/user',
});

// Pass token dynamically in the headers
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Central point for intercepting 401 blocks from the server middleware
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("🚨 Security breach intercepted. Clearing token and redirecting...");
            localStorage.removeItem('userToken');

            // Hard redirect overrides any lingering frontend states instantly
            window.location.href = '/error';
        }
        return Promise.reject(error);
    }
);

export default API;