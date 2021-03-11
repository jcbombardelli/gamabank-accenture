const Hapi = require('@hapi/hapi')
require('./configs/env')

const routes = require('./routes/index')


const server = () =>  {

    const hapiServer = Hapi.server({
        port: process.env.PORT || 3001,
        host: process.env.HOST || 'localhost',
    })

    hapiServer.route(routes)

    return hapiServer
}

process.on('unhandledRejection', err => {
    console.error(err)
    process.exit(10)
})


module.exports = server()