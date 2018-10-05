import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

// Axios Configurations
const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json'
};

// Create Instance
const instance: AxiosInstance = axios.create(config);

export default instance;