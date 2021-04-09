const Joi = require("joi");

const DepositUserRequestDTO = Joi.object({

    cpf: Joi.string().required(),
    valor: Joi.string().required(),
    email: Joi.string().required()

}).label("DepositUserResponseDTO");

const DepositHeaderDTO = Joi.object().keys({

    'Authorization': Joi.string().required()

}).options({ allowUnknown: true })

    
const DepositResponseDTO = Joi.string().label("DepositResponseDTO");


  module.exports = (
      DepositUserRequestDTO,
      DepositHeaderDTO,
      DepositResponseDTO
  )