const Joi = require("joi");

const CreateUserDTO = Joi.object({
  nome: Joi.string().required(),
  cpf: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
  telefone: Joi.string().required(),
}).label("CreateUserDTO");

const CreateUserResponseDTO = Joi.object({
  nome: Joi.string().required(),
  cpf: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
}).label("CreateUserResponseDTO");

module.exports = {
  CreateUserDTO,
  CreateUserResponseDTO,
};
