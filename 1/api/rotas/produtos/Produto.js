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

    async atualizar(){
        await TratarProduto.pegarId(this.id);
        const campos = ["name", "price", "category", "weight"];
        const dados = {};
        campos.forEach((campo) => {
            //pego o valor do campo
            const valor = this[campo];
            if(typeof valor === "string" && valor.length > 0){
                dados[campo] = valor;
            }
        });

        //verifico se os dados foram fornecidos
        if(Object.keys(dados).length === 0){
            throw new Error("Dados não foram fornecidos");
        }

        await TratarProduto.atualizar(this.id ,dados);
    }
}

module.exports = Produto;