const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mercado2025', 
  process.env.DB_USER || 'root', 
  process.env.DB_PASS || '', 
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Desativa log de SQL no console
  }
);

module.exports = sequelize;
