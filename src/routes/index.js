const {
  rootHandler,
  statusHandler,
} = require("../api/controllers/app.controller");
const authController = require("../api/controllers/auth.controller");
const userController = require("../api/controllers/user.controller");
const bankTransferController = require("../api/controllers/transfer.controller");
const faturaService = require("../api/services/fatura.service");

const {
  LoginRequestDTO,
  LoginResponseSuccessDTO,
  LoginResponseErrorUnauthorizedDTO,
  LoginResponseErrorBadDTO
} = require("../api/models/dto/auth.dto");

const {
  TransferBankHeaderDTO,
  TransferBankRequestDTO,
  TransferBankResponseDTO
} = require("../api/models/dto/transfer.dto");

const Joi = require("joi");

const {
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

// const login = {
//   method: "POST",
//   path: "/login",
//   handler: authController.login2,
//   options: {
//     tags: ["api"],
//     description: "Verificação do status da aplicação",
//     notes: "Pode ser utilizado sempre que outra aplicação estiver monitorando",
//   },
// };

const status2 = {
  method: "GET",
  path: "/hola",

  handler: statusHandler,
  options: {
    auth: "jwt",
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

const bankTransfer = {
  method: "POST",
  path: "/banktransfer",
  handler: bankTransferController.banktransfer,
  options: {
    tags: ["api", "transferencia"],
    description: "Rota para realizar transferência",
    notes: "Obs: CPF e código do banco só é obrigatório para transferência para outros bancos",
    validate: {
      headers: TransferBankHeaderDTO,
      payload: TransferBankRequestDTO
    },
    response: {
      status: {
        200: TransferBankResponseDTO,
        400: Joi.any(),
        401: Joi.any(),
        503: Joi.any()
      }
    }
  }
};

module.exports = [
  root,
  status,
  login,
  createUser,
  bankTransfer,
  getOpenInvoices,
  status2,
];
