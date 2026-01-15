const express = require('express');
const router = express.Router();
const { getPrograms } = require('../controllers/programsController');

router.get('/', getPrograms);

module.exports = router;