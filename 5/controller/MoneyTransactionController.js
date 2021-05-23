const Money_transaction = require('../database/ModeloTabelaMoney_Transaction')
const paginacao = require('../paginacao')


module.exports = {
    
  async listar (req,res){
        try{
          const{pagina, tamanho} = req.query
          const{limit, offset} = paginacao.getPaginacao(pagina,tamanho)
          
          await Money_transaction.findAndCountAll({limit, offset}).
          then(dados => {
              const response = paginacao.paginacaoDados(dados,pagina,limit)
              res.send(response)})
        }catch(err){
            return res.status(400).json({error:err.message})    
        }
    },
   
  async inserir(req, res) {
        try{
          if(req.is('json')) {
            const money_transaction = await Money_transaction.create(req.body)
            res.status(201) 
            return res.json(money_transaction)
          }else{
            res.status(400)
            throw new Error('CONTENT-TYPE NAO ACEITO') 
          } 
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
    },
    
  async buscarId(req, res) {
        try {
          const money_transaction = await Money_transaction.findByPk(req.params.id)
    
          return res.json(money_transaction)
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
      },
   
  async buscarSender(req, res) {
        try {
          const{pagina, tamanho} = req.query
          const{limit, offset} = paginacao.getPaginacao(pagina,tamanho)
          
          await Money_transaction.findAndCountAll({where:{sender:req.params.sender}, limit, offset}).
          then(dados => {
              const response = paginacao.paginacaoDados(dados,pagina,limit)
              res.send(response)})
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
    },
    
  async buscarReceiver(req, res) {
        try {
          const{pagina, tamanho} = req.query
          const{limit, offset} = paginacao.getPaginacao(pagina,tamanho)
      
          await Money_transaction.findAndCountAll({where:{receiver:req.params.receiver}, limit, offset}).
          then(dados => {
              const response = paginacao.paginacaoDados(dados,pagina,limit)
              res.send(response)})
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
    },  
    
  async atualizar(req, res) {
        try {
          if(req.is('json')){
            const money_transaction = await Money_transaction.findByPk(req.params.id)
            await money_transaction.update(req.body)
            return res.json({ money_transaction })
          }else{
            res.status(400)
            throw new Error('CONTENT-TYPE NAO ACEITO') 
          }
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
    },
    
  async deletar(req, res) {
        try {
          const money_transaction = await Money_transaction.findByPk(req.params.id)
    
          await money_transaction.destroy()
    
          return res.json(money_transaction)
        } catch (err) {
          return res.status(400).json({ error: err.message })
        }
    }
} 
