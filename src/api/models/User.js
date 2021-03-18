const UserController = require("./UserController")

class User extends UserController {
    constructor({ id, name, email, cpf, password, salt }) {
        super({ name, email, cpf, password })
        (this.id = id),
        (this.name = name),
        (this.email = email),
        (this.cpf = cpf),
        (this.password = password),
        (this.salt = salt)
    }

}

module.exports = User
