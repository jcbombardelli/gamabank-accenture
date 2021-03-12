const depositHandler = require('../../api/controllers/userControllers/deposit.controller')
const deposit = {
    method:'POST',
    path: '/user/deposit',
    handler: depositHandler
}


module.exports = deposit