const Transfer = require('../models/Transfer')
const service = require('../services/transfers.service')
const authController = require('../controller/auth.service')

const execute = async (request, h) => {
    try {
        authService.verify()
        const transfer = new Transfer(request.payload)

        const result = service.createTransfer(transfer)
    } catch (err) {
        throw err
    }
}

module.exports = { execute }
