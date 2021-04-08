const config = require('./configs/env')
console.log(`Execução em ambiente de ${config.env}`);
const server = require("./server");
server.then((hapi) => {
  console.log(`Hapi Server on`);
  hapi.start();
});
