


const depositService = require('../services/deposit.service')

const deposit = async (request, h) => {

    const { cpf, value, codebank } = request.payload;
    const { token } = request.headers;

    try {
      if(!cpf || !codebank || !value){
        const updateBalance = await depositService.uptadeBalance(
          cpf,
          value
       )
       return uptadeBalance;
      }
    } catch (error) {
      console.log(error)
      if(error.message == 'CPF inválido'){

        return h.response(error.message).code(400);

      } else {

        return h.response(error.message).code(503)

      }
  };
}
  module.exports = {
    deposit
  }