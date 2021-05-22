const roteador = require('express').Router()
const money_transaction = require('../controller/MoneyTransactionController')


roteador.get('/money_transaction',money_transaction.listar)
roteador.post('/money_transaction',money_transaction.inserir)
roteador.get('/money_transaction/:id',money_transaction.buscarId)
roteador.put('/money_transaction/:id',money_transaction.atualizar)
roteador.delete('/money_transaction/:id',money_transaction.deletar)

module.exports = roteador