const { CustomError } = require('./error')

const checkSchema = object => {
    const payloadKeys = Object.entries(object)

    payloadKeys.forEach(entry => {
        const value = entry[1]

        if (!value) {
            throw new CustomError({
                name: 'Input Invalido',
                message: `${entry[0]} obrigatório.`,
                statusCode: 400
            })
        }
        return true
    })
}

module.exports = { checkSchema }
