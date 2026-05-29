const response = require('../utils/response');
const reviewService = require('../services/review.service');

const getAllReview = async (req, res) => {
  const data = await reviewService.getAllReview();
  return response(res, 200, 'Get all review', data);
};

module.exports = {
  getAllReview,
};
