const statusHandler = require('../api/controllers/app.controller')
const checkingaccount = require('../repository/checkingAccount.repository')

const status = {
    method: 'GET',
    path: '/status',
    handler: statusHandler
}

module.exports = status