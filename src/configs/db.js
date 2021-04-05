require('dotenv').config()
const mysql = require('mysql')
const util = require('util')
console.log(process.env.DB_USER)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

connection.connect(err => {
    if (err) throw err;
})
connection.querySync = util.promisify(connection.query)//Define querySync como funcao sincrona de con.query

module.exports = connection