const { customError } = require("./error")

const checkSchema = (object) => {
    const payloadKeys = Object.entries(object)

    payloadKeys.forEach((entry) => {
        const value = entry[1]

        if (!value) {
            throw new customError('SchemaInvalido',`${entry[0]} obrigatório.`, 400)
        }
        return true
    })
}

module.exports = { checkSchema }
