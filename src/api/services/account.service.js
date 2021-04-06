const contaRepository = require("../repositories/contaRepository");
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


const updateBalance = async (idUsuario, value) => {

    // verifico se usuario já possui uma conta
    try {

        const conta = await contaRepository.findContaByUserId(idUsuario);

    } catch (error) {

        return Error(error)
    }

    await contaRepository.uptadeBalance(conta.id, value);

    // retorno mensagem com id da conta
  return {
    message: "Deposito Realizado com sucesso",
    id: conta.id,
  };


}
module.exports = { createConta };