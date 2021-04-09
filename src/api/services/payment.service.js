const { findFaturaAbertaByIdConta, paymentFatura } = require('../repositories/fatura.repository');
const { register } = require('../repositories/lancamento.repository');
const { findContaByUserId, alterSaldoConta } = require('../repositories/conta.repository');
const { sendMessage } = require('../../helpers/nodemailer');
const Boom = require('@hapi/boom');

const paymentService = async (id) => {

    try {
        const fatura = await findFaturaAbertaByIdConta(id);

        if(fatura === undefined){
            return Boom.unauthorized('Cliente não possuí fatura em aberto');
        }
    
        const user = await findContaByUserId(id);
    
        if(user.saldo < fatura.valorConsolidado){
            return Boom.unauthorized('Saldo insuficiente');
        }
    
        await register(id, 'FATURA', 'Pagamento efetuado com sucesso', fatura.valorConsolidado);
    
        const valorDebit = user.saldo - fatura.valorConsolidado;
    
        await alterSaldoConta(id, valorDebit);
    
        await paymentFatura(id, fatura.valorConsolidado);
    
        await sendMessage(user.email, `Pagamento da fatura efetuada R$ ${fatura.valorConsolidado}`);

        return 'Pagamento efetuado com sucesso';

    } catch (error) {
        console.log(error);
        return Boom.serverUnavailable('Serviço indisponível');
    };
};

module.exports = {
    paymentService
};