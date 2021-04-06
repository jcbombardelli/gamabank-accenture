const contaRepository = require("../repositories/conta.repository");
const creditoService = require("../services/credito.service");
const faturaService = require("../services/fatura.service");

const createConta = async (idUsuario) => {
  // verifico se usuario já possui uma conta
  const findConta = await contaRepository.findContaByUserId(idUsuario);

  // caso exista retorno a conta
  if (findConta) {
    return findConta;
  }

  // chamo repositorio para criação da conta
  const conta = await contaRepository.createConta(idUsuario);

  // chamo service credito passando id da conta
  await creditoService.createCredito(conta.id);

  // chamo service de fatura passando id da conta
  await faturaService.createFatura(conta.id);

  // retorno mensagem com id da conta
  return {
    message: "Conta Criada com sucesso",
    id: conta.id,
  };
};

const transferIntern = async (id, email, valor) => {
  const findContaDestiny = await contaRepository.findContaByUserEmail(email);

  if(findContaDestiny === undefined){
    return {
      message: 'E-mail inválido, correntista não encontrado'
    }
  }
  
  if(id === findContaDestiny.id){
    return {
      message: 'Transferência inválida'
    }
  }

  const verifySaldo = await contaRepository.findContaByUserId(id);

  if(verifySaldo.saldo < valor){
    return {
      message: 'Saldo insuficiente'
    }
  }


  const saldoContaDestiny = await contaRepository.findContaByUserId(findContaDestiny.id)

  let valorDebit = parseFloat(verifySaldo.saldo) - parseFloat(valor);
  let valorCredit = parseFloat(saldoContaDestiny.saldo) + parseFloat(valor);

  await contaRepository.alterSaldoConta(id, valorDebit);

  await contaRepository.alterSaldoConta( saldoContaDestiny.id ,valorCredit);

  return {
    message: 'Transferencia realizada com sucesso'
  }
};

const transferExtern = async (codigoBanco, cpf, valor) => {

};

module.exports = { createConta, transferIntern, transferExtern };
