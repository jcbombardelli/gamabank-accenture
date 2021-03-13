const userHandler = require('../../api/controllers/userControllers/user.controller')

const user = {
    method:'GET',
    path: '/user',
    handler: userHandler
}


module.exports = user