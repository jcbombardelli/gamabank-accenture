const { v4 } = require('uuid')

module.exports = {
    idGenerator: {
        generate: () => v4()
    }
}
