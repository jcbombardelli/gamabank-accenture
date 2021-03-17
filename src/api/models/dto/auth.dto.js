const Joi = require('joi');

const LoginRequestDTO = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
}).label('LoginRequestDTO')


const LoginResponseDTO = Joi.object({
    auth: Joi.bool().required(),
    token: Joi.string().required()
}).label('LoginResponseDTO')



const SignUpRequestDTO = Joi.object({
    clientEmail: Joi.string().required(),
    clientPassword:Joi.string().required(),
    clientName:Joi.string().required(),
    clientCPF:Joi.string().required() 
    
}).label('SignUpRequestDTO')


module.exports = { LoginRequestDTO , LoginResponseDTO, SignUpRequestDTO }