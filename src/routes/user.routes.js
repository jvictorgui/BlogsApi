const userRoute = require('express').Router();
const { UsersController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

userRoute.post('/', UsersController.createUser);
userRoute.get('/', validateToken, UsersController.getAllUsers);
userRoute.get('/:id', validateToken, UsersController.getUserById);
module.exports = userRoute;