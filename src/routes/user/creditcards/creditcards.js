const creditcardsHandler = require('../../../api/controllers/userControllers/creditcardControllers/creditcards.controller')
const creditcards = {
    method:'GET',
    path: '/user/creditcards',
    handler: creditcardsHandler
}


module.exports = creditcards