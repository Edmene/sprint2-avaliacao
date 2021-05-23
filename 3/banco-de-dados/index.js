const sequalize = require('sequelize')
const config = require('config')//dados de acesso no json (bpm install config)

const instancia = new sequalize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instancia