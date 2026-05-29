const express = require('express');

const router = express.Router();

const { getAllReview } = require('../controllers/review.controller');

router.get('/', getAllReview);

module.exports = router;
