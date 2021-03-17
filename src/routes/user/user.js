const userHandler = require('../../api/controllers/userControllers/user.controller')
const Joi = require('joi');

const user = {
    method:'GET',
    path: '/user',
    handler: userHandler,
    options: {
        tags: ['api', 'user'],
        description: 'Rota de usuário já logado',
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    }
}


module.exports = user