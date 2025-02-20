import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

import api from '../api/api';  // Mantenha esta linha e remova a outra


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      email: form.email,
      password: form.password
    };
  
    try {
      const response = await api.post('/auth/login', formData);
      console.log('Login bem-sucedido', response.data);
  
      // Armazene o token e o nome do usuário no localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.name);
      console.log('Nome do usuário salvo:', response.data.name);
      
      // Redirecione para a página de eventos
      navigate('/events');
    } catch (error) {
      console.error('Erro no login', error.response?.data || error.message);
    }
  };
  
  
  


  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Bem-vindo!</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-input"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            className="form-input"
            onChange={handleChange}
          />
          <button type="submit" className="form-button">
            Entrar
          </button>
        </form>

        <p className="register-link">
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
