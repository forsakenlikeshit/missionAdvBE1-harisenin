const express = require('express');

const router = express.Router();

const { getAllKategori } = require('../controllers/kategori.controller');

router.get('/', getAllKategori);

module.exports = router;
