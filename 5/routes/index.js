const roteador = require('express').Router()
const money_transaction = require('../controller/MoneyTransactionController')


roteador.get('/money_transaction',money_transaction.index)

module.exports = roteador