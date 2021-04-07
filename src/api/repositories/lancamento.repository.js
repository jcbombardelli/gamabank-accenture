const database = require("../../configs/database");

const register = async (id, descricao ,valor) => {
    const data = new Date();
    const tipo = 'TRANSFERENCIA';

    const register = await database.execute(
        `INSERT INTO lancamentos (idConta, data, tipo, descricao, valor) VALUES ('${id}', '${data.toLocaleDateString('en-CA')}', '${tipo}','${descricao}','${valor}')`
    );

    return register
}

module.exports = { register };
