class User {
    constructor({ id, username, password, salt, cpf, name }) {
        ;(this.id = id),
            (this.username = username),
            (this.password = password),
            (this.salt = salt),
            (this.cpf = cpf),
            (this.name = name)
    }
}

module.exports = User
