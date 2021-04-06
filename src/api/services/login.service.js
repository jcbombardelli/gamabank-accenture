const loginRepository = require("../repositories/login.repository");

const checkLogin = async(username, password)=>{
    const result = await loginRepository.getInformationLogin(username, password)
    if (result.length > 0) return {isValid: true, cpf:result.cpf}
    else return {isValid: false}
}
modules.exports = { checkLogin }