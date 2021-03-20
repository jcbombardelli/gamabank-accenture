const { CustomError } = require('./error')

const cpfChecker = cpf => {
    const cpfRegex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/

    if (cpf.search(cpfRegex) === -1) {
        throw new CustomError({
            name: 'CPF inválido.',
            message:
                'O registro deve haver 11 dígitos além dos caracteres especiais ponto e traço.',
            statusCode: 406
        })
    }
}

const valueChecker = value => {
    if (value < 0) {
        throw new CustomError({
            name: 'Valor de depósito negativo.',
            message: 'Valores de transações não podem ser negativos.',
            statusCode: 406
        })
    }
}

module.exports = {
    cpfChecker,
    valueChecker
}
