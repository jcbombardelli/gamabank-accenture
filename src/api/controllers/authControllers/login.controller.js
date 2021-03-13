const Client = require('../../../models/client')
const authService = require('../../../services/auth.service')



const loginHandler = async (request, h) => {
    const client = new User(request.payload)
    const existance = await authService.verifyPassword(client)

    if(existance) {
        return authService.sign({username: client.clientEmail})
    }
    return 'Falhou'
}

module.exports = loginHandler