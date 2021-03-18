const bcrypt = require('bcrypt')

module.exports = {
    encryptPassword: async password => {
        const salt = await bcrypt.genSalt()
        return {
            encryptedPassword: bcrypt.hashSync(password, salt),
            salt
        }
    },

    comparePassword: async (password, salt, encryptedPasswordToCompare) => {
        const encryptedPassword = bcrypt.hashSync(password, salt)
        return encryptedPassword === encryptedPasswordToCompare
    }
}
