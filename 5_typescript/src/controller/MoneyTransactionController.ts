import * as config from "../config/config";
import MoneyTransaction from "../models/MoneyTransaction";
import MoneyTransactionDb from '../database/MoneyTransactionModel';
import Pagination from '../utils/Pagination';
import SearchModel from "../models/SearchModel";
import MoneyTransactionListResponse from "../models/MoneyTransactionListResponse";

export class MoneyTransactionController {
    //metodo que lista todos os registros do banco
    async list(req, res): Promise<void>{
        try{
            let pagination = {
                offset: null,
                limit: null
            };
            let searchParams = {
                query: {where: null, use: false},
            } as SearchModel;
            for(const [entry, content] of Object.entries(req.query)){
                if(pagination[entry] !== undefined && pagination[entry] === null){
                    pagination[entry] = parseInt(content as string);
                }
                else{
                    const allowedSearch = config.default.allowedSearches.find(search => search[entry]);
                    if(allowedSearch){
                        !searchParams.query.use ? searchParams.query.use = true : null;
                        if(!searchParams.query.where) searchParams.query.where = {};
                        searchParams.query.where[allowedSearch[entry]] = content;
                    }
                }
            }
            const search = Pagination.getPagination(pagination.offset, pagination.limit);
            if(searchParams.query.use){
                search.where = searchParams.query.where;
            }

            // @ts-ignore
            let response = await MoneyTransactionDb.findAndCountAll(search);
            response = MoneyTransactionListResponse.fromDB(response);
            response = Pagination.paginationData(response, pagination.offset, pagination.limit);
            res.status(200).json(response);

        }catch(err){
            console.log(err);
            return res.status(400).json({message:"Invalid payload"})
        }
    }

    //metodo que insere um novo registro no banco
    async create(req, res): Promise<void> {
        try{
            const moneyTransaction = new MoneyTransaction(req.body);
            console.log(MoneyTransaction.toInstanceFromDb(moneyTransaction));
            // @ts-ignore
            const moneyTransactionDb = await MoneyTransactionDb.create(MoneyTransaction.toInstanceFromDb(moneyTransaction).dataValues);

            return res.status(201).json(MoneyTransaction.getInstanceFromDb(moneyTransactionDb));
        } catch (err) {
            console.log(err);
            return res.status(400).json({message:"Invalid payload"})
        }
    }

    //metodo que busca pelo atributo id os registro no banco
    async searchById(req, res): Promise<void> {
        try {
            // @ts-ignore
            const moneyTransactionDb = await MoneyTransactionDb.findByPk(req.params.id)
            if(moneyTransactionDb) {
                return res.status(200).json(MoneyTransaction.getInstanceFromDb(moneyTransactionDb))
            }
            else{
                res.status(404).json({message: "resource not found"});
            }
        } catch (err) {
            console.log(err);
            return res.status(400).json({message:"Invalid payload"})
        }
    }

    //metodo que atualiza informacoes de um registro no banco
    async update(req, res): Promise<void> {
        try {
            const moneyTransaction = new MoneyTransaction(req.body);
            // @ts-ignore
            const moneyTransactionDb = await MoneyTransactionDb.findByPk(req.params.id)

            if(moneyTransactionDb) {
                if(moneyTransaction.id) delete moneyTransaction.id;
                // @ts-ignore
                await moneyTransactionDb.update(MoneyTransaction.toInstanceFromDb(moneyTransaction).dataValues);
                return res.status(200).json(MoneyTransaction.getInstanceFromDb(moneyTransactionDb));
            }
            else{
                res.status(404).json({message: "resource not found"});
            }

        } catch (err) {
            console.log(err);
            return res.status(400).json({message:"Invalid payload"})
        }
    }

    //metodo que delete um registro do banco
    async delete(req, res): Promise<void> {
        try {
            // @ts-ignore
            const moneyTransactionDb = await MoneyTransactionDb.findByPk(req.params.id)
            if(moneyTransactionDb) {
                const moneyTransaction = MoneyTransaction.getInstanceFromDb(moneyTransactionDb);
                await moneyTransactionDb.destroy();
                return res.status(204).json(moneyTransaction);
            }
            else{
                res.status(404).json({message: "resource not found"});
            }
        } catch (err) {
            console.log(err);
            return res.status(400).json({message:"Invalid payload"})
        }
    }
}

export default new MoneyTransactionController();
