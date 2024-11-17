// src/api.js
import axios from 'axios';

// Create an Axios instance with base URL and other configurations
const api = axios.create({
  baseURL: 'https://api.example.com',  // Replace with your API base URL
  timeout: 10000,  // Optional timeout, in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // You can add Authorization or other custom headers here if needed
  },
});

// Interceptors for requests and responses (optional)
api.interceptors.request.use(
  (config) => {
    // You can add authentication tokens or modify headers here if needed
    // Example: Attach a token to all requests
    const token = localStorage.getItem('token');  // Or wherever you store the token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response.data;  // Simplify response to just data
  },
  (error) => {
    // Handle errors globally (e.g., display a message)
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // No response from server
      console.error('No response from server:', error.request);
    } else {
      // Something else happened
      console.error('Error', error.message);
    }
    return Promise.reject(error);
  }
);

// Create API functions (GET, POST, PUT, DELETE, etc.)
export const getData = (endpoint) => {
  return api.get(endpoint);
};

export const postData = (endpoint, data) => {
  return api.post(endpoint, data);
};

