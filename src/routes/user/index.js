const user = require('./user')
const paydebit = require('./paydebit')
const paycredit = require('./paycredit')
const statement = require('./statement')
const transfer = require('./transfer')
const deposit = require('./deposit')


module.exports = [user, paydebit, paycredit, statement, transfer, deposit] 