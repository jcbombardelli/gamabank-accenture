const transferService = require("../services/transfer.service");

const banktransfer = async (request, h) => {
    const  { token } = request.headers;
    const { email, cpf, codigoBanco, valor } = request.payload;

    if(!cpf || !codigoBanco){
        const bankTransferIntern = await transferService.transferIntern(1, email, valor);
        return bankTransferIntern
      }
    
      const bankTransferExtern = await transferService.transferExtern(1, codigoBanco, cpf, valor);
      return bankTransferExtern
}

module.exports = { banktransfer }