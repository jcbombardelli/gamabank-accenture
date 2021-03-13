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




module.exports = { 
    getUser
}