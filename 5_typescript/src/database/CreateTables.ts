import { MoneyTransactionModel } from './MoneyTransactionModel'

export default class DbCreation{

    public static init(){
        MoneyTransactionModel.sync().then(()=>console.log('table created sucesfully')).catch(console.log)
    }

}
