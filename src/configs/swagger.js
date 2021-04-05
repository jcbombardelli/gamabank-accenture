const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiswagger = require('hapi-swagger')

const swagger = {
    plugin: hapiswagger,
    options: {
      info: {
        title: 'Gamabank - NoDesign',
        description: 'Api para prestação de serviços bancários para correntistas',
        version: '1.0'
      }
    }
  }

module.exports = [inert, vision, swagger]