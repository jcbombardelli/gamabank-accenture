const contaRepository = require("../repositories/conta.repository");
const launchRepository = require("../repositories/launch.repository");
const validarCPF = require("../../helpers/cpf.helper");
const validarEmail = require("email-validator");
const userRepository = require("../repositories/user.repository");



const updateBalance = async (userId, cpf, email, value) => {

  const findAccount = await contaRepository.findContaByUserId(userId);
  const valueAdd = parseFloat(value);

  if(findAccount === undefined){

    throw new Error('Id inválido. Nao existe correntista com esse Id');

  }

  if(!(validarEmail.validate(email))) {

    throw new Error('EMAIL inválido');
  }
  
  const emailUser = findAccount.email;

  if(!(emailUser === email)) {
    throw new Error('Nao existe conta vinculada a esse email')
  }

  if(valueAdd <= 0) {
    throw new Error('Valor não pode ser depositado');
  }
  
  if(!(validarCPF(cpf))) {

     throw new Error('CPF inválido');
  }

  await launchRepository.createNewLaunchDebit(cpf, valueAdd);

  const atualBalance = findAccount.saldo;

  let valueAfterDepit = parseFloat(atualBalance) + valueAdd;
  
  await contaRepository.updateBalance(userId, valueAfterDepit);
  
  return {

    message: "Depósito realizado com sucesso"
  
  };

}
module.exports = { updateBalance };