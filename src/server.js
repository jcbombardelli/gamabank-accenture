const Hapi = require("@hapi/hapi");
require("./configs/env");

const { swagger, inert, vision } = require('./configs/swagger');
const sequelize = require('./configs/sequelize');

const routes = require("./routes");

const plugins =  [ swagger, inert, vision, sequelize ]

const server = async () => {
  const hapiServer = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
  });

  await hapiServer.register(plugins);
  
  hapiServer.route(routes);

  return hapiServer;
};

process.on("unhandledRejection", (err) => {
  console.log("---->  Error.");
  console.error(err);
  process.exit(1);
});

module.exports = server();