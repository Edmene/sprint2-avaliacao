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
        this.validar();
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

    async atualizar(){
        await TratarProduto.pegarId(this.id);
        const camposStrings = ["name", "category"];
        const camposNumeros = ["price", "weight"];
        const dados = {};
        camposStrings.forEach((campo) => {
            //pego o valor do campo
            const valor = this[campo];
            if(typeof valor === "string" && valor.length > 0){
                dados[campo] = valor;
            }
        });

        camposNumeros.forEach((campo) => {
            //pego o valor do campo
            const valor = this[campo];
            if(typeof valor === "number" && valor.length > 0){
                dados[campo] = valor;
            }
        });

        //verifico se os dados foram fornecidos
        if(Object.keys(dados).length === 0){
            throw new Error("Dados não foram fornecidos");
        }

        await TratarProduto.atualizar(this.id ,dados);
    }

    deletar(){
        return TratarProduto.remover(this.id);
    }

     //validar se os dados recebidos pelo cadastro são válidos
    validar(){
        const camposStrings = ["name", "category"];
        const camposNumeros = ["price", "weight"];

        camposStrings.forEach(campo => {
            console.log("Estou no string no campo " + campo);
            const valor = this[campo];
            if(typeof valor !== 'string' || valor.length === 0){
                if(campo != "category"){
                    throw new Error(`O campo '${campo}' está invalido`);
                }
            }
        });

        camposNumeros.forEach(campo => {
            console.log("Estou no int no campo " + campo);
            const valor = this[campo];
            if(typeof valor !== 'number' || valor <= 0){
                throw new Error(`O campo '${campo}' está invalido`);
            }
        });
    }
}

module.exports = Produto;