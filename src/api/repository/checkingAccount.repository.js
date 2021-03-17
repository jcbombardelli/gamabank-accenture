const database = require('../../helpers/database.util.js')

const getCurrentAccount = async accNumber => {
    let sqlstatement = `SELECT * FROM checkingaccount
    WHERE checkingAccountNumber = "${accNumber}"
    `
    try{
        const result = await database.query(sqlstatement)
        return result[0]
    }catch(err){
        console.log(err)
        return(false)
    }

}



const getAccountById = async clientCod => {
    let sqlstatement = `SELECT * FROM checkingaccount
    WHERE clientCod = "${clientCod}"
    `
    try{
        const result = await database.query(sqlstatement)
        return result[0]
    }catch(err){
        console.log(err)
        return(false)
    }

}

const updateBalance = async (accNumber, value) => {
    let sqlstatement = `UPDATE checkingaccount SET checkingAccountBalance = ${value} WHERE checkingaccount.checkingAccountNumber = "${accNumber}"`
    try {
         await database.query(sqlstatement)
         return `Saldo atualizado para ${value}`
    } catch(err){
        console.log(err)
    }
}

module.exports = { getCurrentAccount, updateBalance, getAccountById }