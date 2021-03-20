const service = require('../services/user.service')
const UserController = require('../models/UserController')
const { schemaChecker } = require('../../helpers/recordCheckers')

const newUser = async (request, h) => {
    try {
        const userController = new UserController(request.payload)

        schemaChecker(userController)

        const { status, message, result, code } = await service.createUser(userController)
        if (status === 'success')
            return h.response({ message, result }).code(code)
        return h.response({ error: message }).code(code)

    } catch (err) {
        return h.response({ error: err.message }).code(500)
    }
}

module.exports = { newUser }
