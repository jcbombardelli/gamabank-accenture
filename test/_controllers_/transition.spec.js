const faker = require('faker')
const { assert } = require('chai')
const { createdDepositDebit } = require('../../src/api/services/transition.service')

describe('Fluxo de transação.', () => {
    it('Registro de deposito de conta debito.', async() => {
        const cpf_recipient = '111.222.333-11'
        const cpf_payer = '111.333.555-22'
        const id_account = '1'
        const transitionDTO = {
            cpf_recipient,
            id_account,
            cpf_payer,
            value: faker.finance.amount(50.00, 500.00),
            description: faker.lorem.lines(1)
        }

        const result = await createdDepositDebit(transitionDTO)
        const expected = [
            'id',
            'type',
            'status',
            'value',
            'description'
        ]

        assert.containsAllDeepKeys(result, expected)
    })
})
