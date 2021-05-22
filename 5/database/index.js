const Sequelize = require('sequelize')

const conexao = new Sequelize(
    'evaluation',
    'root',
    'admin',
    {
        host:'localhost',
        dialect:"mysql"
    }
)

module.exports = conexao