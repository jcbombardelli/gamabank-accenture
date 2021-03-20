const faker = require('faker')
const { assert } = require('chai')
const { newAccount } = require('../../src/api/controllers/user.controller')

describe('Fluxo do user controller.', () => {
    it('Criação de conta.', async () => {
        const firstName = 'João'
        const lastName = 'Maria'

        const payload = {
            name: faker.name.findName(firstName, lastName, 0),
            email: faker.internet.email(firstName, lastName, 'gmail'),
            cpf: '111.222.333-11',
            password: faker.internet.password(32)
        }

        const result = await newAccount({ payload })

        assert.equal(result, 0) //TODO: change the expected return value
    })
})
