const creditcardidHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditcardid.controller')
const creditcardid = {
    method:'GET',
    path: '/user/creditcards/{id}',
    handler: creditcardidHandler
}


module.exports = creditcardid