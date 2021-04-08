const contaRepository = require("../repositories/conta.repository");
const lancamentoRepository = require("../repositories/launch.repository");
const validarCPF = require("validar-cpf");
const validarEmail = require("email-validator");


const updateBalance = async (cpf, email, value) => {

  const findAccount = await contaRepository.findAccountByEmail(email);

  if(findAccount === undefined){
    throw new Error('Não existe correntista cadastrado com esse email');
  }

  if(value <= 0) {
    throw new Error('Valor não pode ser depositado');
  }
  
  if(!(validarCPF(cpf))) {

     throw new Error('CPF inválido');
  }

  if(!(validarEmail.validate(email))) {

    throw new Error('EMAIL inválido');
  }

  await contaRepository.updateBalance(findAccount.id, value);

  await lancamentoRepository.createNewLaunchDebit(cpf, parseFloat(valor));
  
  return {
    message: "Depósito realizado com sucesso",
    id: findAccount.id,
  };


}
module.exports = { updateBalance };