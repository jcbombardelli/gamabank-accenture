const contaRepository = require("../repositories/contaRepository");
const lancamentoRepository = require("../repositories/lancamento.repository");


const updateBalance = async (cpf, value) => {

  const findAccount = await contaRepository.findContaByCpf(cpf);

  if(findAccount === undefined){
    throw new Error('Não existe correntista cadastrado com esse cpf');
  }

  if(value <= 0) {
    throw new Error('Valor não pode ser depositado')
  }

  await contaRepository.updateBalance(findAccount.id, value);

  await lancamentoRepository.createNewLaunchDebit(findAccount.id, parseFloat(valor));
  
  return {
    message: "Deposito realizado com sucesso",
    id: findAccount.id,
  };


}
module.exports = { updateBalance };