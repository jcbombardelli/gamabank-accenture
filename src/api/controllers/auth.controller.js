const authService = require("../services/auth.service");

const login = async (request, h) => {
  const { email, senha } = request.payload;

  const login = await authService.signIn({ email, senha });

  return login;
};

<<<<<<< HEAD

module.exports = {
  login,
  register
=======
module.exports = {
  login,
>>>>>>> development
};
