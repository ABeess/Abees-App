import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
