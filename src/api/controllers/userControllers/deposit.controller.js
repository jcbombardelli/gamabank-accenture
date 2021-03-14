const validate  = require("../../../helpers/validate")
const service = require("../../../services/auth.service")

const depositHandler = async (request, h) => {
    const token = request.headers['x-access-token']
    try {
        const result = await service.verify(token)
        return result
    }catch(err){
        const {name,CPF} = request.payload
            if (name && new validate.ValidaCPF(CPF).valida()) {
                return `Autorizade Senhore ${name} com o CPF:${CPF}`
            }
        return {auth:false, message:`Falha na identificação`}
    }
    
}

module.exports = depositHandler