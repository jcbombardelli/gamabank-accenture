const auth_service = require('../services/auth.service')
const database_service = require('../services/database')

const login = async (request, h) => {
    const { username, password } = request.payload
    // requisicao ao banco de dados
    const retornoDoBanco = {
        id: 1,
        saldo: 5000
    }

    return await auth_service.sign(
        {
            username, 
            password,
            sub: retornoDoBanco.id,
        })

}
const register = async(request, h)=>{
    const {email, username, pass, cpf} = request.payload

    return await auth_service.sign({email, username, pass, cpf})
}


// const validate = async (request, h) => {
//     const token = request.headers['x-access-token']

//     try {
//         const validated = await auth_service.verify(token)
//         return validated
//     } catch (error) {
//         return error
//     }
// }



module.exports = {
    login,
    register
    //validate
}