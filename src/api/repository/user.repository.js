const database = require('../../helpers/database')
const crypto = require('../../helpers/mycrypto')
const User = require('../models/User')

const save = async user => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name, email, password, cpf } = user
            const { encryptedPassword, salt } = await crypto.encryptPassword(
                password
            )
            const id = email

            const sqlStatement = `
            INSERT INTO users (id, name, email, cpf, password)
            VALUES ("${id}", "${name}", "${email}", "${cpf}", "${encryptedPassword}");
            `
            const result = await database.execute(sqlStatement)

            resolve(result)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

const findByUsername = async username => {
    return new Promise(async (resolve, reject) => {
        try {
            const sqlStatement = `SELECT * FROM users WHERE username="${username}";`
            const result = await database.execute(sqlStatement)

            resolve(new User(result))
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

module.exports = { save }
