const { newDebitExpenses } = require('../../../services/debitExpense.service')
const { getUserTokenData } = require('../../../services/userTokenData.service')
const CheckingTransaction = require('../../../models/checkingTransaction')


const paydebitHandler = async (request, h) => {
    const token = request.headers['x-access-token']
    if (token) {
        try {
            const { value, description } = request.payload
            const { checkingAccountNumber } = await getUserTokenData(token) // dados out cpf e ContaDestino
            const transferData = new CheckingTransaction({ description, account: checkingAccountNumber, value, bank: 999 })
            return await newDebitExpenses(transferData)

        } catch (err) {
            return err.message
        }
    }
}

module.exports = paydebitHandler