import React from 'react';
import './contact.css'; 
import { FaInstagram, FaEnvelope, FaLink, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Cabeçalho */}
      <header className="header-contact">
        <nav className="navbar">
          <ul>
            <li><a href="/produtos">Dashboard</a></li>
            <li><a href="/events">Produtos</a></li>
            <li><a href="/contact" className="active">Contato</a></li>
            <li><a href="/register">Registrar</a></li>
          </ul>
        </nav>
      </header>

      <HeaderBar title="Fale Conosco" />

      {/* Conteúdo principal */}
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Contato</h2>
            <p><FaPhone className="contact-icon" /><strong>Telefone:</strong> (51) 0000-0000</p>
            <p><FaEnvelope className="contact-icon" /><strong>E-mail:</strong> <a href="mailto:contato@.com">contato@.com</a></p>
            <p><FaMapMarkerAlt className="contact-icon" /><strong>Local:</strong> Rua Exemplo, 207 -</p>
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://" target="_blank" rel="noopener noreferrer"><FaLink /></a>
            </div>
          </div>
          <div className="image-container">
            <Link to="/" className="image-link">
              <img
                src={require('../assets/banner.jpg')} 
                alt="Imagem de Contato"
                className="contact-image"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
