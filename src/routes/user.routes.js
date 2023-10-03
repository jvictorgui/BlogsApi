const userRoute = require('express').Router();
const { UsersController } = require('../controllers');

userRoute.post('/', UsersController.createUser);

module.exports = userRoute;