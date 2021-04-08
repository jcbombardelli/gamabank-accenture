const authService = require("../services/auth.service");

const login = async (request, h) => {
  const { username, password } = request.payload;

  const login = await authService.signIn( username, password );

  return login;
};

module.exports = {
  login,
};
