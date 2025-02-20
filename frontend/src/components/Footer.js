import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../events.css'; // Ou um arquivo CSS compartilhado para estilos

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>Melhor preço da cidade, venha coferir.</p>
        </div>
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="/privacy">Política de Privacidade</a></li>
            <li><a href="/terms">Termos de Serviço</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Conecte-se</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Mercadinho2025. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
