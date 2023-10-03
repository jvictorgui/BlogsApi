const { CategoriesService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatus');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const { status, data } = await CategoriesService.createCategory({ name });
    res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { createCategory };