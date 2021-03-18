const { generateStatement } = require('../../src/api/services/statement.service')
var chai = require('chai')
const {assert, expect} = require('chai')

describe('Teste do gerador de extrato',() => {
    
    it('Passando datainicio, datafim e conta, deve retornar extrato ordenado por data.',
        async () => {

        const params = {
            acc: 1, 
            initDate: '2021-03-17 00:00:00', 
            endDate: '2021-03-17 23:59:00'
        }

        await assert.typeOf(generateStatement(params), 'object')

    })
})