const CPF = require("cpf");

module.exports = {
  validateCpf: async (cpf) => CPF.isValid(cpf),

  formatCPf: async (cpf) => {
    const validate = CPF.isValid(cpf);

    if (!validate) {
      return false;
    }

    return CPF.format(cpf);
  },
};
