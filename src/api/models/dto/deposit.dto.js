const Joi = require("joi");

const DepositUserRequestDTO = Joi.object({

    cpf: Joi.string().required(),
    value: Joi.string().required(),
    email: Joi.string.required(),
    userId: Joi.string.required()

}).label("DepositUserResponseDTO");

const DepositHeaderDTO = Joi.object().keys({
    'token': Joi.string().required()
}).options({ allowUnknown: true })


const DepositResponseDTO = Joi.object({
    message: Joi.string()
}).label("DepositResponseDTO");


  module.exports = (
      DepositUserRequestDTO,
      DepositHeaderDTO,
      DepositResponseDTO
  )