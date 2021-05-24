const Sequelize = require('sequelize')
const conexao = require('./index')

const colunas = {
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
},
sender:{
    type:Sequelize.STRING(100),
    allowNull:false
},
sender_bank_account:{
    type:Sequelize.STRING(100),
    allowNull:false
},
receiver:{
    type:Sequelize.STRING(100),
    allowNull:false
},
receiver_bank_account:{
    type:Sequelize.STRING(100),
    allowNull:false
},
amount:{
    type:Sequelize.DOUBLE(100,2),
    allowNull:false
}
}

const opcoes = {
freezeTableName:true,
timestamps:false
}

module.exports = conexao.define('money_transaction',colunas, opcoes)