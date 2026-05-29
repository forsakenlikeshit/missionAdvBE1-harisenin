const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const { isAdmin } = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');

router.get('/', authMiddleware.verifyToken, isAdmin, userController.getAllUsers);
router.get('/:id', authMiddleware.verifyToken, isAdmin, userController.getUserById);
router.post('/', authMiddleware.verifyToken, isAdmin, userController.createUser);
router.patch('/:id', authMiddleware.verifyToken, isAdmin, userController.updateUser);
router.delete('/:id', authMiddleware.verifyToken, isAdmin, userController.deleteUser);

module.exports = router;
