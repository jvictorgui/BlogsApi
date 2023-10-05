const router = require('express').Router();
const loginRouter = require('./login.routes');  
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.routes');
const postRouter = require('./post.routes');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);
module.exports = router;