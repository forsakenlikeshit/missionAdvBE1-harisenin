const { Kategori, Course } = require('../models');

const getAllKategori = async () => {
  return await Kategori.findAll({
    include: [Course],
  });
};

module.exports = {
  getAllKategori,
};
