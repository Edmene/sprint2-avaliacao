const express = require('express')  
const bodyParser = require('body-parser')//transforma o body da requisicao em varios formatos
const config = require('config')

const roteador = require('./rotas')

const app = express()
app.use(bodyParser.json())

app.use('/api', roteador)

app.listen(config.get('api.porta'), () => console.log("api rodou"))