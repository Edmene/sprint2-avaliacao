const TabelaProduto = require("./TabelaProduto");

module.exports = {
    listar(){
        //realizo a listagem utilizando o findAll do sequelize
        return TabelaProduto.findAll();
    },

    inserir(produto){
        //realizo a inserção no bd utilizando o create do sequelize
        return TabelaProduto.create(produto);
    }
}