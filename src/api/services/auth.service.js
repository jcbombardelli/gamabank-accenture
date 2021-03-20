const jwt = require('jsonwebtoken')
const config = require('../../configs/env')
const { findByEmail } = require('../repository/user.repository')
const { comparePassword } = require('../../helpers/myCrypto')
// const UserJWTPayload = require('../models/UserJWTPayload')

const login = async ({ email, password}) => {
    try {

        const userResponse = await findByEmail(email)

        if (userResponse.length === 0)
        throw new CustomError({
            name: 'ErroConflito',
            message: 'Cpf já cadastrado',
            statusCode: 409
        })

            return { login: false, message: "email não está cadastrado" }

        const { id, name, email, cpf, salt, password: passwordEncrypted } = userResponse[0]
        if (comparePassword(password, salt, passwordEncrypted)) {
            // const userJWTPayload = new UserJWTPayload({ id, name, email, cpf })
            const userJWTPayload = { id, name, email, cpf }

            const jwt = signedJWT(userJWTPayload)
            console.log("jwt",jwt)
            return { login: true, message: "Login e senha corretos.", token: jwt }

        }

        return { login: false, message: "Login ou senha errados" }
    } catch (err) {
        console.error(err)
    }
}

const signedJWT = (userPayload) => {
    return jwt.sign(userPayload, config.secret, { algorithm: 'HS256', expiresIn: 300 })
}

const verifyJWT = async (token) => {

    // jwt.verify(token, config.secret, (err, decoded) => {
    //     if(err) return { auth: false, message: 'Failed to authenticated'}
    //     return { auth: true, data: decoded}
    // })

    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) reject({ auth: false, message: 'Failed to authenticated.', data: {}})

            resolve({ auth: true, message: 'Key is valid.', data: decoded })
        })
    })
}

module.exports = {login, verifyJWT}
