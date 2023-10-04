const categoriesRouter = require('express').Router();
const { CategoriesController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

categoriesRouter.post('/', validateToken, CategoriesController.createCategory);
categoriesRouter.get('/', validateToken, CategoriesController.getAllCategories);

module.exports = categoriesRouter;