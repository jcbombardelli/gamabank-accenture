const Hapi = require("@hapi/hapi");

const swagger = require("./configs/swagger");
const routes = require("./routes");

const server = async () => {
  const hapiServer = Hapi.Server({
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
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
