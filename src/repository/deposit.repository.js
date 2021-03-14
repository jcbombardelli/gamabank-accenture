const database = require('../helpers/database.util.js')
//entrada: payload => {cpfRemetente,valor, accountNumber}

//checkingAccountEntryValue,
//checkingAccountNumber, 
//checkingAccountEntryCPF,

//accountOperationCode => Mudar pra ENUM, ('transf','deposit')
//bankCode

const newDepositQuery = async (obj) => {
    const {
    valor:checkingAccountEntryValue,
    destinatario:checkingAccountNumber,
    remetente: checkingAccountEntryCPF } = obj

    let depositSQL = `
    INSERT INTO checkingaccountentry
    (checkingAccountEntryValue,checkingAccountNumber, checkingAccountEntryCPF,checkingAccountEntryType)
    VALUES (${checkingAccountEntryValue},"${checkingAccountNumber}", "${checkingAccountEntryCPF}","deposit")
    `

    let updateBalanceSQL = `
    ALTER TABLE checkingaccount
    `

    try{
        await database.query(depositSQL)
        return `The deposit was successfully received! Value: R$ ${obj.valor}.`
    }catch(err){
        console.log('Error during deposit operation.')
    }
    

}

//const getCPF 


//checkingAccountEntryNumber, => Automático
//checkingAccountEntryDate,  => Automático