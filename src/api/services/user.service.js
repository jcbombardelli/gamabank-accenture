const repository = require('../repository/user.repository')
const { customError } = require('../../helpers/error')

const checkPassword = senha => {
    const validPassword = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,30}$'
    ) //Vá mais longe do trello

    if (validPassword.test(senha)) {
        console.log('Password is Valid')
        return true
    }
    return false
}

const createAccount = async newUser => {
    const cpf = newUser.getCpf()
    const password = newUser.getPassword()

    console.log("Teste senha", checkPassword(password))

    if (checkPassword(password)) {
        const checkUser = await repository.findByCpf(cpf)

        if (checkUser.length === 0) {
            const result = await repository.save(newUser)
            return result
        } else {


            throw new customError({ name:'ErroConflito', message:'Cpf já cadastrado', status:409 })
        }
    } else {
        console.log("Senha com número de caracteres inválido")
        throw new customError({ name:'ErroSenha', message:'Senha com número de caracteres inválido', status:400 })
    }
}

module.exports = { createAccount }
