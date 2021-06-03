'use strict';
//import { INTEGER, STRING, DOUBLE } from 'sequelize';
import { Model, DataTypes } from "sequelize";
import connection from './Connetion';

interface MoneyTransactionAttributes {
    ID: number;
    SENDER: string;
    SENDER_BANK_ACCOUNT: string;
    RECEIVER: string;
    RECEIVER_BANK_ACCOUNT: string;
    AMOUNT: number;
}

export class MoneyTransactionModel extends Model<MoneyTransactionAttributes> implements MoneyTransactionAttributes{
    public ID!: number;
    public SENDER!: string;
    public SENDER_BANK_ACCOUNT!: string;
    public RECEIVER!: string;
    public RECEIVER_BANK_ACCOUNT!: string;
    public AMOUNT!: number;
}

export default (function MoneyTransactionDb() {
    MoneyTransactionModel.init(
        {
            ID:{
                type:DataTypes.INTEGER,
                autoIncrement:true,
                allowNull:false,
                primaryKey:true
            },
            SENDER:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            SENDER_BANK_ACCOUNT:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            RECEIVER:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            RECEIVER_BANK_ACCOUNT:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            AMOUNT:{
                type:DataTypes.DOUBLE(100,2),
                allowNull:false
            }
        },
        {
            modelName: "MONEY_TRANSACTION",
            freezeTableName:true,
            timestamps:false,
            sequelize: connection
        }
    )
    return MoneyTransactionModel;
})();