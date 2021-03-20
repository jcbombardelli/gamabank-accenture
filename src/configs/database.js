const { database: dbconfig } = require('./env')
const { host, user: username, pass: password, name: database } = dbconfig

module.exports = {
    dialect: 'mysql',
    host,
    username,
    password,
    database,
    define: {
        timestamps: true,
        underscored: true
    }
}
