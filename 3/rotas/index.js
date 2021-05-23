const roteador = require('express').Router()
const tabelaAdress = require('./TabelaAddress')

roteador.use('/',async (req,res)=>{//listar
    const resultados = await tabelaAdress.listar()
    res.status(200)
    res.send( 
        JSON.stringify(resultados)
    )
})

module.exports = roteador