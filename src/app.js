console.log(`Execução em ambiente de ${process.env.NODE_ENV}`);

const server = require("./server");
server.then((hapi) => {
  console.log(`Hapi Server on`);
  hapi.start();
});
