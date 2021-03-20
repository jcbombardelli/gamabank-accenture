const service = require('../services/auth.service')

const login = async (request, h) => {
    try {
        const { cpf, password } = request.payload
        const result = await service.login({ cpfPayload: cpf, password })
        if (result.login === true) {
            return {
                auth: true,
                token: result.token
            }
        }
        return h.response({ error: result.message }).code(400)


    } catch(err) {
        return h
            .response({
                name: err.name,
                error: err.message
            })
            .code(err.statusCode)
    }
}

const validate = async (request, h) => {
    const token = request.headers['x-access-token']
    if (!token) return { auth: false, message: 'No token provided' }

    try {
        const result = await service.verifyJWT(token)
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    login,
    validate
}
