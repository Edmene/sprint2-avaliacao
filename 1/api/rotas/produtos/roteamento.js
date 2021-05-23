const TratarProduto = require("./TratarProduto");
const Produto = require("./Produto");
const SerializadorProduto = require("../../Serializador").SerializadorProduto;

//separo uma rota do arquivo da api
const roteador = require("express").Router();

//retorno a minha lista de produtos
roteador.get('/', async (req, res) => {
    
    const resultados = await TratarProduto.listar();
    const serializador = new SerializadorProduto(
        res.getHeader("Content-Type")
    );
    res
        .status(200)
        .send(
            serializador.serializar(resultados)
        );
});

roteador.post('/', async (req, res, prox) => {
    try{
        //recupero os dados do meu request
        const dados = req.body;
        const produto = new Produto(dados);
        await produto.criar();
        const serializador = new SerializadorProduto(
            res.getHeader("Content-Type")
        );
        res
            .status(201)
            .send(
                serializador.serializar(produto)
            );
    }catch(erro){
        //jogo para a proxíma função
        prox(erro);
    }
});

//Atualizo um produto
roteador.patch('/:idProduto', async (req, res, prox) => {
    try{
        const id = req.params.idProduto;
        //recebo o que vai ser atualizado
        const dadosRecebidos = req.body;
        //junto os dados recebidos em um novo objeto, passando o id daquele objeto
        const dados = Object.assign({}, dadosRecebidos, {id:id});
        const produto = new Produto(dados);
        await produto.atualizar();
        res
            .status(204)
            .end();
    }catch(erro){
        prox(erro);
    }
});

roteador.get('/:idProduto', async (req, res, prox) => {
    try{
        const id = req.params.idProduto;
        const produto = new Produto({id:id});
        await produto.carregar();
        const serializador = new SerializadorProduto(
            res.getHeader("Content-Type"),
            ["dataCriacao", "dataAtualizacao", "versao"]
        );
        res
            .status(200)
            .send(
                serializador.serializar(produto)
            );

    }catch(erro){
        prox(erro);
    }
});

roteador.delete('/:idProduto', async (req, res, prox) => {
    try{
        const id = req.params.idProduto;
        const produto = new Produto({id:id});
        //verifico se existe um produto na minha lista
        await produto.carregar();
        await produto.deletar();
        res
            .status(204)
            .end();
    }catch(erro){
        prox(erro);
    }
});

module.exports = roteador;