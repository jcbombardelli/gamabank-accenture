const service = require('../services/user.service')
const User = require('../models/User')
const { checkCPF } = require('../../helpers/cpfChecker')



const newAccount = async (request, h) => {
    try {
        const user = new User(request.payload)
        if (checkCPF(user.getCpf())) {
            const payloadKeys = Object.entries(user)

            payloadKeys.forEach((entry) => {
                const value = entry[1]

                if (!value) {
                    throw new Error(`${entry[0]} obrigatório.`)
                }
            })

            const result = await service.createAccount(user)
            return h.response(result).code(201)
        } else {
            return h.response({ message: "Cpf inválido" }).code(400)
        }
    } catch (err) {
        return h.response({ error: err.message }).code(err.statusCode)
    }
}

module.exports = { newAccount }
