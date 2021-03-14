// Hapi
const dotenv = require('dotenv')

// let path;
// switch(process.env.NODE_ENV) {
//     case 'teste':
//         path = '.env.test'
//     case 'development':
//         path = '.env.development'
//     default:
//         path = '.env'
// };

//TODO: Sempre da pra melhorar - Refatorem plmmdss
dotenv.config(
    dotenv.config({
        path:
            process.env.NODE_ENV === 'test'
                ? '.env.test'
                : process.env.NODE_ENV === 'development'
                ? '.env.development'
                : '.env'
    })
)

module.exports = {
    app: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT
    },
    env: process.env.NODE_ENV,
    secret: process.env.APP_SECRET, //TOKEN JWT
    salt: process.env.SALT
}
