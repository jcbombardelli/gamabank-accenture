const invoice = require('../services/payment.service');

const payment = async (request, h) => {

    const {userId } = request.auth.credentials;

    const fatura = await invoice.paymentService(userId);

    return fatura;

};

module.exports = {
    payment
};