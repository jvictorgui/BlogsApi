const { User } = require('../models');
const { userCreateValidate } = require('./validations/users.validate');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'OK', data: users }; 
};
const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'OK', data: user }; 
};

const createUser = async (user) => {
  const errorMessage = userCreateValidate(user);
  if (errorMessage) {
    return { status: 'BAD_REQUEST', data: { message: errorMessage } };
  }
  const userAlreadyExists = await getUserByEmail(user.email);
  if (userAlreadyExists) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(user);
  const userNoPassword = {
    id: newUser.id,
    displayName: newUser.displayName,
    email: newUser.email,
    image: newUser.image,
  };
  return { status: 'CREATED', data: userNoPassword };
};

module.exports = { 
  getUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
};