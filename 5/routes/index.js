const roteador = require('express').Router()
const money_transaction = require('../controller/MoneyTransactionController')

//rota listar todos
roteador.get('/money_transaction',money_transaction.listar)

//rota inserir dados
roteador.post('/money_transaction', money_transaction.inserir)

//rota listar com atributo id
roteador.get('/money_transaction/:id',money_transaction.buscarId)

//rota listar com atributo sender
roteador.get('/money_transaction/sender/:sender',money_transaction.buscarSender)

//rota rota listar com atributo receiver
roteador.get('/money_transaction/receiver/:receiver',money_transaction.buscarReceiver)

//rota listar todos
roteador.put('/money_transaction/:id',money_transaction.atualizar)

//rota listar todos
roteador.delete('/money_transaction/:id',money_transaction.deletar)

module.exports = roteador