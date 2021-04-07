const authService = require("../services/auth.service");
const loginService = require("../services/login.service");

const login = async (request, h) => {
  const { username, password } = request.payload
  const login_result = await loginService.checkDatesLogin(username, password)
  console.log(`${login_result.isValid} ${login_result.cpf} ${username} ${password}`)
  if (login_result.isValid) return await authService.sign({username, password, cpf:login_result.cpf})
  else return await authService.noSign()
}

const register = async (request, h) => {
  const { email, username, pass, cpf } = request.payload;

  return await authService.sign({ email, username, pass, cpf });
};


module.exports = {
  login,
  register
};
