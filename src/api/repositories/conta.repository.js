const database = require("../../configs/database");

const findContaByUserId = async (idUsuario) => {
  const account = await database.execute(
    `SELECT * FROM conta WHERE idUsuario='${idUsuario}'`
  );

  // retorna o primeiro usuario encontrado
  return account[0];
};

const findContaByUserEmail = async (emailUsuario) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE email='${emailUsuario}'`
  );

  return user[0];
};

<<<<<<< HEAD
const findAccountByEmail = async (email) => {
  const user = await database.execute(
    `SELECT * FROM usuario WHERE email='${email}'`
  );

  return user[0];
};
=======
const alterSaldoConta = async (id, valor) => {
  const saldo = await database.execute(
    `UPDATE conta SET saldo = ${valor} WHERE idUsuario = '${id}'`
  )
  return saldo
}
>>>>>>> 0317feb05f58ae4f9b54bdaf4b8a5c5f2941134c

const createConta = async (idUsuario) => {
  const saldo = 0;
  const dateAbertura = new Date();

  const create = await database.execute(
    `INSERT INTO conta ( idUsuario, saldo, dateAbertura) VALUES ('${idUsuario}', ${saldo},'${dateAbertura.toLocaleDateString('en-CA')}');`
  );

  return { id: create.insertId };
};

<<<<<<< HEAD
// atualiza o saldo da conta
const updateBalanceAccount = async (id, valor) => {
  const balance = await database.execute(
    `UPDATE conta SET saldo = ${valor} WHERE idUsuario = '${id}'`
  )
  return balance
}

module.exports = { createConta, findContaByUserId, findAccountByEmail, updateBalanceAccount};
=======
module.exports = { createConta, findContaByUserId, findContaByUserEmail, alterSaldoConta };
>>>>>>> 0317feb05f58ae4f9b54bdaf4b8a5c5f2941134c
