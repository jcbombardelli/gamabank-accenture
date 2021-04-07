


const depositService = require('../services/deposit.service')

const deposit = async (request, h) => {

    const { cpf, value, codebank } = request.payload;
    const { token } = request.headers;

    if(!cpf || !codebank || !value){
      const updateBalance = await depositService.uptadeBalance(
        cpf,
        value
      );
  
    return updateBalance;
  };
}

  module.exports = {
    deposit
  }