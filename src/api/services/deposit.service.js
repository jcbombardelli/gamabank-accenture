const contaRepository = require("../repositories/conta.repository");
const launchRepository = require("../repositories/launch.repository");
const userRepository = require("../repositories/user.repository");
const validarCPF = require("../../helpers/cpf.helper");
const validarEmail = require("email-validator");
const userRepository = require("../repositories/user.repository");

const updateBalanceAsHolder = async (userId, cpf, value) => {

  const findAccount = await contaRepository.findContaByUserId(userId);

  if(findAccount === undefined){

    throw new Error('Não existe conta para o correntista relacionado');

  }

  if(!(validarCPF(cpf))) {

    throw new Error('CPF inválido');
 }

  const valueAdd = parseFloat(value);

  if(valueAdd <= 0) {
    throw new Error('Valor não pode ser depositado');
  }

  await launchRepository.createNewLaunchDebit(cpf, valueAdd);

  const atualBalance = findAccount.saldo;

  let valueAfterDepit = parseFloat(atualBalance) + valueAdd;
  
  await contaRepository.updateBalance(userId, valueAfterDepit);
  
  return {

    message: "Depósito realizado com sucesso"
  
  };

}

const updateBalanceAsNotHolder = async (cpf, email, value) => {

  if(!(validarEmail.validate(email))) {

    throw new Error('EMAIL inválido');
  }

  const findUser = await userRepository.findUserByEmail(email)

  if(findUser === undefined) {
    throw new Error('Não existe usuário com esse email cadastrado')
  }

  const findAccount = await contaRepository.findContaByUserId(findUser.userId);
  const valueAdd = parseFloat(value);

  if(valueAdd <= 0) {
    throw new Error('Valor não pode ser depositado');
  }
  
  if(!(validarCPF(cpf))) {

     throw new Error('CPF inválido');
  }

  await launchRepository.createNewLaunchDebit(cpf, valueAdd);

  const atualBalance = findAccount.saldo;

  let valueAfterDepit = parseFloat(atualBalance) + valueAdd;
  
  await contaRepository.updateBalance(findUser.userId, valueAfterDepit);
  
  return {

    message: "Depósito realizado com sucesso"
  
  };

}

module.exports = { updateBalanceAsHolder, updateBalanceAsNotHolder};