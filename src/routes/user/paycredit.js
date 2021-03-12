const paycreditHandler = require('../../api/controllers/userControllers/paycredit.controller')
const paycredit = {
    method:'POST',
    path: '/user/paycredit',
    handler: paycreditHandler
}


module.exports = paycredit