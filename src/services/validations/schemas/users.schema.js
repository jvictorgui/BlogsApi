const Join = require('joi');

const userCreateSchema = Join.object({
  displayName: Join.string().min(8).required(),
  email: Join.string().email(),
  password: Join.string().min(6).required(),
  image: Join.string(),
});
module.exports = {
  userCreateSchema,
};