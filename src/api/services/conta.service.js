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

module.exports = { createConta };
