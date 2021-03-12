const loginHandler = require('../../api/controllers/authControllers/login.controller')

const login = {
    method:'POST',
    path: '/auth/login',
    handler: loginHandler
}


module.exports = login