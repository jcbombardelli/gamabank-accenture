class User {
    constructor({ id, name, email, cpf, password, salt }) {
        (this.id = id),
        (this.name = name),
        (this.email = email),
        (this.cpf = cpf),
        (this.password = password),
        (this.salt = salt)
    }

    getCpf = () => {
        return this.cpf
    }

    getPassword = () => {
        return this.password
    }
}

module.exports = User
