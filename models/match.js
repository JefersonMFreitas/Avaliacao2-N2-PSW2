const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;