const authService = require('../services/auth.service')
const userController = require('./user.controller')

const login = async (request, h) => {
    const { username, password } = request.payload
    const login_result = await userController.checkDatesLogin(username, password)
    console.log(`${login_result.isValid} ${login_result.cpf} ${username} ${password}`)
    if (login_result.isValid) return await authService.sign({username, password, cpf:login_result.cpf})
    else return await authService.noSign()
}

module.exports = {
    login
}