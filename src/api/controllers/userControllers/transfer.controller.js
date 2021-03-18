const CheckingTransaction = require('../../models/checkingTransaction')
const { newTransferCheckout, newTransferReceived, newTransfer } = require('../../services/transfer.service')
const validate = require('../../../helpers/validate')
const { getUserTokenData } = require('../../services/userTokenData.service')
const {getClientByAccount} = require('../../repository/client.repository')


const transferHandler = async (request, h) => {

   const token = request.headers['x-access-token']
   console.log(request.payload)
   if (token) {
      try {

         const { clientCPF, checkingAccountNumber } = await getUserTokenData(token) // dados out cpf e conta
         const { CPF, accAnother, value } = request.payload
         const transferOut = new CheckingTransaction({ userCPF: clientCPF, value: value, account: checkingAccountNumber, bank: 999, accAnother: accAnother })
         const transferIn = new CheckingTransaction({ userCPF: CPF, value: value, account: accAnother, bank: 999, accAnother: checkingAccountNumber })
         
         return await newTransfer(transferOut, transferIn)

      } catch (err) {
         return err.message
       
      }
   }
   try {
      const { CPF } = request.payload
      if (new validate.ValidaCPF(CPF).valida()) {
         const transferData = new CheckingTransaction(request.payload)
         
         return await newTransferReceived(transferData)
      }
   } catch (err) {
      return err.message
   }
}

module.exports = transferHandler