const database = require("../../configs/database");

const findCreditoByIdConta = async (idConta) => {
  const credito = await database.execute(
    `SELECT * FROM credito WHERE idConta='${idConta}'`
  );

  return credito[0];
};

const createCredito = async (idConta) => {
  const limite = 200;
  const limiteDisponivel = 200;

  const credito = await database.execute(
    `INSERT INTO credito ( idConta, limite, limiteDisponivel) VALUES ('${idConta}', ${limite},${limiteDisponivel});`
  );

  // retorna o id do registro criado

  return { id: credito.insertId };
};

module.exports = { createCredito, findCreditoByIdConta };
