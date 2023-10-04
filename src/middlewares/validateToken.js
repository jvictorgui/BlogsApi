const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = bearerToken.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };