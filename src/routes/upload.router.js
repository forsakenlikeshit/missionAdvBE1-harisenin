const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload.middleware');
const uploadController = require('../controllers/upload.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', authMiddleware.verifyToken, upload.single('file'), uploadController.uploadImage);

module.exports = router;
