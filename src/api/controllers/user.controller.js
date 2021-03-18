const service = require('../services/user.service')
const User = require('../models/User')
const { checkSchema } = require('../../helpers/schemaChecker')

const newAccount = async (request, h) => {
    try {
        const user = new User(request.payload)

        if (checkSchema(user)) {
            const result = await service.createAccount(user)
            return h.response(result).code(201)
        }

    } catch (err) {
        console.log(err)
        return h.response({ error: err.message }).code(err.statusCode)
    }
}

module.exports = { newAccount }
