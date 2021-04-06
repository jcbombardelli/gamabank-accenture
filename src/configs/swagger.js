const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiswagger = require("hapi-swagger");

const swagger = {
  plugin: hapiswagger,
  options: {
    info: {
      title: "Gamabank - Grupo X",
      description: "Projeto desenvolvido pelo grupo NoDesing",
      version: "1.0",
    },
  },
};

module.exports = [inert, vision, swagger];
