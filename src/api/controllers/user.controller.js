const dbConnection = require('../../configs/db')

const checkDatesLogin = async(username, password)=>{//Chega dados se dados fornecidos de usuário são válidos
    const query_result = await dbConnection.querySync(`select cpf from usuario where nome='${username}' and senha='${password}'`)
    dbConnection.end()//Finaliza conexão ao banco
    if (query_result.length > 0) return {isValid: true, cpf:query_result[0].cpf}
    return {isValid: false}
}

module.exports = {checkDatesLogin}