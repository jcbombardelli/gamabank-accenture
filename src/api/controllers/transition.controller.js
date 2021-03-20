const service = require('../services/transition.service')
const { checkSchema } = require('../../helpers/schemaChecker')
const TransitionController = require('../models/TransitionController')

const depositDebit = async(request, h) => {
    try {
        const transitionDTO = new TransitionController(request.payload)
        checkSchema(transitionDTO)

        const serviceResult = await service.createdDepositDebit(transitionDTO)
        return h.response(serviceResult).code(201)

    } catch (err) {
        return h
            .response({
                name: err.name,
                error: err.message
            })
            .code(err.statusCode)
    }
}

module.exports = { depositDebit }
