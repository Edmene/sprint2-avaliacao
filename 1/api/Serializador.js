const ConteudoNaoSuportado = require("./erros/ConteudoNaoSuportado");

class Serializador{
    json(dados){
        return JSON.stringify(dados);
    }

    serializar(dados){
        //filtro o meu retorno
        dados = this.filtrar(dados);
        if(this.contentType === "application/json"){   
            return this.json(dados);
        }
        throw new ConteudoNaoSuportado(this.contentType);
    }

    filtrar(dados){
        //verifico se foi passado um array de dados
        if(Array.isArray(dados)){
            //filtro o meu objeto
            dados = dados.map(item => {
                return this.filtrarObjeto(item)
            })
        }else{
            dados = this.filtrarObjeto(dados);
        }

        return dados;
    }

    filtrarObjeto (dados){
        const novoObjeto = {};
        this.camposPublicos.forEach(campo => {
            //verifico se existe uma propriedade de mesmo nome com o meu campo passado
            if(dados.hasOwnProperty(campo)){
                novoObjeto[campo] = dados[campo];
            }
        });

        return novoObjeto;
    }

}

//estendo as minhas funcionalidades

class SerializadorProduto extends Serializador{
    constructor(contentType, camposExtras){
        super();
        this.contentType = contentType;
        this.camposPublicos = [
            "id", "name", "price", "category", "weight"
        ].concat(camposExtras || []);
    }
}

class SerializadorErro extends Serializador{
    constructor(contentType, camposExtras){
        super()
        this.contentType = contentType;
        this.camposPublicos = [
            'id',
            'mensagem'
        ].concat(camposExtras || []);
    }
}


module.exports = {
    Serializador: Serializador,
    SerializadorProduto: SerializadorProduto,
    SerializadorErro: SerializadorErro,
    formatosAceitos:["application/json"]
};