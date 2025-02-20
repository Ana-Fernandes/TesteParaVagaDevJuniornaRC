import axios from 'axios';

// Configuração global do axios
const api = axios.create({
  baseURL: 'http://localhost:5000',  // URL do backend
  timeout: 5000,  // Timeout de 5 segundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')  // Adicionando o token JWT nas requisições
  }
});

export default api;

