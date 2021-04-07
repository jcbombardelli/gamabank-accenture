const transferService = require("../services/transfer.service");

const banktransfer = async (request, h) => {
    const  { token } = request.headers;
    const { email, cpf, codigoBanco, valor } = request.payload;
    try {
      if(!cpf || !codigoBanco){
        const bankTransferIntern = await transferService.transferIntern(1, email, valor);
        return bankTransferIntern
      }
    
      const bankTransferExtern = await transferService.transferExtern(1, codigoBanco, cpf, valor);
      return bankTransferExtern
      
    } catch (error) {
      console.log(error)
      if(error.message == 'CPF inválido' || 
        error.message == 'Código do banco inválido'){
        return h.response(error.message).code(400);
      }

      else if(error.message == 'E-mail inválido, correntista não encontrado' ||
        error.message == 'Saldo insuficiente' ||
        error.message == 'Transferência inválida'){
        return h.response(error.message).code(401);
      }
      else{
        return h.response(error.message).code(503);
      };
    }
}

module.exports = { banktransfer }