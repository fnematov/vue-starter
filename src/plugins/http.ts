import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: <string>process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  const configClone: AxiosRequestConfig = config;
  const token = `Bearer ${localStorage.getItem('token')}`;
  if (configClone.headers) {
    configClone.headers.Authorization = token;
  } else {
    configClone.headers = { Authorization: token };
  }
  return configClone;
});

http.interceptors.response.use((response) => response, (error) => error);

export default http;
