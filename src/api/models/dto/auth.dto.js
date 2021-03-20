const Joi = require('joi')

const LoginRequestDTO = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
}).label('LoginRequestDTO')

const LoginResponseDTO = Joi.object({
    token: Joi.string().required()
}).label('LoginResponseDTO')

module.exports = { LoginRequestDTO, LoginResponseDTO }
