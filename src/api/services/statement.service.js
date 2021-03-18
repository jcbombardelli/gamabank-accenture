const {getEntries, getCheckouts} = require('../repository/statement.repository');
const StatementRegister = require('../models/statement')

//Entrada vinda do getEntries: checkingAccountEntryDate, checkingAccountEntryType, checkingAccountEntryValue, checkingAccountEntryDescription

//Entrada vinda do getCheckouts: checkingAccountCheckoutDate, checkingAccountCheckoutType, checkingAccountCheckoutValue, checkingAccountCheckoutDescription

//Entradas do modelo: Mes, Date, Valor, tipoOperacao, descricao
//tipoOperacao: Transferência, depósito, etc
//statementRequestObj: {acc, initDate, endDate}
//Criar um helper para validar as datas!

const generateStatement = async ({acc, initDate, endDate}) => {
    try{
        //Iteração das entradas
        const entryList = await getEntries({acc,initDate,endDate})
        const statementEntries = entryList.map(entryRegister => {
            const {
                checkingAccountEntryDate, 
                checkingAccountEntryType, 
                checkingAccountEntryValue, 
                checkingAccountEntryDescription } = entryRegister
            return (
                new StatementRegister(
                    checkingAccountEntryType, 
                    checkingAccountEntryDate,
                    checkingAccountEntryValue,
                    "entry",
                    checkingAccountEntryDescription
                )
            )
        })
        //Iteração das saídas
        const checkoutList = await getCheckouts({acc,initDate,endDate})
        //console.log('checkoutList', checkoutList)
        const statementCheckouts = checkoutList.map(checkoutRegister => {
            //console.log(checkoutRegister)
            const {
                checkingAccountCheckoutDate, 
                checkingAccountCheckoutType, 
                checkingAccountCheckoutValue, 
                checkingAccountCheckoutDescription } = checkoutRegister
            return (
                new StatementRegister(
                    checkingAccountCheckoutType, 
                    checkingAccountCheckoutDate.toUTCString(), //.toLocaleString(),
                    checkingAccountCheckoutValue,
                    "checkout",
                    checkingAccountCheckoutDescription
                )
            )
        })
        //console.log([ ...statementEntries,...statementCheckouts ])

        const result =  [ ...statementEntries,...statementCheckouts ].sort((entrada1, entrada2) => {
            const date1 = Date.parse(entrada1.date)
            const date2 = Date.parse(entrada2.date)
            return(date2 - date1)
        })
        
        console.log(result)
        return result

    }catch(err){
        console.log(err)
    }

}

module.exports = {generateStatement}