const TratarProduto = require("./TratarProduto");

//separo uma rota do arquivo da api
const roteador = require("express").Router();

roteador.get('/', async (req, res) => {
    const resultados = await TratarProduto.listar();
    res
    .status(200)
    .send(
        JSON.stringify(resultados)
    );
});

module.exports = roteador;