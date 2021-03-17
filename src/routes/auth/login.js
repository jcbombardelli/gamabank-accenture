const loginHandler = require('../../api/controllers/authControllers/login.controller')
const Joi = require('joi')
const {LoginRequestDTO, LoginResponseDTO } = require('../../api/models/dto/auth.dto')

const login = {
    method:'POST',
    path: '/auth/login',
    handler: loginHandler,
    options: {
        tags: ['api', 'login'],
        description: 'Rota de autenticação',
        notes: 'Anotações da rota...',
        validate: {
            payload: LoginRequestDTO
        },
        response: {
            status: { 
                200: LoginResponseDTO,
                400: Joi.any()
            }
        } 
    } 
}



module.exports = login