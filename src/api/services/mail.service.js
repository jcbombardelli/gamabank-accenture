const nodemailer = require('nodemailer')
const configs = require('../../configs/env')
const sendCongratulationsEmail = async () => {
    let account

    if (configs.env === 'test' || configs.env === 'development')
        account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        hots: configs.mail.host,
        port: configs.mail.port,
        secure: false,
        auth: {
            user: account ? account.user : configs.mail.user,
            pass: ''
        }
    })
}
