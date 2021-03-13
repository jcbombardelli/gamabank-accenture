const mysql = require('mysql')
const databaseConfigs  = require('../configs/env').database

const query = async (sqlstatement) =>{
    const conection = await mysql.createConnection(databaseConfigs)
    return new Promise(async (resolve, reject) =>{
       
        conection.query(sqlstatement,(err, result) =>{
            if(err) reject(err)
            resolve(result)
            conection.end()
            
        })
    })
}


module.exports = { query }