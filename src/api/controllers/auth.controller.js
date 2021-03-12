const service = require('../services/auth.service')


const login = async (request, h) => {

    //TODO: Refatorar
    const { username, password } = request.payload
    return await service.sign({username, password})

}

const validate = async (request, h) => {
    const token = request.headers['x-access-token']
    if(!token) return { auth: false, message: 'No token provided'}   

    try {
        const result = await service.verify(token)
        return result
    } catch (error) {
        return error
    }
}


module.exports = {
    login, validate
}