const express = require("express");
const config = require("config");
const criaTabelas = require('./bd/CriarTabelas');

const app = express();

//o body-parser já vem nativo no express, então não é necessário usá-lo
app.use(express.json());

try{
    criaTabelas.init();
}catch(erro){
    console.log(erro);
}

app.listen(config.get("api.porta"), () => console.log("Estou no ar"));