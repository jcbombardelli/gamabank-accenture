const verifyHandler = require('../../api/controllers/authControllers/verify.controller')
//ver se vai ser usado ou não
const verify = {
    method:'GET',
    path: '/auth/login/verify',
    handler: verifyHandler
}


module.exports = verify