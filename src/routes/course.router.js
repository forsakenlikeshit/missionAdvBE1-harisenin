const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const { isAdmin } = require('../middlewares/auth.middleware');

const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

// PUBLIC
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// ADMIN
router.post('/', authMiddleware.verifyToken, isAdmin, createCourse);

router.patch('/:id', authMiddleware.verifyToken, isAdmin, updateCourse);

router.delete('/:id', authMiddleware.verifyToken, isAdmin, deleteCourse);

module.exports = router;
