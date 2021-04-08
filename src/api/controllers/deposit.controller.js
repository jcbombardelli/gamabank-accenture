


const depositService = require('../services/deposit.service')

const deposit = async (request, h) => {

    const { userId, cpf, email,  value} = request.payload;
    const { token } = request.headers;

    const updateBalance = await depositService.uptadeBalance(
        cpf,
        value,
        email,
        userId
    )

    return updateBalance;

  }

  module.exports = {
    deposit
  }