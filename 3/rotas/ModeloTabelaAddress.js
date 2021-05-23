const sequalize = require('sequelize')
const instancia = require('../banco-de-dados')

const colunas ={
    NAME: {
        type: sequalize.STRING(100),
        allowNull: false
    },COUNTY: {
        type: sequalize.STRING(50),
        allowNull: true
    },STATE: {
        type: sequalize.STRING(50),
        allowNull: false
    },COUNTRY: {
        type: sequalize.STRING(50),
        allowNull: false
    },NUMBER: {
        type: sequalize.INTEGER,
        allowNull: true
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'EVALUATION',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
}

module.exports = instancia.define('fornecedor', colunas , opcoes)