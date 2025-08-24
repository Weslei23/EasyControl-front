import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token'); // pega o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // adiciona no header
  }
  return config;
});

export default api;
