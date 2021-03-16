require('./configs/env')

const Hapi = require('@hapi/hapi')

const { swagger, inert, vision } = require('./configs/swagger')
const sequelize = require('./configs/sequelize')

const routes = require('./routes')

const plugins = [swagger, inert, vision, sequelize]
const { app } = require('./configs/env')

const server = async () => {
    const hapiServer = Hapi.server({
        port: app.port || 3000,
        host: app.host || 'localhost'
    })

    await hapiServer.register(plugins)

    hapiServer.route(routes)

    return hapiServer
}

process.on('unhandledRejection', err => {
    console.log('---->  Error.')
    console.error(err)
    process.exit(1)
})

module.exports = server()
