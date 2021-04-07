const database = require("../../configs/database");
const crypto = require("../../helpers/mycrypto");

const findUserByCpf = async (cpf) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE cpf='${cpf}'`
  );

  // retorna primeiro registro encontrado
  return user[0];
};

const createUser = async (nome, cpf, email, senha, telefone) => {
  const encrypt = await crypto.encryptPassword(senha, null);

  const user = await database.execute(
    `INSERT INTO usuario (nome, cpf, email, senha, telefone, salt) VALUES ('${nome}', '${cpf}','${email}','${encrypt.encryptedPassword}','${telefone}', '${encrypt.salt}');`
  );

  console.log(user.insertId);

  // retorna id do registro criado
  return { id: user.insertId };
};

module.exports = { findUserByCpf, createUser };
