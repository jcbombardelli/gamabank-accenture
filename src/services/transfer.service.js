const transferRepository = require('../repository/transfer.repository')
const { getCurrentAccount, updateBalance} = require('../repository/checkingAccount.repository')
const {isPositiveNumber} = require('../helpers/validate')
const getBank = require('../repository/bank.repository')



const newTransferReceived = async (transferData) =>{
    if(!isPositiveNumber) return 'Valor incorreto.'
    const verifybank = await getBank(transferData.bank)
    if(!verifybank) return 'Banco não é valido received'

    const account = await getCurrentAccount(transferData.accNumber)
    if(!account) return 'Conta não existe'
    
    await transferRepository.newTransferEntrie(transferData)
    const newBalance = account.checkingAccountBalance + transferData.value

    await updateBalance(transferData.accNumber, newBalance)
    
    return 'Transferência realizada com sucesso'
    
    
}

const newTransferCheckout = async (transferData) =>{
    if(!isPositiveNumber) return 'Valor incorreto.'
    const verifybank = await getBank(transferData.bank)
    if(!verifybank) return 'Banco não é valido checkout'
    const account = await getCurrentAccount(transferData.accNumber)
    if(!account) return 'Conta não existe'
    if(transferData.value > account.checkingAccountBalance) return 'Saldo insuficiente para realizar a transação'
    await transferRepository.newTransferCheckout(transferData)
    const newBalance = account.checkingAccountBalance - transferData.value
    await updateBalance(transferData.accNumber, newBalance)
   
    return 'Transferência realizada com sucesso'
    
    
}

module.exports = {newTransferReceived, newTransferCheckout}

