class User {
<<<<<<< HEAD
    constructor({ id, name, email, cpf, password, salt }) {
        (this.id = id),
        (this.name = name),
        (this.email = email),
        (this.cpf = cpf),
        (this.password = password),
        (this.salt = salt)
=======
    constructor({ id, username, password, salt, cpf, name }) {
        ;(this.id = id),
            (this.username = username),
            (this.password = password),
            (this.salt = salt),
            (this.cpf = cpf),
            (this.name = name)
>>>>>>> Verificaçao de user antes do register
    }
}

module.exports = User
