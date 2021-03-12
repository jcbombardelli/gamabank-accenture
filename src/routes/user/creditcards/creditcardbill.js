const creditcardbillHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditcardbill.controller')
const creditcardbill = {
    method:'GET',
    path: '/user/creditcards/{id}/{yyyymm}', // ?timeinterval = timestamp
    handler: creditcardbillHandler
}


module.exports = creditcardbill