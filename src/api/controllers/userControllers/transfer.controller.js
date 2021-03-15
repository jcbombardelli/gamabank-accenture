const CheckingTransaction = require('../../../models/CheckingTransaction')
const {newTransferCheckout, newTransferReceived} = require('../../../services/transfer.service')
const validate = require('../../../helpers/validate')
const {getUserTokenData} = require('../../../services/userTokenData.service')


const transferHandler = async (request, h) => {

   const token = request.headers['x-access-token']
   try {
       const {clientCod, clientCPF, checkingAccountNumber} = await getUserTokenData(token) // dados out cpf e conta
       const {CPF, accAnother, value} = request.payload
       
       const transferOut = new CheckingTransaction({CPF:CPF, value:value, account:checkingAccountNumber, bank:999, accAnother:accAnother})
       await newTransferCheckout(transferOut)

       const transferIn = new CheckingTransaction({CPF:clientCPF, value:value, account:accAnother, bank:999, accAnother:checkingAccountNumber})
       return await newTransferReceived(transferIn)


    }catch(err){
       const {CPF} = request.payload            
       if (new validate.ValidaCPF(CPF).valida()) {
            const transferData = new CheckingTransaction(request.payload)
            return await newTransferReceived(transferData)
           }
       return {auth:false, message:`Falha na identificação`}
   }
}

module.exports = transferHandler