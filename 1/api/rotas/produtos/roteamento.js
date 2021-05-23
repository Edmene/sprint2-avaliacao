const TratarProduto = require("./TratarProduto");
const Produto = require("./Produto");

//separo uma rota do arquivo da api
const roteador = require("express").Router();

//retorno a minha lista de produtos
roteador.get('/', async (req, res) => {
    try{
        const resultados = await TratarProduto.listar();
        res
            .status(200)
            .send(
                JSON.stringify(resultados)
            );
    }catch(erro){
        console.log(erro);
    } 
});

roteador.post('/', async (req, res) => {
    try{
        //recupero os dados do meu request
        const dados = req.body;
        const produto = new Produto(dados);
        await produto.criar();
        res
            .status(201)
            .send(
                JSON.stringify(produto)
            );
    }catch(erro){
        console.log(erro);
    }
})

roteador.get('/:idProduto', async (req, res) => {
    try{
        const id = req.params.idProduto;
        const produto = new Produto({id:id});
        await produto.carregar();
        res
            .status(200)
            .send(
                JSON.stringify(produto)
            );
    }catch(erro){
        console.log(erro);
    }
});
    

module.exports = roteador;