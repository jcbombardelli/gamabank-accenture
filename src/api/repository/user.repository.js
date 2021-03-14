const database = require('../../helpers/database')
const crypto = require('../../helpers/mycrypto')
const User = require('../models/User')

const save = async user => {
    return new Promise(async (resolve, reject) => {
        try {
            const encrypt = await crypto.encryptPassword(user.password, null)
            user.salt = encrypt.salt
            user.password = encrypt.encryptedPassword

            const sqlStatement = `INSERT INTO users (username, password, salt) VALUES ("${user.username}", "${user.password}", "${user.salt}");`
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

module.exports = { save, findByUsername }
