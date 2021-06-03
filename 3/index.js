const express = require('express')  
const bodyParser = require('body-parser')//transforma o body da requisicao em varios formatos
const config = require('config')
const criarTabelas = require("./banco-de-dados/criarTabelas")

const roteador = require('./rotas')

const app = express()
app.use(bodyParser.json())

app.use('/api', roteador)

app.listen(3000, () => console.log("api rodou"))