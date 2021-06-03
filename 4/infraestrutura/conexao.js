const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'mysql',
    porta: 3306,
    user:'root',
    password:'root',
    database: 'EVALUATION'
})

module.exports = conexao