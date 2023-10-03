const jwt = require('jsonwebtoken');
const { mapStatusHTTP } = require('../utils/mapStatus');
const usersService = require('../services/users.services');

const generateToken = (payload) => {
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '3h',
        algorithm: 'HS256', 
    };
    return jwt.sign(payload, secret, options);
};

const login = async (req, res) => {
const token = generateToken(req.user);
res.status(200).json({ token });
};

const createUser = async (req, res) => {
    const user = req.body;
    const { status, data } = await usersService.createUser(user);
    if (status === 'CREATED') {
        const token = generateToken(data);
    return res.status(mapStatusHTTP(status)).json({ token });
}
res.status(mapStatusHTTP(status)).json(data);
};
const getAllUsers = async (req, res) => {
    const { status, data } = await usersService.getAllUsers();
    res.status(mapStatusHTTP(status)).json(data);
};
const getUserById = async (req, res) => {
    const { status, data } = await usersService.getUserById(req.params.id);
    res.status(mapStatusHTTP(status)).json(data);
};
module.exports = {
    login,
    createUser,
    getAllUsers,
    getUserById,
};