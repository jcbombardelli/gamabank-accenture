const database = require('../helpers/database.util.js')


const getClient = async (client) => {
    return new Promise(async(resolve, reject) => {
        try {
            const sqlstatement = `SELECT * FROM client WHERE clientEmail = "${client.clientEmail}" `
            
            const result = await database.query(sqlstatement)
            resolve(result[0])

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
}

const newClient = async (client) => {
    const clientExists = await database.registerExists('client', 'clientCPF', client.clientCPF)
    if(clientExists){
        return "Cliente já cadastrado"
    }
    return new Promise(async(resolve, reject) => {
        try {
            const clientSql = `INSERT INTO client (clientEmail, clientPassword, clientSalt, clientName, 
                            clientCPF, clientStatus) VALUES ("${client.clientEmail}", "${client.clientPassword}", "${client.clientSalt}", 
                            "${client.clientName}", "${client.clientCPF}", "Active")`
            
                            
            const { insertId } = await database.query(clientSql)
            const checkingaccountSql = `INSERT INTO checkingaccount (clientCod, checkingAccountBalance, checkingAccountStatus) VALUES (${insertId}, 0.00, "Active")` 

            await database.query(checkingaccountSql)
            
            //USANDO O ID DO USUARIO PARA BUSCAR O NUMERO DA CONTA RECEM CRIADA
            const getAccountNumber = `SELECT * FROM checkingaccount WHERE clientCod = ${insertId}`
            const [{checkingAccountNumber}] = await database.query(getAccountNumber)
            //USANDO ID E NUMERO DA CONTA PARA CRIAR CARTAO
            const clientcardSql = `INSERT INTO clientcard (clientCardNumber,clientCod,checkingAccountNumber)
                                    VALUES(${Math.floor((Math.random() * 10 ** 16))},${insertId},"${checkingAccountNumber}")`

            await database.query(clientcardSql)
            
            
            resolve(`${client.clientName} cadastrado com sucesso!`)

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
} 
   
module.exports = { getClient, newClient }