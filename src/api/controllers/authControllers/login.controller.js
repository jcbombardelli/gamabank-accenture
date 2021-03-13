const User = require('../../../models/user')
const authService = require('../../../services/auth.service')



const loginHandler = async (request, h) => {
    const user = new User(request.payload)
    const existance = await authService.verifyPassword(user)

    if(existance) {
        return authService.sign({username: user.username})
    }
    return 'Falhou'
}

module.exports = loginHandler