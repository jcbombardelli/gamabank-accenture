const signupHandler = require('../../api/controllers/authControllers/signup.controller')
const {SignUpRequestDTO} = require('../../api/models/dto/auth.dto')
const Joi = require('joi');

const signup = {
    method:'POST',
    path: '/auth/signup',
    handler: signupHandler,
    options: {
        tags: ['api', 'signup'],
        description: 'Rota de autenticação',
        notes: 'Anotações da rota...',
        validate: {
            payload: SignUpRequestDTO
        },
        response: {
            status: { 
                200: Joi.any(),
                400: Joi.any()
            }
        } 
    } 
}



module.exports = signup