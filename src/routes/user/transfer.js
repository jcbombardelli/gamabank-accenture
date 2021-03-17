const transferHandler = require('../../api/controllers/userControllers/transfer.controller')
const { TransferRequestDTO } = require('../../api/models/dto/transfer.dto')
const Joi = require('joi')

const transfer = {
    method:'POST',
    path: '/user/transfer',
    handler: transferHandler,
    options: {
        tags: ['api', 'transfer'],
        description: 'Rota de transferência',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            payload: TransferRequestDTO
            
        },
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    }
}


module.exports = transfer