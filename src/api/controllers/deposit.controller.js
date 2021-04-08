const depositService = require('../services/deposit.service')

const depositAsHolder = async (request, h) => {

    const { cpf, email,  value} = request.payload;

    const { userId } = await request.auth.credentials;

    const updateBalance = await depositService.uptadeBalanceAsHolder(
        cpf,
        value,
        email,
        userId
    )

    return updateBalance;

  }

  const depositAsNotHolder = async (request, h) => {

    const { cpf, email,  value} = request.payload;

    const updateBalance = await depositService.uptadeBalanceAsNotHolder(
        cpf,
        value,
        email
    )

    return updateBalance;

  }

  module.exports = {
    depositAsHolder,
    depositAsNotHolder
  }