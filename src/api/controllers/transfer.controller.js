const transferService = require("../services/transfer.service");

const banktransfer = async (request, h) => {
    const { userId } = await request.auth.credentials;
    

    const { email, cpf, codigoBanco, valor } = request.payload;

    if(!cpf || !codigoBanco){
        const bankTransferIntern = await transferService.transferIntern(userId, email, valor);
        return bankTransferIntern
      }
    
      const bankTransferExtern = await transferService.transferExtern(userId, codigoBanco, cpf, valor);
      return bankTransferExtern
}

module.exports = { banktransfer }