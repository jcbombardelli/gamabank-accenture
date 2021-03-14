const database = require('../helpers/database.util.js')
const { v4:uuidv4 } = require('uuid')


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
            const sqlstatement = `INSERT INTO client (clientEmail, clientPassword, clientSalt, clientName, 
                            clientCPF, clientStatus) VALUES ("${client.clientEmail}", "${client.clientPassword}", "${client.clientSalt}", 
                            "${client.clientName}", "${client.clientCPF}", "Active")`
            
                            
            const { insertId } = await database.query(sqlstatement)
            const sqlstatement2 = `INSERT INTO checkingaccount (clientCod, checkingAccountBalance, checkingAccountStatus, checkingAccountNumber) VALUES (${insertId}, 0.00, "Active", "${uuidv4()}")` 
            const result2 = await database.query(sqlstatement2)
            console.log(result2)
            
            resolve(`${client.clientName} cadastrado com sucesso!`)

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
} 
   
module.exports = { getClient, newClient }