const database = require('../../helpers/database')
const { idGenerator } = require('../../helpers/id-generator')
const crypto = require('../../helpers/myCrypto')

const save = async user => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name, email, password, cpf } = user

            const { encryptedPassword, salt } = await crypto.encryptPassword(
                password
            )

            const id = idGenerator.generate()
            const sqlStatement = `
            INSERT INTO users (id, name, email, cpf, password, salt)
            VALUES ("${id}", "${name}", "${email}", "${cpf}", "${encryptedPassword}", "${salt}");
            `
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

const findByCpf = async cpf => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `SELECT * FROM users WHERE cpf="${cpf}";`
            const result = await database.execute(sqlStatement)
            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

const findByEmail = async email => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `SELECT * FROM users WHERE email="${email}";`
            const result = await database.execute(sqlStatement)
            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

module.exports = { save, findByCpf, findByEmail }
