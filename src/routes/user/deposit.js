const Joi = require('joi')
const depositHandler = require('../../api/controllers/userControllers/deposit.controller')
const {DepositRequestDTO} = require('../../api/models/dto/deposit.dto')
const deposit = {
    method:'POST',
    path: '/user/deposit',
    handler: depositHandler,
    options: {
        tags: ['api', 'deposit'],
        description: 'Rota de depósito',
        notes: 'Anotações da rota...',
        validate: {
            payload: DepositRequestDTO
        },
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } 
}


module.exports = deposit