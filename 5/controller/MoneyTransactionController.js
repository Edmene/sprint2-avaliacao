const Money_transaction = require('../database/ModeloTabelaMoney_Transaction')

module.exports = {
    async listar (req,res){
        try{
            const money_transaction = await Money_transaction.findAll()

            return res.json(money_transaction)
        }catch(erro){
            return res.status(400).json({error:ValidationErrorItem.message})    
        }
    },
    async inserir(req, res) {
        try {
          const money_transaction = await Money_transaction.create(req.body);
    
          return res.json(money_transaction);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    },
    async buscarId(req, res) {
        try {
          const money_transaction = await Money_transaction.findByPk(req.params.id);
    
          return res.json(money_transaction);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
    async buscarSender(req, res) {
        try {
          const money_transaction = await Money_transaction.findOne({where:{sender:req.params.sender}});
          if(money_transaction == null){
            throw new Error("Sender not found!")
          }
          return res.json(money_transaction);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
      async buscarReceiver(req, res) {
        try {
          const money_transaction = await Money_transaction.findOne({where:{receiver:req.params.receiver}});
          if(money_transaction == null){
            throw new Error("Sender not found!")
          }
          return res.json(money_transaction);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },  
    async atualizar(req, res) {
        try {
          const money_transaction = await Money_transaction.findByPk(req.params.id);
    
          await money_transaction.update(req.body);
    
          return res.json({ money_transaction });
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
      },
    async deletar(req, res) {
        try {
          const money_transaction = await Money_transaction.findByPk(req.params.id);
    
          await money_transaction.destroy();
    
          return res.json(money_transaction);
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }
} 
