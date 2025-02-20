const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  try {
    // Recupera o token do cabeçalho Authorization
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: "Cabeçalho de autorização ausente" });
    }

    const token = authHeader.split(' ')[1]; // Espera o formato "Bearer <token>"
    if (!token) {
      return res.status(401).json({ message: "Token ausente no cabeçalho de autorização" });
    }

    // Verifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido ou expirado" });
      }
      req.user = user; // Decodifica o token e atribui ao objeto req
      next(); // Passa para o próximo middleware ou rota
    });
  } catch (error) {
    console.error("Erro na autenticação JWT:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

module.exports = authenticateJWT;