const Modelo = require('./ModeloTabelaAddress')

module.exports={
    listar(){
        return Modelo.findAll({raw: true})//Sequelize faz o select para buscar no BD
    },
    inserir(address){
        return Modelo.create(address)
    },
    async pegarPorID(id){
        const encontrado = await Modelo.findOne({
            where:{
                id: id
            }
        })
        if(!encontrado){
            throw new Error('Fornecedor nao encontrado')
        }
        return encontrado
    },
    atualizar(id,dados){
        return Modelo.update(
            dados,
            {
                where: {id: id} 
            }
        )
    },
    remover(id){
        return Modelo.destroy({
             where: {id: id} 
         })
     },
     async pegarPorNome(NAME){
        const encontrado = await Modelo.findOne({
            where:{
                NAME: NAME
            }
        })
        if(!encontrado){
            throw new Error('Fornecedor nao encontrado')
        }
        return encontrado
     },
     listarParcial(){
        return Modelo.findAll({attributes: ['NAME']})
    },
    listarPg(pg){
        return Modelo.findAll({
            raw: true,
            limit: 5,
            offset: pg})//Sequelize faz o select para buscar no BD
    }
}