const AuthService = require("../services/auth.service");
const LoginService = require("../services/login.service");

const login = async (request, h) => {
    const { username, password } = request.payload

    const login_result = await LoginService.checkLogin(username, password)

    if (login_result.isValid) return await AuthService.sign({user_id:login_result.id})
    else  return h.response( AuthService.noSign() ).code(401)
}

// const validate = async (request, h) => {
//     const token = request.headers['x-access-token']

//     try {
//         const validated = await AuthService.verify(token)
//         return validated
//     } catch (error) {
//         return error
//     }
// }

module.exports = {
  login,
};
