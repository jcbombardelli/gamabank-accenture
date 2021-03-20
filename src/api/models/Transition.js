const TransitionController = require('./TransitionController')

class Transition extends TransitionController {
    constructor({
        id,
        id_account,
        cpf_recipient,
        cpf_payer,
        type,
        status,
        value,
        description
    }) {
        super({
            cpf_recipient,
            id_account,
            cpf_payer,
            value
        }),
            (this.id = id),
            (this.type = type),
            (this.status = status),
            (this.description = description)
    }
}

module.exports = Transition
