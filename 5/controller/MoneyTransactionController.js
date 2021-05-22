const Money_transaction = require('../database/ModeloTabelaMoney_Transaction')

module.exports = {
    async index (req,res){
        try{
            const money_transaction = await Money_transaction.findAll()

            return res.json(money_transaction)
        }catch(erro){
            return res.status(400).json({error:ValidationErrorItem.message})    
        }
    }
}