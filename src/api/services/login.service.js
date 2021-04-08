const loginRepository = require("../repositories/login.repository");

const checkLogin = async(username, password)=>{
    const result = await loginRepository.getInformationLogin(username)
    if (result.length > 0) return {isValid: true, id:result.id}
    else return {isValid: false}
}
module.exports = { checkLogin }