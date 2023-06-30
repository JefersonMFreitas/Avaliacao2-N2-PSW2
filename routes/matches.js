const express = require('express');
const Team = require('../models/team');
const Match = require('../models/match');

const router = express.Router();

// Rota para gerar o sorteio de jogos da primeira rodada
router.get('/draw', async (req, res) => {
  try {
    // Verificar se todos os times estão cadastrados
    const teamsCount = await Team.countDocuments();
    if (teamsCount < 8) {
      return res.status(400).json({ message: 'É necessário cadastrar pelo menos 8 times' });
    }

    // Sortear os jogos
    const teams = await Team.find().select('_id');
    const matches = [];
    while (teams.length >= 2) {
      const teamA = teams.splice(Math.floor(Math.random() * teams.length), 1)[0];
      const teamB = teams.splice(Math.floor(Math.random() * teams.length), 1)[0];
      matches.push({ teamA, teamB });
    }

    // Salvar os jogos no banco de dados
    await Match.create(matches);

    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar sorteio de jogos' });
  }
});

// Rota para listar os jogos da primeira rodada
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find().populate('teamA', 'name').populate('teamB', 'name');
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar jogos' });
  }
});

module.exports = router;