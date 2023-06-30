const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  shieldImage: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  coachName: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;