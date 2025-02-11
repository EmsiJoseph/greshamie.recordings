
import axios from "axios";
import { getAccessToken } from "../services/server-actions/cookie";


// Add the skipAuth Flag to the AxiosRequestConfig interface
declare module 'axios' {
    export interface AxiosRequestConfig {
        skipAuth?: boolean; // Optional, defaults to `false`
    }
}

const regularHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

// Gresham Config
const GreshamAxiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GRESHAM_BACKEND,
    // timeout: 5000,
    headers: regularHeaders,
});

// Inject auth token by default
GreshamAxiosConfig.interceptors.request.use(
    async (config) => {
        // Skip auth ONLY if explicitly requested
        if (config?.skipAuth === true) { // Default: false
            return config;
        }

        const bearerToken = await getAccessToken();
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken.value}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export { GreshamAxiosConfig };