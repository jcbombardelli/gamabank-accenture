const { rootController, statusController } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const {deposiUserDTO} = requite('../api/models/dto/deposit.dto')
const accountController = require('../api/controllers/account.controller')
const { rootHandler, statusHandler } = require("../api/controllers/app.controller");
const authController = require("../api/controllers/auth.controller");
const userController = require("../api/controllers/user.controller");

const {
  LoginRequestDTO,
  LoginResponseDTO,
} = require("../api/models/dto/auth.dto");
const Joi = require("joi");

const { CreateUserDTO } = require("../api/models/dto/user.dto");

const root = {
  method: "GET",
  path: "/",
  handler: rootHandler,
  options: {
    tags: ["api"],
    description: "Rota principal da aplicação",
    notes: "Alguma nota aqui",
  },
};

const status = {
  method: "GET",
  path: "/status",
  handler: statusHandler,
  options: {
    tags: ["api"],
    description: "Verificação do status da aplicação",
    notes: "Pode ser utilizado sempre que outra aplicação estiver monitorando",
  },
};

const login = {
  method: "POST",
  path: "/login",
  handler: authController.login,
  options: {
    tags: ["api", "login"],
    description: "Rota de autenticação",
    notes: "Anotações da rota...",
    validate: {
      payload: LoginRequestDTO,
    },
    response: {
      status: {
        200: LoginResponseDTO,
        400: Joi.any(),
      },
    },
  },
};

const makeDeposit = {
    method: 'PATCH',
    path: '/deposit',
    handler: accountController.deposit,
    options: {
      tags: ['api', 'deposit'],
      description: 'Realizar deposito em conta debito',
      validate: {
        payload: deposiUserDTO,
      },
    },
  };
const createUser = {
  method: "POST",
  path: "/user",
  handler: userController.store,
  options: {
    tags: ["api", "usuario"],
    description: "Rota criar usuario",
    validate: {
      payload: CreateUserDTO,
    },
  },
};

module.exports = [
  root,
  status, 
  login,
  createUser,
  makeDeposit
  //validate
];
