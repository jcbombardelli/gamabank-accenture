const Joi = require('joi')

const LoginRequestDTO = Joi.object({
    cpf: Joi.string().required(),
    password: Joi.string().required()
}).label('LoginRequestDTO')

const LoginResponseDTO = Joi.object({
    auth: Joi.bool().required(),
    token: Joi.string().required()
}).label('LoginResponseDTO')

module.exports = { LoginRequestDTO, LoginResponseDTO }
