const payService = require("../services/pay.service");

const payWithDebit = async (request, h) => {

    const  { token } = request.headers;
    const { userId, cpf,  value } = request.payload;

 
    const pay = await payService.payDebit(userId, cpf, value);


    return pay
   
}

module.exports = { payWithDebit }