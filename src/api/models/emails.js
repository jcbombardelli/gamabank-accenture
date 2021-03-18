//Formato do userInfo : nome, número do cartão, ultima entrada do crédito, essas coisas.

class EmailModel {
    constructor( subject, text, html){
        this.subject = subject,
        this.text = text,
        this.html = html
    }
}

//Todos os tipos de email que enviamos estão listados abaixo:
const signUpEmail = userInfo => {
    return(new EmailModel("Bem vindo ao HelloBank", `Olá ${userInfo.name}, \n bem vindo ao melhor banco do mundo.`))
} 

const paidInstallmentEmail = userInfo => {
    return(new EmailModel("Confirmação de Pagamento", `Caro(a) ${userInfo.name}, \n sua fatura do cartão de número ${userInfo.cardNumber} mais recente acabou de ser paga. `))
}

const creditCardEntryEmail = userInfo => {
    return(new EmailModel("Novo lançamento de crédito", `Caro(a) ${userInfo.name}, \n foi cadastrada uma nova compra de ${userInfo.checkingAccountEntryValue} em seu cartão de número ${userInfo.cardNumber}. `))
}

module.exports = {EmailModel, signUpEmail, paidInstallmentEmail, creditCardEntryEmail }