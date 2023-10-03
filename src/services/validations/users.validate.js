const { userCreateSchema } = require('./schemas/users.schema');

const userCreateValidate = (user) => {
    const { error } = userCreateSchema.validate(user);
    if (error) {
        return error.message;
    } 
};

module.exports = { userCreateValidate };