const userRepository = require("../repositories/userRepository");
const contaService = require("../services/conta.service");

const createUser = async (nome, cpf, email, senha, telefone) => {
  // verifico se usuario já existe
  const findUser = await userRepository.findUserByCpf(cpf);

  // caso exista retorno erro
  if (findUser) {
    console.log("CPF duplicado");
    throw new Error("CPF já cadastrado");
  }

  // chamo repositorio para criação do usuario
  const user = await userRepository.createUser(
    nome,
    cpf,
    email,
    senha,
    telefone
  );

  // pego o id do usuario criado e envio para criação de conta
  const conta = await contaService.createConta(user.id);

  return {
    message: "Usuario Criado com sucesso",
    id: user.id,
    idConta: conta.id,
  };
};

module.exports = { createUser };
