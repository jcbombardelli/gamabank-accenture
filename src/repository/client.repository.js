const database = require('../helpers/database.util.js')
const User = require('../models/user')

const getUser = async (user) => {
    return new Promise(async(resolve, reject) => {
        try {
            const sqlstatement = `SELECT * FROM user WHERE userName = "${user.username}" `
            
            const result = await database.query(sqlstatement)
            resolve(result[0])

        }catch(err) {
            console.error(err)
            reject(err)
        }
    })
}
/* 
const newClient = async (client) => {
    const clientExists = await database.registerExists("client", "clientCPF", client.clientCPF)
    if(clientExists){
        return "Cliente já cadastrado"
    }

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
} */




module.exports = { 
    getUser
}