class customError {
    constructor({ name, message, status }) {
        this.name = name,
        this.message = message || 'Mensagem de erro padrão',
        this.stack = (new Error()).stack,
        this.statusCode = status || 400
    }
}

module.exports = { customError }
