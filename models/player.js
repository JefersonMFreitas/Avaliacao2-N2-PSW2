const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;