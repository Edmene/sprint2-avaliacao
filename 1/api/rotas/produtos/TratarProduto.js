const TabelaProduto = require("./TabelaProduto");
const NaoEncontrado = require("../../erros/NaoEncontrado");
const Sequelize = require("sequelize");

module.exports = {
    listar(){
        //realizo a listagem utilizando o findAll do sequelize
        //limpo e deixo o código puro como um js com raw:true
        return TabelaProduto.findAll({raw:true});
    },

    inserir(produto){
        //realizo a inserção no bd utilizando o create do sequelize
        return TabelaProduto.create(produto);
    },

    async pegarId(id){
        const encontradoId = await TabelaProduto.findOne({
            where: {id : id}
        });

        if(!encontradoId){
            throw new NaoEncontrado();
        }

        return encontradoId;
    },

    ListarPorNome(name){
        console.log(name);
        const Op = Sequelize.Op;
        const newName = `${name}%`;
        return TabelaProduto.findAll({
            raw:true,
            where:{name: {[Op.like]: newName}}
        });
    },

    atualizar(id, dados){
        //atualizo os dados no meu banco de dados
        return TabelaProduto.update(
            dados,
            {where:{id : id}}
        );
    },

    remover(id){
        TabelaProduto.destroy({
            where: {id : id}
        });
    }
}