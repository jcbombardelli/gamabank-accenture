const Joi = require("joi");

const TransferBankHeaderDTO = Joi.object({
    token: Joi.string().required()
}).label("TransferBankrHeaderDTO");

const TransferBankRequestDTO = Joi.object({
    email: Joi.string().required(),
    valor: Joi.string().required(),
    cpf: Joi.string(),
    codigoBanco: Joi.string()

}).label("TransferBankRequestDTO");

const TransferBankResponseDTO = Joi.object({
    message: Joi.string()
}).label("TransferBankResponseDTO");

const TransferBankResponseErrorDTO = Joi.object({
    message: Joi.string()
}).label("TransferBankErrorDTO");

module.exports = {
    TransferBankHeaderDTO,
    TransferBankRequestDTO,
    TransferBankResponseErrorDTO,
    TransferBankResponseDTO
}