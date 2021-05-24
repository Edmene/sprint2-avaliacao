const express = require("express");
const formatosAceitos = require("../Serializador").formatosAceitos;
const NaoEncontrado = require("../erros/NaoEncontrado");
const CampoInvalido = require("../erros/CampoInvalido");
const DadosNaoFornecidos = require("../erros/DadosNaoFornecidos");
const SerializadorErro = require("../Serializador").SerializadorErro;
const ConteudoNaoSuportado = require("../erros/ConteudoNaoSuportado");

module.exports = () => {

    const app = express();

    //o body-parser já vem nativo no express, então não é necessário usá-lo
    app.use(express.json());

    //criando um middleware
    app.use((req, res, prox) => {
        //recupero o accept do cabeçalho
        let formatoRequisitado = req.header("Accept");

        //verifico se o formato não foi especificado
        if(formatoRequisitado === "*/*"){
            formatoRequisitado = 'application/json';
        }

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

    const roteador = require("../rotas/produtos/roteamento");
    app.use("/api/produtos", roteador);

    app.use((erro, req, res, prox) => {
        let status = 500;

        if(erro instanceof NaoEncontrado){
            status = 404;
        }

        if(erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos){
            status = 400;
        }

        if(erro instanceof ConteudoNaoSuportado){
            status = 406;
        }

        const serializador = new SerializadorErro(
            res.getHeader('Content-Type')
        );

        res
            .status(status)
            .send(
                serializador.serializar({
                    mensagem: erro.message,
                    id: erro.idErro
                }),
            );
    })

    return app;
};