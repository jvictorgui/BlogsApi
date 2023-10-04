const listStatus = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
};

const mapStatusHTTP = (status) => listStatus[status] || 500;

module.exports = { mapStatusHTTP };