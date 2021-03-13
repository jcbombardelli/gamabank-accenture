const clientRepository = require('../repository/client.repository')
const mycripto = require('../helpers/mycripto')


const newClient = async (client)=>{

    const {encryptedPassword, salt} = await mycripto.encryptPassword(client.clientPassword);

    client.clientPassword = encryptedPassword
    client.clientSalt = salt


    return await clientRepository.newClient(client) 
}


module.exports = { newClient }