const { CustomError } = require('./error')

const checkSchema = (object) => {
    const payloadKeys = Object.keys(object)

    let response


    payloadKeys.forEach(key => {
        const value = object[key]

        if (!value)
            response = false

        response =  true

    })
    return response
}

module.exports = { checkSchema }
