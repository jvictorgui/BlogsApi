const { PostsService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapStatus');

const getAllPosts = async (_req, res) => {
  const { status, data } = await PostsService.getAllPosts();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllPosts,
};