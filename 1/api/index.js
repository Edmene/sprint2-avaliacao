const express = require("express");
const config = require("config");
const criaTabelas = require('./bd/criarTabelas');

const app = express();

//o body-parser já vem nativo no express, então não é necessário usá-lo
app.use(express.json());

//crio as tabelas
criaTabelas.init();

const roteador = require("./rotas/produtos/roteamento");
const { formatosAceitos } = require("./Serializador");
app.use("/api/produtos", roteador);

app.listen(config.get("api.porta"), () => console.log("Estou no ar"));