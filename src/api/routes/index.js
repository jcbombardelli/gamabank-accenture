const { status } = require("../controllers/app.controller");
const authController = require("../controllers/auth.controller");

const { LoginRequestDTO, LoginResponseDTO } = require("../models/dto/auth.dto");
const Joi = require("joi");

const root = {
  method: "GET",
  path: "/",
  handler: rootController,
  options: {
    tags: ["api"],
    description: "Rota Principal",
    notes: "Pode ser utilizado sempre que outra aplicação estiver monitorando",
  },
};
const statusRoute = {
  method: "GET",
  path: "/status",
  handler: statusController,
  options: {
    tags: ["api"],
    description: "Verificação do status da aplicação",
    notes: "Pode ser utilizado sempre que outra aplicação estiver monitorando",
  },
};
const loginRoute = {
  method: "POST",
  path: "/login",
  handler: authController.login,
  options: {
    tags: ["api", "login"],
    description: "Realizar Login",
    notes:
      "Retornado atributo AUTH e atributo TOKEN para utilizar nas próximas consultas internas",
    validate: {
      payload: LoginRequestDTO,
    },
    response: {
      status: {
        200: LoginResponseSuccessDTO,
        400: LoginResponseErrorDTO,
        500: LoginResponseErrorDTO, //Joi.any()
      },
    },
  },
};

module.exports = [rootRoute, statusRoute, loginRoute];
