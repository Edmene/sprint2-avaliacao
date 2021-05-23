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
<<<<<<< HEAD
    //eu tinha esquecido de criar uma feature para ele e fazer separadamente em uma branch
=======
>>>>>>> feature/pegar_produto
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
<<<<<<< HEAD
    },

    atualizar(id, dados){
        //atualizo os dados no meu banco de dados
        return TabelaProduto.update(
            dados,
            {
                where:{id : id}   
            }
        );
=======
>>>>>>> feature/pegar_produto
    }
}