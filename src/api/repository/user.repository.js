const database = require('../../helpers/database')
const crypto = require('../../helpers/mycrypto')
const User = require('../models/User')

const save = async user => {
    return new Promise(async (resolve, reject) => {
        try {
            const encrypt = await crypto.encryptPassword(user.password, null)
            user.salt = encrypt.salt
            user.password = encrypt.encryptedPassword

            const sqlStatement = `INSERT INTO users (username, password, salt, cpf, name)
            VALUES ("${user.username}", "${user.password}", "${user.salt}", "${user.cpf}", "${user.name});`
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

//Função para verificar se a senha possui as regras pela expressão regular em validPassword
const checkPassword = async senha => {
    const validPassword = new RegExp('^[a-zA-Z0-9-@#$%&;*]{8,20}$') //Vá mais longe do trello
    return new Promise(async (resolve, reject) => {
        try {
            if (validPassword.test(senha)) {
                console.log('Password is Valid')
                resolve(senha)
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

module.exports = { save, findByUsername }
