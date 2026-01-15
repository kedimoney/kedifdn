const programs = require('../models/programs');

const getPrograms = (req, res) => {
  res.json(programs);
};

module.exports = { getPrograms };