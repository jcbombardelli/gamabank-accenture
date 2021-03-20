const repository = require('../repository/user.repository')
const { encryptPassword } = require('../../helpers/myCrypto')
const { salt } = require('../../configs/env')
const { cpfChecker, passwordChecker } = require('../../helpers/recordCheckers')

const createUser = async newUser => {
    const { cpf, password } = newUser

    passwordChecker(password)

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
