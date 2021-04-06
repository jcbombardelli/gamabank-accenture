


const accountService = require('../services/account.service')

const deposit = async (request, h) => {
    const { userId, value } = request.payload;
  
    // envio para o service dados do usuario
    const updateBalance = await accountService.uptadeBalance(
      userId,
      value
    );
  
    return updateBalance;
  };

  module.exports = {
    deposit
  }