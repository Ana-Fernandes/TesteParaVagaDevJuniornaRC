const Event = require('../models/Event');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createEvent = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token não fornecido.' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: 'Token inválido.' });

    const eventId = await Event.createEvent(req.body);
    res.status(201).json({ message: 'Evento criado com sucesso!', eventId });
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    res.status(500).json({ message: 'Erro ao criar evento.' });
  }
};
