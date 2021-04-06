const connection = require("../../configs/db");

const findUserByCpf = async (cpf) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM usuario WHERE cpf='${cpf}'`,
      function (error, results) {
        if (error) {
          console.log(error);
          return reject(error);
        }

        return resolve(results[0]);
      }
    );
  });
};

const createUser = async (nome, cpf, email, senha, telefone) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO usuario (nome, cpf, email, senha, telefone) VALUES ('${nome}', '${cpf}','${email}','${senha}','${telefone}');`,
      async (error, results) => {
        if (error) reject(error);

        return resolve({ id: results.insertId });
      }
    );
  });
};

module.exports = { findUserByCpf, createUser };