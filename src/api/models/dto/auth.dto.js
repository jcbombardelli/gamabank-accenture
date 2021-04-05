const joi = require('joi')

const LoginRequestDTO = joi.object({
    username: joi.string().max(100).required(),
    password: joi.string().max(200).required()
}).label('LoginRequestDTO')


const LoginResponseSuccessDTO = joi.object({
    token: joi.string(),
    auth: joi.bool()
}).label('LoginResponseSuccessDTO')

const LoginResponseErrorDTO = joi.object({
    message: joi.string().allow('Login não permitido', 'Excedeu quantidade de caracteres'),
    auth: joi.boolean().default(false)
}).label('LoginResponseErrorDTO')


module.exports = {
    LoginRequestDTO,
    LoginResponseSuccessDTO,
    LoginResponseErrorDTO
}