import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Events from './pages/Events';
import Register from './pages/Register';

import Contact from './pages/Contact';  // Importe o componente de Contato
import ProductsPage from './pages/ProductsPage';
import ProductsList from './pages/ProductsList';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Events />} />
        {/* Rota para os detalhes do evento */}
      
        <Route path="/contact" element={<Contact />} /> {/* Página de Contato */}
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/listar-produtos" element={<ProductsList />} />
       
      
      </Routes>
    </Router>
  );
};

export default App;
