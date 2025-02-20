import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import '../register.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Usuário registrado com sucesso!click ok');
      navigate('/login'); // Redireciona para a tela de login após registro
    } catch (error) {
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Registre-se</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            className="form-input"
            onChange={handleChange}
          />
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
            Registrar
          </button>
        </form>
        <div className="social-login">
          <h3>Ou registre-se com:</h3>
          <div className="social-icons">
            <button className="social-button google">
              <span>Google</span>
            </button>
            <button className="social-button facebook">
              <span>Facebook</span>
            </button>
          </div>
        </div>
        <div className="login-link">
          Já tem uma conta? <a href="/login">Faça login aqui</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
