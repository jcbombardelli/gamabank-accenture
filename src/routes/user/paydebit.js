const paydebitHandler = require('../../api/controllers/userControllers/paydebit.controller')
const paydebit = {
    method:'POST',
    path: '/user/paydebit',
    handler: paydebitHandler
}


module.exports = paydebit