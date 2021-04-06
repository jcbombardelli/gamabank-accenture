const server = require("./server");
server.then((hapi) => {
  console.log(`Because I'm hapi `);
  hapi.start();
});
