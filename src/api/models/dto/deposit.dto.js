const Joi = require('joi');

const DepositRequestDTO = Joi.object({
    headers : Joi.object({'x-access-token':Joi.string()}).unknown(),
    account: Joi.number().required(),
    userCPF: Joi.string().required(),
    value: Joi.number().required()
}).label('DepositRequestDTO')


module.exports = {DepositRequestDTO}