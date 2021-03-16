const database = require('../helpers/database.util.js')

//checkingAccountCheckout
//chekcingAccountEntrie
//valor, codigoBanco, CPForigem, ContaOrigem, ContaDestino, TipodaOperaçao
const newTransferEntrie = async (transferData) => {
    const sqlStatement = `INSERT INTO checkingaccountentry (checkingAccountNumber, checkingAccountEntryType, checkingAccountEntryValue, bankCode, checkingAccountEntryCPF, checkingAccountEntryAccountOrigin) VALUES (${transferData.accNumber}, 2, ${transferData.value}, ${transferData.bank}, ${transferData.userCPF}, ${transferData.accAnother})`
    try{
        const result = await database.query(sqlStatement)
        return result;
    }catch(err){
        console.log(err)
    }
    
}


//----------------------------------------------------------------
//          REFATORAR
//----------------------------------------------------------------
const newDebitExpenses = async (transferData) => {
    const sqlStatement = `INSERT INTO 
    checkingaccountcheckout (checkingAccountNumber, checkingAccountCheckoutType, checkingAccountCheckoutValue, bankCode,checkingAccountCheckoutDescription) VALUES (${transferData.accNumber}, 3, ${transferData.value}, ${transferData.bank},"${transferData.description}")`
    try{
        const result = await database.query(sqlStatement)
        return result;
    }catch(err){
        console.log(err)
    }
}


const newTransferCheckout = async (transferData) => {
    const sqlStatement = `INSERT INTO 
    checkingaccountcheckout (checkingAccountNumber, checkingAccountCheckoutType, checkingAccountCheckoutValue, bankCode, checkingAccountCheckoutCPF, checkingAccountCheckoutAccountDestiny) VALUES (${transferData.accNumber}, 1, ${transferData.value}, ${transferData.bank}, ${transferData.userCPF}, ${transferData.accAnother})`
    try{
        const result = await database.query(sqlStatement)
        return result;
    }catch(err){
        console.log(err)
    }
}

module.exports = {newTransferEntrie, newTransferCheckout, newDebitExpenses}