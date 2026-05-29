const response = require('../utils/response');
const tutorService = require('../services/tutor.service');

const getAllTutors = async (req, res) => {
  const data = await tutorService.getAllTutors();
  return response(res, 200, 'Get all tutors', data);
};

module.exports = {
  getAllTutors,
};
