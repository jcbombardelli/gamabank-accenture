console.log(`Execução em ambiente de ${process.env.NODE_ENV}`)

const server = require('./server')
server.then(hapi => {
    console.log(`Because I'm hapi on http://${process.env.HOST}:${process.env.PORT}`)
    hapi.start()
})

const conn = require('./api/controllers/app.controller')
