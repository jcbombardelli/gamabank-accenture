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
        return `O depósito foi recebido com sucesso! Valor: R$ ${obj.value}.`
    }catch(err){
        console.log('Erro durante a operação de depósito.')
        throw err
    }
}


module.exports = {newDepositQuery}
