const lancamentoRepository = require("../repositories/lancamento.repository");
const contaRepository = require("../repositories/conta.repository");
const validarCPF = require("validar-cpf");
const { validCodBank } = require("../../helpers/codBanco");

const transferIntern = async (id, email, valor) => {
    const findContaDestiny = await contaRepository.findContaByUserEmail(email);
    const valorC = parseFloat(valor);
  
    if(findContaDestiny === undefined){
      throw new Error('E-mail inválido, correntista não encontrado');
    }
    
    if(id === findContaDestiny.id){
      throw new Error('Transferência inválida'); 
    }
  
    const verifySaldo = await contaRepository.findContaByUserId(id);
  
    if(verifySaldo.saldo < valorC){
      throw new Error('Saldo insuficiente');
    }

    const saldoContaDestiny = await contaRepository.findContaByUserId(findContaDestiny.id);
  
    let valorDebit = parseFloat(verifySaldo.saldo) - valorC;
    let valorCredit = parseFloat(saldoContaDestiny.saldo) + valorC;
  
    await contaRepository.alterSaldoConta(id, valorDebit);
  
    await contaRepository.alterSaldoConta(saldoContaDestiny.id ,valorCredit);
  
    await lancamentoRepository.register(id, `Transferência para o ${email}`,valorC);
  
    return {
      message: 'Transferência realizada com sucesso'
    };
  };
  
  const transferExtern = async (id, codigoBanco, cpf, valor) => {
    
    const verifySaldo = await contaRepository.findContaByUserId(id);
    const valorC = parseFloat(valor);
    
    if(verifySaldo.saldo < valorC){
        throw new Error('Saldo insuficiente');
    };

    const verifyCodBanco = await validCodBank(codigoBanco);
    
    if(verifyCodBanco == false){
        throw new Error('Código do banco inválido');
    };

    const cpfV = await validarCPF(cpf);

    if(cpfV == false){
        throw new Error('CPF inválido');
    };

    let valorDebit = parseFloat(verifySaldo.saldo) - valorC;

    await contaRepository.alterSaldoConta(id, valorDebit);

    await lancamentoRepository.register(id, `Transferência para ${verifyCodBanco.label}`, valorC);

    return {
        message: 'Transferência realizada com sucesso'
    };

  };
  
  module.exports = { transferIntern, transferExtern };
  