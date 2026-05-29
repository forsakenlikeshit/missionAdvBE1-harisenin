const express = require('express');

const router = express.Router();

const { getAllTutors } = require('../controllers/tutor.controller');

router.get('/', getAllTutors);

module.exports = router;
