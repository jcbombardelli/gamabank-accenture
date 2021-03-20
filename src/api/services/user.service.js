const repository = require('../repository/user.repository')
const { encryptPassword } = require('../../helpers/myCrypto')
const { salt } = require('../../configs/env')
const { cpfChecker } = require('../../helpers/recordCheckers')

const checkPassword = password => {
    if (password.length < 6)
       thor
}

const createUser = async newUser => {
    const cpf = newUser.cpf
    const password = newUser.password

    if (!checkPassword(password))
        throw new CustomError({
            name: 'ErroSenha',
            message: 'Senha com número de caracteres inválido',
            statusCode: 400
        })

    cpfChecker(cpf)

    const checkUser = await repository.findByCpf(cpf)

    if (checkUser.length === 0) {
        const result = await repository.save(newUser)
        return { status: 'success', message:'Usuário criado com sucesso.', result, code: 201 }
    } else {
        throw new CustomError({
            name: 'ErroConflito',
            message: 'Cpf já cadastrado',
            statusCode: 409
        })
    }
}

module.exports = { createUser }
