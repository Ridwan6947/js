import axios from 'axios';
import store from './store';
import router from './router';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      store.dispatch('authFailure', { message: 'Unauthorized' });
      router.push('/');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
