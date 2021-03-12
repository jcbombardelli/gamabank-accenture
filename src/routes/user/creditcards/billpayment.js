const billpaymentHandler = require('../../../api/controllers/userControllers/creditcardControllers/billpayment.controller')
const billpayment = {
    method:'POST',
    path: '/user/creditcards/{id}/{yyyymm}/pay',
    handler: billpaymentHandler
}


module.exports = billpayment