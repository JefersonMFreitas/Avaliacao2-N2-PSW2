const express = require('express');
const Team = require('../models/team');

const router = express.Router();

// Rota para cadastrar um time
router.post('/', async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar time' });
  }
});

// Rota para listar todos os times
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar times' });
  }
});

// Rota para obter informações de um time específico
router.get('/:teamId', async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (!team) {
      return res.status(404).json({ message: 'Time não encontrado' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter informações do time' });
  }
});

// Rota para atualizar informações de um time
router.put('/:teamId', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.teamId, req.body, { new: true });
    if (!team) {
      return res.status(404).json({ message: 'Time não encontrado' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar time' });
  }
});

// Rota para excluir um time
router.delete('/:teamId', async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.teamId);
    if (!team) {
      return res.status(404).json({ message: 'Time não encontrado' });
    }
    res.json({ message: 'Time excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir time' });
  }
});

module.exports = router;