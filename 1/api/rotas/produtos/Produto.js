const TratarProduto = require("./TratarProduto");

//Crio o meu objeto produto
class Produto{
    constructor({id, name, price, category, weight, createdDate, updatedDate, version}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.weight = weight;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.version = version;
    }

    async criar(){
        const resultado = await TratarProduto.inserir({
            name: this.name,
            price: this.price,
            category: this.category,
            weight: this.weight
        });
        this.id = resultado.id;
        this.createdDate = resultado.createdDate;
        this.updatedDate = resultado.updatedDate;
        this.version = resultado.version;
    }

    async carregar(){
        const produto = await TratarProduto.pegarId(this.id);
        this.name = produto.name;
        this.price = produto.price;
        this.category = produto.category;
        this.weight = produto.weight;
        this.createdDate = produto.createdDate;
        this.updatedDate = produto.updatedDate;
        this.version = produto.version;
    }
}

module.exports = Produto;