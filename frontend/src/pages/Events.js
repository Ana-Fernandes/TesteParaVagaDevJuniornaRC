import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS do carrossel
import logo from '../assets/logo.png';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import ProductsPage from './ProductsPage';
import '../events.css';
import Footer from '../components/Footer';

const Events = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [products, setProducts] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('userName');
    setIsLoggedIn(!!token);
    setUserName(storedUserName || '');
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="menu-left">
            <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => setShowProductModal(true)}>Adicionar Produto</li>
              <li>Todos Produtos</li>
            </ul>
          </nav>
          <div className="logo">
            <img src={logo} alt="Logo" onClick={() => navigate('/')} />
          </div>
          <nav className="menu-right">
            <ul>
              {isLoggedIn ? (
                <>
                  <p className="welcome-text"><strong>Bem-vindo!</strong></p>
                  <li onClick={handleLogout} className="logout-button">Sair</li>
                </>
              ) : (
                <>
                  <li onClick={() => navigate('/login')}>Acessar Conta</li>
                  <li onClick={() => navigate('/register')}>Cadastre-se</li>
                </>
              )}
              <li onClick={() => navigate('/contact')}>Contato</li>
              <li onClick={() => navigate('/cart')} className="cart-icon">
                <FaShoppingCart color="black" size={18} />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Carrossel de Banner */}
      <div className="banner-carousel">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" />
          </div>
        </Carousel>
      </div>

      {/* Modal de Adicionar Produto */}
      {showProductModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowProductModal(false)}>X</button>
            <ProductsPage onProductAdded={fetchProducts} />
          </div>
        </div>
      )}

      {/* Seção de Produtos */}
      <div className="events-section">
        <h2>Produtos</h2>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="event-card">
              <img src={product.imageUrl || 'default.jpg'} alt={product.name} className="event-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Preço:</strong> R${product.price}</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
