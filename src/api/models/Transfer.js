class Transfer {
    constructor({ id, origin, receiver, bank, value, status, description }) {
        this.id = id,
        this.id_origin = origin,
        this.id_receiver = receiver,
        this.bank = bank,
        this.value = value,
        this.status = status,
        this.description = description
    }
};

module.exports = Transfer
