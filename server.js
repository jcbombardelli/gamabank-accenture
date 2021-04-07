const Hapi = require("@hapi/hapi");

const swagger = require("./src/configs/swagger");
const routes = require("./src/routes");

const server = async () => {
  const hapiServer = Hapi.Server({
    host: process.env.SERVER_HOST || "localhost",
    port: process.env.SERVER_PORT || 3000,
  });

  await hapiServer.register(swagger);
  hapiServer.route(routes);

  return hapiServer;
};

process.on("unhandledRejection", (err) => {
  console.log("########### OCORREU UM ERRO ##########");
  console.error(err);
  process.exit(1);
});

module.exports = server();
