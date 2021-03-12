const statementHandler = require('../../api/controllers/userControllers/statement.controller')
const statement = {
    method:'GET',
    path: '/user/statement',
    handler: statementHandler
}


module.exports = statement