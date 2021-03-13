const jwt = require('jsonwebtoken')
const { secret } = require('../configs/env')
const userRepository = require('../repository/user.repository')
const mycripto = require('../helpers/mycripto')

const sign = async (object) => {
    const token = jwt.sign(object, secret,{
        algorithm:'HS256',
        expiresIn: 60

    })
    return {
        auth:true,
        token
    }
}

const verify = async (object) => {
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

const verifyPassword = async (user) => {
    return new Promise(async(resolve, reject) => {
        try {
            const {userSalt, userPassword} = await  userRepository.getUser(user)
            const existance = await mycripto.comparePassword(user.password, userSalt, userPassword)
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