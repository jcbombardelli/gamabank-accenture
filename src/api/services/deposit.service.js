const contaRepository = require("../repositories/contaRepository");
const lancamentoRepository = require("../repositories/lancamento.repository");
const validarCPF = require("validar-cpf");


const updateBalance = async (cpf, value) => {

  const findAccount = await contaRepository.findContaByCpf(cpf);

  if(findAccount === undefined){
    throw new Error('Não existe correntista cadastrado com esse cpf');
  }

  if(value <= 0) {
    throw new Error('Valor não pode ser depositado');
  }
   if(!(validarCPF(cpf))) {

     throw new Error('CPF inválido');

   }

  await contaRepository.updateBalance(findAccount.id, value);

  await lancamentoRepository.createNewLaunchDebit(findAccount.id, parseFloat(valor));
  
  return {
    message: "Depósito realizado com sucesso",
    id: findAccount.id,
  };


}
module.exports = { updateBalance };