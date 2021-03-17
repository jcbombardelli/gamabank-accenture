const database = require('../../helpers/database.util.js')
const cardGenerator = require('../../helpers/cardgenerator')

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


const getClientByCod = async (cod) => {
    return new Promise(async(resolve, reject) => {
        try {
            const sqlstatement = `SELECT * FROM client WHERE clientCod = "${cod}" `
            
            const result = await database.query(sqlstatement)
            resolve(result[0])

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
}

const getClientByAccount = async (acc) => {
    return new Promise(async(resolve, reject) => {
        try{
            const sqlstatement = `SELECT cl.clientCod, cl.clientName, cl.clientCPF, acc.checkingAccountNumber, acc.checkingAccountBalance FROM CLIENT AS cl
            INNER JOIN checkingaccount AS acc ON acc.clientCod = cl.clientCod
            WHERE acc.checkingAccountNumber = "${acc}"`

            const result = await database.query(sqlstatement)
            resolve(result[0])
        } catch(err){
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
                                    VALUES(${cardGenerator.generateCardNumber()},${insertId},"${checkingAccountNumber}")`

            await database.query(clientcardSql)
            
            
            resolve(`${client.clientName} cadastrado com sucesso!`)

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
} 
   
module.exports = { getClient, newClient, getClientByCod, getClientByAccount }