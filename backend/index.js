const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Habilitar CORS para o frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Adicione o endereço do seu frontend
  credentials: true,  // Permitir envio de cookies
}));

// Usar body parser e JSON
app.use(bodyParser.json());
app.use(express.json()); // Para parsear o corpo das requisições JSON

// Usar as rotas de autenticação (se necessário)
app.use('/auth', authRoutes);

// Usar as rotas de produtos
app.use('/api', productRoutes);

// Sincronizar com o banco de dados e iniciar o servidor
sequelize.sync()
  .then(() => {
    const port = process.env.PORT || 5000;  // Alterar para a porta 5000
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });
