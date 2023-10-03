const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '30h',
        algorithm: 'HS256', 
    };
    return jwt.sign(payload, secret, options);
};

const login = async (req, res) => {
const token = generateToken(req.user);
res.status(200).json({ token });
};

module.exports = {
    login,
};