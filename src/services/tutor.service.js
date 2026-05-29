const { Tutor, Course } = require('../models');

const getAllTutors = async () => {
  return await Tutor.findAll({
    include: [Course],
  });
};

module.exports = {
  getAllTutors,
};
