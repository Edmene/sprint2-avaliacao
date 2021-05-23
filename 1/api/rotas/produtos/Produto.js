const TratarProduto = require("./TratarProduto");

//Crio o meu objeto produto
class Produto{
    constructor({id, name, price, category, weight, dataCriacao, dataAtualizacao, versao}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.weight = weight;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao;
    }

    async criar(){
        const resultado = await TratarProduto.inserir({
            name: this.name,
            price: this.price,
            category: this.category,
            weight: this.weight
        });
        this.id = resultado.id;
        this.dataCriacao = resultado.dataCriacao;
        this.dataAtualizacao = resultado.dataAtualizacao;
        this.versao = resultado.versao;
    }
}

module.exports = Produto;