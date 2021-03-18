const nodemailer = require("nodemailer");
const configs = require('../configs/env')

const setup = async () => {

    let account
    if(configs.env === 'test' || configs.env === 'development')
        account = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({

        host: account ? "smtp.ethereal.email" : configs.mail.host, //https://ethereal.email/
        port: account ? 587 : configs.mail.port,
        secure: false,
        auth: {
            user: account ? account.user : configs.mail.user,
            pass: account ? account.pass : configs.mail.pass
        },
        //ignoreTLS: true // add this 
    })

    return transporter
}




async function sendMailFunction(to, emailModel) {

    const transporter = await setup()
    //   Se der errado a configuração, exclua o trecho acima dentro da função e descomente esse abaixo
  let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

  let info = await transporter.sendMail({
    from: '"HelloBank😎" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: emailModel.subject, // Subject line
    text: emailModel.text, // plain text body
    html: emailModel.html, // html body
  });

  //console.log(" \n Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("\n Preview URL: %s", nodemailer.getTestMessageUrl(info),"\n");
}

module.exports = {sendMailFunction}




//###############################################
//O trecho abaixo é apenas para testes pequenos.
let mockdata = {
    to: "matheuzinvaivai@gmail.com",
    emailModel: {
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Bem vindo ao melhor banco do mundo!</b>", // html body
    }
}


//sendMailFunction(mockdata.to, mockdata.emailModel).catch(console.error);
//###############################################
