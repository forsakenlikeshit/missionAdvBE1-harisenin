const response = require('../utils/response');
const courseService = require('../services/course.service');

const getAllCourses = async (req, res) => {
  try {
    const data = await courseService.getAllCourses(req.query);

    return response(res, 200, 'Get all courses', data);
  } catch (err) {
    return response(res, 500, 'Internal server error');
  }
};

const getCourseById = async (req, res) => {
  const id = req.params.id;

  const data = await courseService.getCourseById(id);

  if (!data) {
    return response(res, 404, 'Course not found');
  }

  return response(res, 200, 'Get course by id', data);
};

const createCourse = async (req, res) => {
  const data = await courseService.createCourse(req.body);
  return response(res, 201, 'Course created', data);
};

const updateCourse = async (req, res) => {
  const id = req.params.id;

  const result = await courseService.updateCourse(id, req.body);

  if (result[0] === 0) {
    return response(res, 404, 'Course not found');
  }

  return response(res, 200, 'Course updated');
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;

  const result = await courseService.deleteCourse(id);

  if (!result) {
    return response(res, 404, 'Course not found');
  }

  return response(res, 200, 'Course deleted');
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
