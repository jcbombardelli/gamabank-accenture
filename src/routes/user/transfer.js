const transferHandler = require('../../api/controllers/userControllers/transfer.controller')

const transfer = {
    method:'POST',
    path: '/user/transfer',
    handler: transferHandler
}


module.exports = transfer