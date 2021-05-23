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

//Atualizo um produto
roteador.patch('/:idProduto', async (req, res) => {
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
            .send(
                JSON.stringify(produto)
            )
            .end()
    }catch(erro){
        console.log(erro);
    }
});

module.exports = roteador;