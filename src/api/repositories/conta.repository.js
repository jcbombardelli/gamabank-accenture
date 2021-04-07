const database = require("../../configs/database");

const findContaByUserId = async (idUsuario) => {
  const user = database.execute(
    `SELECT * FROM conta WHERE idUsuario='${idUsuario}'`
  );

  // retorna o primeiro usuario encontrado
  return user[0];
};

const findContaByCpf = async (cpfUsuario) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE email='${cpfUsuario}'`
  );

  return user[0];
};

const createConta = async (idUsuario) => {
  const saldo = 0;
  const dateAbertura = new Date();

  const create = await database.execute(
    `INSERT INTO conta ( idUsuario, saldo, dateAbertura) VALUES ('${idUsuario}', ${saldo},'${dateAbertura.toLocaleDateString()}');`
  );

  return { id: create.insertId };
};

const updateBalanceAccount = async (id, valor) => {
  const balance = await database.execute(
    `UPDATE conta SET saldo = ${valor} WHERE idUsuario = '${id}'`
  )
  return balance
}

module.exports = { createConta, findContaByUserId, findContaByCpf, updateBalanceAccount};
