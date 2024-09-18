// axiosConfig.js
import axios from 'axios';
import URL from './config';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: URL.BASE(), // Base URL of your API
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Get the token from localStorage
    if (token) {
      // Attach token to Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Optional: to handle errors globally)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = '/admin-login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
