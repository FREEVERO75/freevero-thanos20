// src/httpService.js
import axios from 'axios';

// Create an Axios instance
export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(
  config => {
    // Exclude login/register requests from adding the token
    if (!config.url.includes('/login') && !config.url.includes('/register')) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log(error);
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.error_code === 103
    ) {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          window.location.href = '/login';
          return;
        }
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/createNewToken`,
          { refreshToken: refreshToken }
        );

        localStorage.setItem('token', data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return http(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired. Logging out...', refreshError);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
