const { UsersService } = require('../services');

const validateLoginFields = async (req, res, next) => { 
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await UsersService.getUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  req.user = {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };
  next();
};
module.exports = { validateLoginFields };