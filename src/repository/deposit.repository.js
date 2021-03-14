const database = require('../helpers/database.util.js')

const newDepositQuery = async (obj) => {
    const {
    value:checkingAccountEntryValue,
    accNumber:checkingAccountNumber,
    userCPF: checkingAccountEntryCPF } = obj

    let depositSQL = `
    INSERT INTO checkingaccountentry
    (checkingAccountEntryValue,checkingAccountNumber, checkingAccountEntryCPF,checkingAccountEntryType)
    VALUES (${checkingAccountEntryValue},"${checkingAccountNumber}", "${checkingAccountEntryCPF}","deposit")
    `

    try{
        await database.query(depositSQL)
        return `The deposit was successfully received! Value: R$ ${obj.value}.`
    }catch(err){
        console.log('Error during deposit operation.')
        throw err
    }
}


module.exports = {newDepositQuery}
