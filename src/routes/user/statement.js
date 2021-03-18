const statementHandler = require('../../api/controllers/userControllers/statement.controller')
const Joi = require('joi')

const statement = {
    method:'GET',
    path: '/user/statement/{initDate}/{endDate}',
    handler: statementHandler,
    options: {
        tags: ['api', 'statement'],
        description: 'Rota de extrato',
        notes: 'Anotações da rota...',
        validate: {
            headers: Joi.object({'x-access-token':Joi.string()}).unknown(),
            params: Joi.object({
                'initDate':Joi.number().required().description('Data inicial'),
                'endDate':Joi.number().required().description('Data final'),
        })
        },
        
        
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    }
}


module.exports = statement
