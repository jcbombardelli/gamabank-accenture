const database = require("../../configs/database");

const findUserByCpf = async (cpf) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE cpf='${cpf}'`
  );

  // retorna primeiro registro encontrado
  return user[0];
};

const createUser = async (nome, cpf, email, senha, telefone) => {
  const user = await database.execute(
    `INSERT INTO usuario (nome, cpf, email, senha, telefone) VALUES ('${nome}', '${cpf}','${email}','${senha}','${telefone}');`
  );

  console.log(user.insertId);

  // retorna id do registro criado
  return { id: user.insertId };
};

module.exports = { findUserByCpf, createUser };
