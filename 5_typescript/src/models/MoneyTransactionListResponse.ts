import MoneyTransaction from "./MoneyTransaction";

export default class MoneyTransactionListResponse{
    total: number
    items: Array<MoneyTransaction>
    offset?: number
    limit?: number

    static fromDB(dbResponse: any): MoneyTransactionListResponse{
        const moneyTransactionListResponse = new MoneyTransactionListResponse();
        moneyTransactionListResponse.total = dbResponse.count;
        moneyTransactionListResponse.items = dbResponse.rows.map(item => MoneyTransaction.getInstanceFromDb(item));
        return moneyTransactionListResponse;
    }
}