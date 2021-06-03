import {Router, Request, Response, NextFunction} from 'express';
import MoneyTransactionController from '../controller/MoneyTransactionController';

export class MoneyTransactionRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private async listMoneyTransactions(req: Request, res: Response){
        await MoneyTransactionController.list(req, res);
    }

    private async insertMoneyTransaction(req: Request, res: Response){
        try{
            await MoneyTransactionController.create(req, res);
        }
        catch (err){
            res.status(400).json({message: "Invalid payload"});
        }
    }

    private async getMoneyTransaction(req: Request, res: Response){
        await MoneyTransactionController.searchById(req, res);
    }

    private async updateMoneyTransaction(req: Request, res: Response){
        await MoneyTransactionController.update(req, res);
    }

    private async deleteMoneyTransaction(req: Request, res: Response){
        await MoneyTransactionController.delete(req, res);
    }

    private requestValidation(req: Request, res: Response, next: NextFunction){
        if(req.is('json') || Object.keys(req.body).length === 0){
            next();
        }
        else{
            res.status(400).json({"message": "Invalid content type"})
        }
    }

    init(){
        this.router.post('/moneyTransaction', this.requestValidation, this.insertMoneyTransaction);
        this.router.put('/moneyTransaction/:id', this.requestValidation, this.updateMoneyTransaction);
        this.router.delete('/moneyTransaction/:id', this.requestValidation, this.deleteMoneyTransaction);
        this.router.get('/moneyTransaction/:id', this.requestValidation, this.getMoneyTransaction);
        this.router.get('/moneyTransaction', this.requestValidation, this.listMoneyTransactions);
    }
}

const moneyTransactionRouter = new MoneyTransactionRouter()
moneyTransactionRouter.init();

export default moneyTransactionRouter.router;