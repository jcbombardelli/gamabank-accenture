console.log(`Execução em ambiente de ${process.env.NODE_ENV}`)

const server = require('./server')
server.then(hapi => {
    console.log(`Hapi Server on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
    hapi.start()
})

require('./api/controllers/app.controller')