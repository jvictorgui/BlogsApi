const postRouter = require('express').Router(); 
const { PostsController } = require('../controllers');  
const { validateToken } = require('../middlewares/validateToken');

postRouter.get('/', validateToken, PostsController.getAllPosts);

module.exports = postRouter;