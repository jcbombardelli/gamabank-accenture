const inert = require('@hapi/inert')
const vision = require('@hapi/vision')
const { version } = require('../../package.json')
const hapiswagger = require('hapi-swagger')

const swagger = {
    plugin: hapiswagger,
    options: {
        info: {
            title: 'Gamabank - Grupo Deno',
            description:
                'Descrição do projeto - Alterar em /configs/swagger.js',
            version: version
        }
    }
}

module.exports = { inert, vision, swagger }
