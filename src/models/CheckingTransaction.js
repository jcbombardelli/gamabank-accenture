class CheckingTransaction {
    constructor({CPF, value, account, bank, accAnother}){
        this.userCPF= CPF, 
        this.value = value, 
        this.accNumber = account,
        this.bank = bank,
        this.accAnother = accAnother
    }
}

module.exports = CheckingTransaction

// bernando transferindo para paulo
// out userCPF do paulo, accNumber do Bernardo e accAnother do Paulo
// in userCPF do Bernanrdo, acc/Number do Paulo e accAnother do Bernardo
