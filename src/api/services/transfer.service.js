const lancamentoRepository = require("../repositories/lancamento.repository");
const contaRepository = require("../repositories/conta.repository");

const transferIntern = async (id, email, valor) => {
    const findContaDestiny = await contaRepository.findContaByUserEmail(email);
  
    if(findContaDestiny === undefined){
      throw new Error('E-mail inválido, correntista não encontrado');
    }
    
    if(id === findContaDestiny.id){
      throw new Error('Transferência inválida'); 
    }
  
    const verifySaldo = await contaRepository.findContaByUserId(id);
  
    if(verifySaldo.saldo < valor){
      throw new Error('Saldo insuficiente');
    }
  
  
    const saldoContaDestiny = await contaRepository.findContaByUserId(findContaDestiny.id)
  
    let valorDebit = parseFloat(verifySaldo.saldo) - parseFloat(valor);
    let valorCredit = parseFloat(saldoContaDestiny.saldo) + parseFloat(valor);
  
    await contaRepository.alterSaldoConta(id, valorDebit);
  
    await contaRepository.alterSaldoConta(saldoContaDestiny.id ,valorCredit);
  
    await lancamentoRepository.register(id, parseFloat(valor));
  
    return {
      message: 'Transferência realizada com sucesso'
    }
  };
  
  const transferExtern = async (codigoBanco, cpf, valor) => {
  
  };
  
  module.exports = { transferIntern, transferExtern };
  