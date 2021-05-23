const TabelaProduto = require("./TabelaProduto");

module.exports = {
    listar(){
        //realizo a listagem utilizando o findAll do sequelize
        return TabelaProduto.findAll();
    },

    inserir(produto){
        //realizo a inserção no bd utilizando o create do sequelize
        return TabelaProduto.create(produto);
    },
    async pegarId(id){
        const encontradoId = await TabelaProduto.findOne({
            where: {
                id : id
            }
        });

        if(!encontradoId){
            throw new Error("Id não encontrado");
        }

        return encontradoId;
    }
}