const config = require('config');
const mysql = require('mysql2');

//faz a conexão com o banco de dados utilizando os valores definidos no arquivo default.json
const conexao = mysql.createConnection({

  host: config.get("db.host"),
  port: config.get("db.port"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.banco"),
});

//exporta a conexão para ser utilizado em diversos lugares
module.exports = conexao;