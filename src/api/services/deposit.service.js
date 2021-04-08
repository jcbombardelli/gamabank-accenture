const contaRepository = require("../repositories/conta.repository");
const lancamentoRepository = require("../repositories/launch.repository");
const validarCPF = require("validar-cpf");
const validarEmail = require("email-validator");


const updateBalance = async (cpf, email, value) => {

  const findAccount = await contaRepository.findAccountByEmail(email);
  const valueAdd = parseFloat(value);

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

  await lancamentoRepository.createNewLaunchDebit(cpf, parseFloat(value));

  const atualBalance = findAccount.saldo;

  let valueForDepit = parseFloat(atualBalance) + valueAdd;
  
  await contaRepository.updateBalance(findAccount.id, valueForDepit);
  
  return {

    message: "Depósito realizado com sucesso"
  
  };


}
module.exports = { updateBalance };