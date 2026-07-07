import axios from 'axios';

// Create a central Axios instance pointing to your Node backend
const API = axios.create({
    baseURL: 'https://ecrownode-1.onrender.com', // Update to your live URL when deployed
    withCredentials: true
});

// Automatically inject the Bearer token into EVERY backend request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 🚨 THE CORE GUARD: Listen globally for the backend's protection signals
API.interceptors.response.use(
    (response) => response,
    (error) => {
        // If the backend middleware responds with 401 (Unregistered/Bad Token)
        if (error.response && error.response.status === 401) {
            console.error("🛡️ Backend Route Protection Triggered! Booting to error page.");
            localStorage.removeItem('userToken'); // Clean up stale data
            window.location.href = '/error';     // Force absolute redirect to your error route
        }
        return Promise.reject(error);
    }
);

export default API;