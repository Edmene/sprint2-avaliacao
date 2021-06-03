//eu irei usar o Sequelizer para montar o banco de dados
const Sequelizer = require("sequelize");
//a configuração do banco foi centralizada na config
const config = require("config");

const conexao = new Sequelizer(
    config.get("mysql.bd"),
    config.get("mysql.usuario"),
    config.get("mysql.senha"),

    {
        host: config.get("mysql.host"),
        port: 3306,
        dialect: "mysql"
    }
);

module.exports = conexao;