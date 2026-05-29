const response = require('../utils/response');
const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  const data = await userService.getAllUsers();
  return response(res, 200, 'Get all users', data);
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  const data = await userService.getUserById(id);

  if (!data) {
    return response(res, 404, 'User not found');
  }

  return response(res, 200, 'Get user by id', data);
};

const createUser = async (req, res) => {
  const data = await userService.createUser(req.body);
  return response(res, 201, 'User created', data);
};

const updateUser = async (req, res) => {
  const id = req.params.id;

  const result = await userService.updateUser(id, req.body);

  if (result[0] === 0) {
    return response(res, 404, 'User not found');
  }

  return response(res, 200, 'User updated');
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const result = await userService.deleteUser(id);

  if (!result) {
    return response(res, 404, 'User not found');
  }

  return response(res, 200, 'User deleted');
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
