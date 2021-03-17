const validate  = require("../../../helpers/validate")
const service = require("../../../services/auth.service")
const CheckingTransaction = require('../../../models/CheckingTransaction')
const newDeposit = require('../../../services/deposit.service').newDeposit

const depositHandler = async (request, h) => {

    const token = request.headers['x-access-token']
    if(token){
        try {
            await service.verify(token)
            const deposit = new CheckingTransaction(request.payload)
            return await newDeposit(deposit) 
        }catch(err){
            return err.message
        }
    }
    try{
        const {CPF} = request.payload            
        if (new validate.ValidaCPF(CPF).valida()) {
                const deposit = new CheckingTransaction(request.payload)
                return await newDeposit(deposit) 
        }
        throw new Error('CPF Inválido')
    }catch(err){
        return err.message
    }

}


module.exports = depositHandler