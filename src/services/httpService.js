// src/httpService.js
import axios from 'axios';
import { hideLoader, showLoader } from '../controllers/loaderController';
import {
  REFRESH_TOKEN_LOCALE_STORAGE_KEY,
  TOKEN_LOCALE_STORAGE_KEY,
} from '../constants/localeStorageKeys';

// Create an Axios instance
export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(
  config => {
    // show loader
    showLoader();
    // Exclude login/register requests from adding the token
    if (!config.url.includes('/login') && !config.url.includes('/register')) {
      const token = localStorage.getItem(TOKEN_LOCALE_STORAGE_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => {
    // hide loader
    hideLoader();
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  response => {
    hideLoader();
    return response;
  },
  async error => {
    console.log(error);
    const originalRequest = error?.config;
    const response = error?.response;
    const status = error?.response?.status;
    const errorCode = error?.response?.data?.error_code;

    // token not found
    if (response && status === 401 && errorCode === 103) {
      hideLoader();
      window.location.href = '/login';
      return;
    }

    if (response && status === 401 && errorCode === 104) {
      try {
        const refreshToken = localStorage.getItem(
          REFRESH_TOKEN_LOCALE_STORAGE_KEY
        );
        if (!refreshToken) {
          hideLoader();
          window.location.href = '/login';
          return;
        }
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/createNewToken`,
          { refreshToken: refreshToken }
        );
        hideLoader();
        localStorage.setItem(TOKEN_LOCALE_STORAGE_KEY, data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return http(originalRequest);
      } catch (refreshError) {
        hideLoader();
        console.error('Refresh token expired. Logging out...', refreshError);
        localStorage.removeItem(TOKEN_LOCALE_STORAGE_KEY);
        localStorage.removeItem(REFRESH_TOKEN_LOCALE_STORAGE_KEY);
        window.location.href = '/login';
      }
    }

    if (response && status === 403) {
      localStorage.removeItem(TOKEN_LOCALE_STORAGE_KEY);
      localStorage.removeItem(REFRESH_TOKEN_LOCALE_STORAGE_KEY);
      window.location.href = '/login';
    }

    hideLoader();
    return Promise.reject(error);
  }
);
