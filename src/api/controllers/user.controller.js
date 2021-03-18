const service = require('../services/user.service')
const User = require('../models/User')

const newAccount = async (request, h) => {
    try {
        const user = new User(request.payload)
        const payloadKeys = Object.keys(user)

        payloadKeys.forEach(key => {
            const value = request.payload[key]

            if (!value) {
                throw new Error(`${key} obrigatório.`)
            }
        })

        const result = await service.createAccount(user)
        return result
    } catch (err) {
        throw err
    }
}

module.exports = { newAccount }
