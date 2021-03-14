const repository = require('../repository/user.repository')

const createAccount = async newUser => {
    const checkUser = await repository.findByUsername(newUser)
    if (!checkUser) {
        const result = await repository.save(newUser)
        return result
    }
}

module.exports = { createAccount }
