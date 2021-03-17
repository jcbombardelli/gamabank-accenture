const Joi = require('joi');

const LoginRequestDTO = Joi.object({
    clientEmail: Joi.string().required(),
    clientPassword: Joi.string().required()
}).label('LoginRequestDTO')


const LoginResponseDTO = Joi.object({
    login: Joi.string().valid('Concluido','Invalido'),
    auth: Joi.alternatives().conditional('login',{is:'Concluido', then: Joi.bool().required()}),
    token: Joi.alternatives().conditional('login',{is:'Concluido', then: Joi.string().required()}),
    error: Joi.alternatives().conditional('login',{is:'Invalido', then: Joi.string().required()})
}).label('LoginResponseDTO')
 


const SignUpRequestDTO = Joi.object({
    clientEmail: Joi.string().required(),
    clientPassword:Joi.string().required(),
    clientName:Joi.string().required(),
    clientCPF:Joi.string().required() 
    
}).label('SignUpRequestDTO')


module.exports = { LoginRequestDTO , LoginResponseDTO, SignUpRequestDTO }