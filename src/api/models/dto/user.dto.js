const Joi = require("joi");

const CreateUserDTO = Joi.object({
  nome: Joi.string().required(),
  cpf: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
  telefone: Joi.string().required(),
}).label("CreateUserDTO");

const CreateUserResponseDTO = Joi.object({
  message: Joi.string().required(),
  id: Joi.number().required(),
  idConta: Joi.number().required(),
  login: Joi.string().required(),
}).label("CreateUserResponseDTO");

module.exports = {
  CreateUserDTO,
  CreateUserResponseDTO,
};
