const Joi = require("joi");

const TransferBankHeaderDTO = Joi.object().keys({
    'token': Joi.string().required()
}).options({ allowUnknown: true })

const TransferBankRequestDTO = Joi.object({
    email: Joi.string(),
    valor: Joi.string().required(),
    cpf: Joi.string(),
    codigoBanco: Joi.string()

}).label("TransferBankRequestDTO");

const TransferBankResponseDTO = Joi.object({
    message: Joi.string()
}).label("TransferBankResponseDTO");

module.exports = {
    TransferBankHeaderDTO,
    TransferBankRequestDTO,
    TransferBankResponseDTO,
}