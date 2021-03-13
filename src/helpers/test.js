const mycripto = require('./mycripto')
const bcrypt = require('bcrypt')


async function b() {
const salt = await bcrypt.genSalt()
const password = await mycripto.encryptPassword('1234', salt)

console.log(salt)
console.log(password)
} 

b()

