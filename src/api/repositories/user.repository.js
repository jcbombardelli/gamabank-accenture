const database = require("../../configs/database");
const crypto = require("../../helpers/mycrypto");

const findUserByCpf = async (cpf) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE cpf='${cpf}'`
  );

  // retorna primeiro registro encontrado
  return user[0];
};

<<<<<<< HEAD
=======
const findUserById = async (id) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE id='${id}'`
  );

  // retorna primeiro registro encontrado
  return user[0];
}

>>>>>>> 0317feb05f58ae4f9b54bdaf4b8a5c5f2941134c
const findUserByEmail = async (email) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE email='${email}'`
  );

<<<<<<< HEAD
  // retorna primeiro registro encontrado
=======
>>>>>>> 0317feb05f58ae4f9b54bdaf4b8a5c5f2941134c
  return user[0];
};

const createUser = async (nome, cpf, email, senha, telefone) => {
  const encrypt = await crypto.encryptPassword(senha, null);

  const user = await database.execute(
    `INSERT INTO usuario (nome, cpf, email, senha, telefone, salt) VALUES ('${nome}', '${cpf}','${email}','${encrypt.encryptedPassword}','${telefone}', '${encrypt.salt}');`
  );

  // retorna id do registro criado
  return { id: user.insertId };
};

<<<<<<< HEAD
module.exports = { findUserByCpf, createUser, findUserByEmail};
=======
module.exports = { findUserByCpf, createUser, findUserByEmail, findUserById };
>>>>>>> 0317feb05f58ae4f9b54bdaf4b8a5c5f2941134c
