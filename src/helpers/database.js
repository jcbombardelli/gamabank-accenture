const mysql = require('mysql')
const { database } = require('../configs/env')

const connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.pass,
    database: database.name,
    port: database.port
})

const execute = sqlStatement => {
    return new Promise((resolve, reject) => {
        connection.query(sqlStatement, (err, result) => {
            if (err) reject(err)
            else resolve(result)
            connection.end()
        })
    })
}

module.exports = { execute }
