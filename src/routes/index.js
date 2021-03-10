const { status } = require('../controllers/app.controller')

const root = {
    method: 'GET',
    path: '/',
    handler: status
}


module.exports = [ root ]