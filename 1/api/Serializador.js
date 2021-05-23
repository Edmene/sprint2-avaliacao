class Serializador{
    json(dados){
        return JSON.stringify(dados);
    }

    serializar(dados){
        if(this.contentType === "application/json"){
            return this.json(dados);
        }

        throw new Error("Conteúdo não suportado");
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