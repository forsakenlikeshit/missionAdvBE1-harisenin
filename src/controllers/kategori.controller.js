const response = require('../utils/response');
const kategoriService = require('../services/kategori.service');

const getAllKategori = async (req, res) => {
  const data = await kategoriService.getAllKategori();
  return response(res, 200, 'Get all kategori', data);
};

module.exports = {
  getAllKategori,
};
