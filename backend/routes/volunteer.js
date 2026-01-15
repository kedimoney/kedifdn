const express = require('express');
const router = express.Router();
const { postVolunteer } = require('../controllers/volunteerController');

router.post('/', postVolunteer);

module.exports = router;