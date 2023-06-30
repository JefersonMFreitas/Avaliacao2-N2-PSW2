const express = require('express');
const Player = require('../models/player');

const router = express.Router();

// Rota para cadastrar um jogador
router.post('/', async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar jogador' });
  }
});

// Rota para listar jogadores de um time específico
router.get('/team/:teamId', async (req, res) => {
  try {
    const players = await Player.find({ team: req.params.teamId });
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar jogadores' });
  }
});

// Rota para obter informações de um jogador específico
router.get('/:playerId', async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    if (!player) {
      return res.status(404).json({ message: 'Jogador não encontrado' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter informações do jogador' });
  }
});

// Rota para atualizar informações de um jogador
router.put('/:playerId', async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.playerId, req.body, { new: true });
    if (!player) {
      return res.status(404).json({ message: 'Jogador não encontrado' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar jogador' });
  }
});

// Rota para excluir um jogador
router.delete('/:playerId', async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.playerId);
    if (!player) {
      return res.status(404).json({ message: 'Jogador não encontrado' });
    }
    res.json({ message: 'Jogador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir jogador' });
  }
});

module.exports = router;