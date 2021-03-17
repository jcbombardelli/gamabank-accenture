const jwt = require('jsonwebtoken')
const { secret } = require('../../configs/env')
const clientRepository = require('../repository/client.repository')
const mycripto = require('../../helpers/mycripto')
const { exist } = require('joi')

const sign = async (object) => {

    const token = jwt.sign(object, secret, {
        algorithm:'HS256',
        expiresIn: 864000

    })
    return {
        auth:true,
        token
    }
}

const verify = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token,secret, (err, decoded) => {
            if(err) reject ({
                auth:false,
                message: 'Falha na autenticação do token'
            })
            resolve({
                auth:true,
                data: decoded
            })

        })
    })
}

const verifyPassword = async (client) => {
    return new Promise(async(resolve, reject) => {
        try {
        const {clientSalt, clientPassword} = await clientRepository.getClient(client)
        const existance = await mycripto.comparePassword(client.clientPassword, clientSalt, clientPassword)
            
          
           console.log(existance)
           resolve(existance)

        }catch(err) {
            console.error(err)
            reject(err)
        }

    })
}

module.exports = {
    sign,
    verify,
    verifyPassword

}