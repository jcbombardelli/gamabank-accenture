const { assert } = require('chai')
const {
    encryptPassword,
    comparePassword
} = require('../../src/helpers/mycrypto')

describe('Funcionamento da ferramenta de criptografia.', () => {
    it('Senha criptografada bate com a senha fornecida.', async () => {
        const password = 'myStr0ngP4ssw0rd'
        const { encryptedPassword, salt } = await encryptPassword(password)
        const isValid = await comparePassword(password, salt, encryptedPassword)

        assert.equal(isValid, true)
    })
})
