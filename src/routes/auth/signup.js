const signupHandler = require('../../api/controllers/authControllers/signup.controller')

const signup = {
    method:'POST',
    path: '/auth/signup',
    handler: signupHandler
}


module.exports = signup