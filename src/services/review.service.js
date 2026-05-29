const { Review, Course } = require('../models');

const getAllReview = async () => {
  return await Review.findAll({
    include: [Course],
  });
};

module.exports = {
  getAllReview,
};
