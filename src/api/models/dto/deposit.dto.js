const Joi = require("joi");

const DepositUserDTO = Joi.object({
    id: Joi.string().required(),
    valor: Joi.string().required(),
  }).label("DepositUserResponseDTO");


  module.exports = (
      DepositUserDTO
  )