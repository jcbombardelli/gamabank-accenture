const Client = require('../../../models/client')
const authService = require('../../../services/auth.service')



const loginHandler = async (request, h) => {
    const client = new Client(request.payload)
    const existance = await authService.verifyPassword(client)

    if(existance) {
        return authService.sign({username: client.clientEmail})
    }
    return 'Senha ou email inválido'
}

module.exports = loginHandler