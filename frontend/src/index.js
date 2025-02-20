import React from 'react';
import ReactDOM from 'react-dom/client';  // Alteração aqui
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Novo método
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
