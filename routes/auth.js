const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Verificar se o usuário existe
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    // Gerar token de autenticação
    const token = jwt.sign({ username: user.username }, 'seu_segredo', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
});

module.exports = router;