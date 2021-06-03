const Sequelize = require('sequelize')

const conexao = new Sequelize(
    'EVALUATION',
    'root',
    'root',
    {
        host:'mysql',
        dialect:"mysql"
    }
)

module.exports = conexao