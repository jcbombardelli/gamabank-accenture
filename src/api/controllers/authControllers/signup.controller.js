const service = require('../../services/client.service')
const Client = require('../../models/client')


const signupHandler = async (request, h) => {
    const client = new Client(request.payload)
    return await service.newClient(client)
}
module.exports = signupHandler