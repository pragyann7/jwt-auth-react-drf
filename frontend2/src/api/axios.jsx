import axios from 'axios';
import ErrorAuth from '../../components/ErrorAuth';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// REQUEST INTERCEPTOR: attach token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR: handle 401 and refresh token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If 401 and not already retried
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh');
                if (!refreshToken) {
                    throw new Error('No refresh token available');
                }

                const res = await axios.post('http://127.0.0.1:8000/token/refresh/', {
                    refresh: refreshToken,
                });

                localStorage.setItem('access', res.data.access);

                // Retry original request with new token
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                localStorage.removeItem('access');
                localStorage.removeItem('refresh');
                // window.location.href = '/';
                // window.location.href = '/error-auth';
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
