const { Category } = require('../models');

const createCategory = async (category) => {
  const newCategory = await Category.create(category);
  return { status: 'CREATED', data: newCategory };
};
const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'OK', data: categories };
};
module.exports = {
  createCategory,
  getAllCategories,
};