const Transfer = require('../models/Transfer')
<<<<<<< HEAD
const transferService = require('../services/transfers.service')
const { verify } = require('../services/auth.service')

const execute = async (request, h) => {
    try {
        const token = request.headers['x-access-token']
        if (!token) return h.response({ error: 'Não foi fornecido token de autorização.' }).code(400)

        const { auth, message, data } = await verify(token)
        if (auth) {
            const transfer = new Transfer(request.payload)
            const check = checkSchema(userController)
            if (check) {
                const result = service.makeTransfer(transfer, data)

            }
            return h.response({ error: "Dados inválidos" }).code(400)
        }
        return h.response({ error: message }).code(400)
    } catch (err) {
        return h.response({ error: err.message }).code(500)
=======
const service = require('../services/transfers.service')
const authController = require('../controller/auth.service')

const execute = async (request, h) => {
    try {
        authService.verify()
        const transfer = new Transfer(request.payload)

        const result = service.createTransfer(transfer)
    } catch (err) {
        throw err
>>>>>>> Configs transfers
    }
}

module.exports = { execute }
