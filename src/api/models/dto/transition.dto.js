const Joi = require('joi')

const DepositDebitRequestDTO = Joi.object({
    cpf_owner: Joi.string().required(),
    account_id_owner: Joi.string().required(),
    cpf_depositor: Joi.string().required(),
    value: Joi.number().required()
}).label('DepositDebitRequestDTO')

const DepositDebitResponseDTO = Joi.object({
    type: Joi.string(),
    status: Joi.string(),
    value: Joi.number(),
    description: Joi.string(),
    date: Joi.date()
}).label('DepositDebitResponseDTO')

module.exports = { DepositDebitRequestDTO, DepositDebitResponseDTO }
