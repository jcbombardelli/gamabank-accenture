const service = require('../services/user.service')
const User = require('../models/User')
const { checkCPF } = require('../../helpers/cpfChecker')

const newAccount = async (request, h) => {
    try {
        console.log("Entrei no newAccount")
        const user = new User(request.payload)
        if (checkCPF(user.getCpf())) {
            console.log("Cpf válido")

            // const payloadKeys = Object.keys(user)

            // payloadKeys.forEach(key => {
            //     const value = request.payload[key]

            //     if (!value) {
            //         throw new Error(`${key} obrigatório.`)
            //     }
            // }) Revisar

            const result = await service.createAccount(user)
            return result
        } else {
            console.log("Cpf inválido")
            return h.response({ message: "Cpf inválido" }).code(400)
        }
    } catch (err) {
        throw err
    }
}

module.exports = { newAccount }
