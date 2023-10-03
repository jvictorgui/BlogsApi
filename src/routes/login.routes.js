const loginRouter = require('express').Router();
const { UsersController } = require('../controllers');
const { validateLoginFields } = require('../middlewares/login.middlewares');

loginRouter.post('/', validateLoginFields, UsersController.login);
module.exports = loginRouter;