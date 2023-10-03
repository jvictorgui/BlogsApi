const categoriesRouter = require('express').Router();
const { CategoriesController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

categoriesRouter.post('/', validateToken, CategoriesController.createCategory);

module.exports = categoriesRouter;