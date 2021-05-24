const Sequelize = require('sequelize')

const conexao = new Sequelize(
    'evaluation',
    'root',
    'sua senha',
    {
        host:'localhost',
        dialect:"mysql"
    }
)

module.exports = conexao