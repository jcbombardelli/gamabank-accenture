const transferRepository = require('../repository/transfer.repository')
const { getCurrentAccount, updateBalance} = require('../repository/checkingAccount.repository')
const {isPositiveNumber} = require('../helpers/validate')
const getBank = require('../repository/bank.repository')
const {getClientByCod} = require('../repository/client.repository')




const newTransferReceived = async (transferData) =>{
    if(!isPositiveNumber) return 'Valor incorreto.'
    const verifybank = await getBank(transferData.bank)
    if(!verifybank) throw new Error('Banco não é valido')

    const account = await getCurrentAccount(transferData.accNumber)
    if(!account) throw new Error('Conta não existe')

    if (!(await getClientByCod(account.clientCod).clientCPF === transferData.CPF)) throw new Error("CPF não equivalente ao do usuário")
    await transferRepository.newTransferEntrie(transferData)
    const newBalance = account.checkingAccountBalance + transferData.value

    await updateBalance(transferData.accNumber, newBalance)
    
    return 'Transferência realizada com sucesso'
    
    
}


//---------------------------------------------------------------//
//--------------------------Refatorar----------------------------//
//---------------------------------------------------------------//

const validateCheckout = async transferData => {

    if(!isPositiveNumber(transferData.value)) throw new Error('Valor incorreto.')
    const verifybank = await getBank(transferData.bank)
    if(!verifybank) throw new Error('Banco não é valido') 
    const account = await getCurrentAccount(transferData.accNumber)
    if(!account) throw new Error ('Conta não existe')

    return account
}

const newTransferCheckout = async transferData => {
    const account = validateCheckout(transferData)
    if(transferData.value > account.checkingAccountBalance) throw new Error('Saldo insuficiente para realizar a transação')
    await transferRepository.newTransferCheckout(transferData)
    const newBalance = account.checkingAccountBalance - transferData.value
    await updateBalance(transferData.accNumber, newBalance)
   
    return 'Transferência realizada com sucesso'
    
    
}
//---------------------------------------------------------------//
//--------------------------Refatorar----------------------------//
//---------------------------------------------------------------//
const newDebitExpenses = async transferData => {
    const account = await validateCheckout(transferData)
    if(transferData.value > account.checkingAccountBalance) throw new Error('Saldo insuficiente para realizar a transação')
    await transferRepository.newDebitExpenses(transferData)
    const newBalance = account.checkingAccountBalance - transferData.value
    await updateBalance(transferData.accNumber, newBalance)
   
    return 'Transferência realizada com sucesso'
    
    
}

module.exports = {newTransferReceived, newTransferCheckout, newDebitExpenses}

