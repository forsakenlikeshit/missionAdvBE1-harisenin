const { User } = require('../models');

const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ['password'] },
  });
};

const getUserById = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
};

const createUser = async (data) => {
  return await User.create(data);
};

const updateUser = async (id, data) => {
  return await User.update(data, {
    where: { id_user: id },
  });
};

const deleteUser = async (id) => {
  return await User.destroy({
    where: { id_user: id },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
