const express = require("express");
const config = require("config");
const criaTabelas = require('./bd/criarTabelas');
const formatosAceitos = require("./Serializador").formatosAceitos;

const app = express();

//o body-parser já vem nativo no express, então não é necessário usá-lo
app.use(express.json());

//crio as tabelas
criaTabelas.init();

//criando um middleware
app.use((req, res, prox) => {
    //recupero o accept do cabeçalho
    let formatoRequisitado = req.header("Accept");

    //verifico se o formato não foi especificado
    if(formatoRequisitado === "*/*"){
        formatoRequisitado = 'application/json';
    }

    console.log(formatosAceitos);

    //verifico se o formato do request é um formato aceito
    if(formatosAceitos.indexOf(formatoRequisitado) === -1){
        res
            .status(406)
            .end();
            return;
    }

    //defino o content-type do meu cabeçalho
    res.setHeader("Content-Type", formatoRequisitado);
    prox();
});

const roteador = require("./rotas/produtos/roteamento");
app.use("/api/produtos", roteador);

app.listen(config.get("api.porta"), () => console.log("Estou no ar"));