const database = require('../helpers/database.util.js')

const getCurrentAccount = async accNumber => {
    let acc = `SELECT * FROM checkingaccount
    WHERE checkingAccountNumber = "${accNumber}"
    `
    try{
        const result = await database.query(acc)
        return result[0]
    }catch(err){
        console.log(err)
    }

}

console.log(getCurrentAccount("58f1b86e-f99a-42e1-9251-ead8f623c5c5"))

module.exports = { getCurrentAccount }