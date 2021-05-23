const Modelo = require('./ModeloTabelaAddress')

module.exports={
    listar(){
        return Modelo.findAll({raw: true})//Sequelize faz o select para buscar no BD
    }
}