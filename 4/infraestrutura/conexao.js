const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    porta: 3306,
    user:'root',
    password:'Gustavao1',
    database: 'evaluation'
})

module.exports = conexao