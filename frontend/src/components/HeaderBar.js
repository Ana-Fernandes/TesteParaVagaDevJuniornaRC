// HeaderBar.js
import React from 'react';
import './headerBar.css'; // Arquivo de estilos separado

const HeaderBar = ({ title }) => {
  return (
    <div className="header-bar">
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderBar;
