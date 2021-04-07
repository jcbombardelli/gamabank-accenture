const CPF = require("cpf");

module.exports = {
  validateCpf: async (cpf) => CPF.isValid(cpf),
};
