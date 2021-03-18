const {sendMailFunction} = require('../../helpers/mail')
const { signUpEmail, paidInstallmentEmail, creditCardEntryEmail } = require('../models/emails')

//ENTRADAS: conta, emailModel => Cada modelo precisa de dados do correntista como nome, conta, etc.

const sendSignupEmail = async (to, emailModel) => await sendMailFunction(to, signUpEmail(fakeUser))
const sendPaidInstallmentEmail = async (to, emailModel) => await sendMailFunction(to, paidInstallmentEmail(fakeUser))
const sendCreditCardEntryEmail = async (to, emailModel) => await sendMailFunction(to, creditCardEntryEmail(fakeUser))

//Após configuradas as variáveis de ambiente, podemos setar no modelo o HTML de cada um (:

//Testes:
const fakeUser = {
    name:"Heleninha",
    email:'helenao@furacao.br', 
    checkingAccountEntryValue:'R$250,00', 
    cardNumber: '1234567890131415'
}
//sendSignupEmail(fakeUser.email)   ✅ 
//sendPaidInstallmentEmail(fakeUser.email) // ✅ 
//sendCreditCardEntryEmail(fakeUser.email) // ✅ 


module.exports = { sendSignupEmail, sendPaidInstallmentEmail, sendCreditCardEntryEmail }
