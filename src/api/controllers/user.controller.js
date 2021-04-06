const userService = require("../services/user.service");
const contaService = require("../services/conta.service");

const store = async (request, h) => {
  const { nome, cpf, email, senha, telefone } = request.payload;

  // envio para o service dados do usuario
  const createConta = await userService.createUser(
    nome,
    cpf,
    email,
    senha,
    telefone
  );

  return createConta;
};

const transfer = async (request, h) => {
  const  { token } = request.headers;
  const { email, cpf, codigoBanco, valor } = request.payload;

  if(cpf === "" || codigoBanco === ""){
    const transferIntern = await contaService.transferIntern(2, email, valor);
    return transferIntern
  }

  const transferExtern = await contaService.transferExtern(codigoBanco, cpf, valor);
  return transferExtern
}

module.exports = { store, transfer };