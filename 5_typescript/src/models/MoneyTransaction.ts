import { MoneyTransactionModel } from "../database/MoneyTransactionModel";
export default class MoneyTransaction{

    id?: number;
    sender?: string;
    senderBankAccount?:string;
    receiver?:string;
    receiverBankAccount?: string;
    amount?: number;

    constructor(requestBody?: any) {
        if(requestBody) {
            this.sender = requestBody.sender;
            this.senderBankAccount = requestBody.senderBankAccount;
            this.receiver = requestBody.receiver;
            this.receiverBankAccount = requestBody.receiverBankAccount;
            this.amount = requestBody.amount;

            if(!this.validateStringFields([this.sender, this.receiver,
                this.senderBankAccount, this.receiverBankAccount])){
                throw new Error("Invalid content for string");
            }
        }
    }

    static getInstanceFromDb(moneyTransactionModel: MoneyTransactionModel): MoneyTransaction{
        const moneyTransaction = new MoneyTransaction();
        moneyTransaction.id = moneyTransactionModel.ID;
        moneyTransaction.amount = moneyTransactionModel.AMOUNT;
        moneyTransaction.sender = moneyTransactionModel.SENDER;
        moneyTransaction.receiver = moneyTransactionModel.RECEIVER;
        moneyTransaction.receiverBankAccount = moneyTransactionModel.RECEIVER_BANK_ACCOUNT;
        moneyTransaction.senderBankAccount = moneyTransactionModel.SENDER_BANK_ACCOUNT;

        return moneyTransaction;
    }

    static toInstanceFromDb(moneyTransaction: MoneyTransaction): MoneyTransactionModel{
        const moneyTransactionModel = new MoneyTransactionModel();
        if(moneyTransaction.id){
            moneyTransactionModel.ID = moneyTransaction.id;
        }
        moneyTransactionModel.AMOUNT = moneyTransaction.amount;
        moneyTransactionModel.SENDER = moneyTransaction.sender;
        moneyTransactionModel.RECEIVER = moneyTransaction.receiver;
        moneyTransactionModel.RECEIVER_BANK_ACCOUNT = moneyTransaction.receiverBankAccount;
        moneyTransactionModel.SENDER_BANK_ACCOUNT = moneyTransaction.senderBankAccount;

        return moneyTransactionModel;
    }

    private validateStringFields(fields: Array<string>): boolean{
        let valid = true;
        for(const field of fields){
            valid = valid && !/([application][javascript][script])\w+/g.test(field);
        }
        return valid;
    }
}