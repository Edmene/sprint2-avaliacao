const roteador = require('express').Router()

roteador.get('/money_transaction',(req,res)=>{
    return res.json({teste:"teste"})
})

module.exports = roteador