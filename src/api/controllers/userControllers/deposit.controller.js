const validate  = require("../../../helpers/validate")
const service = require("../../../services/auth.service")
const Deposit = require('../../../models/deposit')
const newDeposit = require('../../../services/deposit.service').newDeposit

const depositHandler = async (request, h) => {
    const token = request.headers['x-access-token']
    try {
        await service.verify(token)
        const deposit = new Deposit(request.payload)
        return await newDeposit(deposit) 
   }catch(err){
        const {CPF} = request.payload            
        if (new validate.ValidaCPF(CPF).valida()) {
                const deposit = new Deposit(request.payload)
                return await newDeposit(deposit) 
            }
        return {auth:false, message:`Falha na identificação`}
    }
    
}


module.exports = depositHandler