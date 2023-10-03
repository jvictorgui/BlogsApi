const { Category } = require('../models');

const createCategory = async (category) => {
    const newCategory = await Category.create(category);
    return { status: 'CREATED', data: newCategory };
};

module.exports = {
    createCategory,
};