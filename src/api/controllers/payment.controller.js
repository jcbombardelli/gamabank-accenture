const invoice = require('../services/payment.service');

const payment = async (request, h) => {

    //const {userId } = request.auth.credentials;

    return await invoice.paymentService(1);

};

module.exports = {
    payment
};