const config = require('./configs/env')

console.log(`Execução em ambiente de ${config.env}`);

const server = require("./server");
server.then((hapi) => {
    console.log(`NoDesign Server Api on ${config.host}${config.port}`);
    hapi.start();
});
