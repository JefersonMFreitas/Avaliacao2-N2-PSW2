const express = require('express');
const app = express();
const db = require('./db');

// Configurações do servidor

// Configuração das rotas
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/teams');
const playerRoutes = require('./routes/players');
const matchRoutes = require('./routes/matches');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});