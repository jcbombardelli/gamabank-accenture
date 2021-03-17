const clientRepository = require('../repository/client.repository')
const mycripto = require('../../helpers/mycripto')
const validate = require('../../helpers/validate')

const newClient = async (client)=>{
    if(
        !validate.passwordValidator(client.clientPassword) ||
        !new validate.ValidaCPF(client.clientCPF).valida() ||
        !validate.emailValidator(client.clientEmail)
    
    ) return `Dados invalidos`

    const {encryptedPassword, salt} = await mycripto.encryptPassword(client.clientPassword);

    client.clientPassword = encryptedPassword
    client.clientSalt = salt


    return await clientRepository.newClient(client) 
}

// const returnClient = async (userName)=>{

// }


module.exports = { newClient }