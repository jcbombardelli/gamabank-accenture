const jwt = require('jsonwebtoken')
const config = require('../../configs/env')


const sign = async object => {
    console.log(`config.secret ${config.secret}`)
    const token = jwt.sign(object, config.secret, { algorithm: 'HS256', expiresIn: 300 })
    process.env.LOGGED = "true"
    return {
        auth: true,
        token
    }
}
const noSign = async () =>{
    return {
        auth: false,
        token: ''
    }
}

const verify = async (token) => {

    // jwt.verify(token, config.secret, (err, decoded) => {
    //     if(err) return { auth: false, message: 'Failed to authenticated'}
    //     return { auth: true, data: decoded}
    // })

    return new Promise((resolve, reject) => {

        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) reject({ auth: false, message: 'Failed to authenticated'})
    
            resolve({auth: true, data: decoded })
        })
    })
}

module.exports = { sign, noSign, verify }