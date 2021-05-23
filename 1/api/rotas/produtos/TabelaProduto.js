const Sequelize = require("sequelize");
//recupero a minha conexão
const instancia = require("../../bd/conexao");

//crio as colunas da tabela produto, especificando o tipo, tamanho e se pode ser null
const colunas = {
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE(100, 2),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    weight: {
        type: Sequelize.DOUBLE(100,2),
        allowNull: false
    }
}

//congelo o nome da tabela
//defino o nome da tabela
//monto a data de criação e a data de atualização da tabela
//e a versão da tabela
const opcoes = {
    freezeTableName: true,
    tableName: "product",
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    version: 'version'
};

//crio a tabela no banco de dados
module.exports = instancia.define("product", colunas, opcoes);