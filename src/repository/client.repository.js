const database = require('../helpers/database.util.js')
const Client = require('../models/client')


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
            
            const result = await database.query(sqlstatement)
            resolve(`${client.clientName} cadastrado com sucesso!`)

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
} 
    // const client = {
    //     clientEmail : '123@gmail.com',
    //     clientPassword: '12345', 
    //     clientSalt: 'asflisafpwejfpo',
    //     clientName: 'banana', 
    //     clientCPF: '01234567899',
    //     clientStatus: 'Active' 

    // }
    // newClient(client)
module.exports = { getClient, newClient }