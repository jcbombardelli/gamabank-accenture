const Joi = require('joi')

const SignupRequestDTO = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    cpf: Joi.string().required(),
    password: Joi.string().required()
}).label('SignupRequestDTO')

const SignupResponseDTO = Joi.object({
    message: Joi.string()
}).label('SignupResponseDTO')

module.exports = { SignupRequestDTO, SignupResponseDTO }
