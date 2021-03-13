const database = require('../helpers/database.util.js')
const Client = require('../models/client')

const newClient = async (client) => {
    const clientExists = await database.registerExists("client", "clientCPF", client.clientCPF)
    if(clientExists){
        return "Cliente já cadastrado"
    }
/*clientCod,
clientName,
clientCPF,
clientStatus,
clientCreatedDate, */
    return new Promise(async(resolve, reject) => {
        try {
            const {clientName, clientCPF} = client
            const sqlstatement = `INSERT INTO client (clientName, clientCPF, clientStatus) VALUES ("${clientName}", "${clientCPF}", "Active" )`
            
            const result = await database.query(sqlstatement)
            resolve(result[0])

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
}


