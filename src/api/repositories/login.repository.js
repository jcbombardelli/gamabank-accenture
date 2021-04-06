const database = require('../../helpers')

const getInformationLogin = async(username, password)=>{//Chega dados se dados fornecidos de usuário são válidos
    const result = await database.execute(
      `select cpf from usuario where nome='${username}' and senha='${password}'`
    );
    return result[0]
  }
module.exports = { getInformationLogin }  