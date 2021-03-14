const server = require('./server')
const { app } = require('./configs/env')

server.then(hapi => {
    console.log(`Because I'm hapi on http://${app.host}:${app.port}`)
    hapi.start()
})
