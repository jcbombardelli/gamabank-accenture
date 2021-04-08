const { rootController, statusController } = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const depositController = require('../api/controllers/deposit.controller')
const { rootHandler, statusHandler } = require("../api/controllers/app.controller");
const authController = require("../api/controllers/auth.controller");
const userController = require("../api/controllers/user.controller");
const faturaService = require("../api/services/fatura.service");

const {
  LoginRequestDTO,
  LoginResponseSuccessDTO,
  LoginResponseErrorUnauthorizedDTO,
  LoginResponseErrorBadDTO
} = require("../api/models/dto/auth.dto");
const Joi = require("joi");

const {
  DepositUserRequestDTO,
  DepositHeaderDTO,
  DepositResponseDTO,
  DepositResponseErrorDTO
} = require("../api/models/dto/deposit.dto");

const { CreateUserDTO } = require("../api/models/dto/user.dto");
  CreateUserDTO,
  CreateUserResponseDTO,
} = require("../api/models/dto/user.dto");

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
        200: LoginResponseSuccessDTO,
        400: Joi.any(),//LoginResponseErrorBadDTO
        401: LoginResponseErrorUnauthorizedDTO
      },
    },
  },
};

const makeDeposit = {
    method: 'PUT',
    path: '/deposit',
    handler: depositController.deposit,
    options: {
      tags: ['api', 'deposit'],
      description: 'Rota para realizar deposito em conta debito',
      notes: "Obs: Qualquer pessoa com o email do dono da conta pode depositar",
      validate: {
        headers: DepositHeaderDTO,
        payload: DepositUserRequestDTO
      },
      response: {
        status: {
          200: DepositResponseDTO,
          404: Joi.any(),
          401: Joi.any(),
          503: Joi.any()

        }
      },
    },
  };
  
const getOpenInvoices = {
  method: "GET",
  path: "/invoice",
  handler: faturaService.getOpenInvoice,
  options: {
    tags: ["api", "batata"],
    description: "Verificação do status da aplicação",
    notes: "Pode ser utilizado sempre que outra aplicação estiver monitorando",
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
    response: {
      status: {
        200: CreateUserResponseDTO,
        400: Joi.any(),
      },
    },
  },
};

module.exports = [
  root,
  status, 
  login,
  createUser,
  makeDeposit,
  getOpenInvoices
  //validate
];
