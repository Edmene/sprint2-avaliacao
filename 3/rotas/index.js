const roteador = require('express').Router()
const tabelaAdress = require('./TabelaAddress')
const Address = require('./Address')
const TabelaAddress = require('./TabelaAddress')

roteador.get('/',async (req,res)=>{//listar
    // const pg = req.query.pg
    // console.log(isNaN(pg))
    //listarPg(pg)
    const resultados = await tabelaAdress.listar()
    res.status(200)
    res.send( 
    JSON.stringify(resultados)
   )

})

roteador.post('/',async (req,res)=>{//cadastrar
    try{
        const dadosRecebidos = req.body//recebe o corpo da requisicao
        const address = new Address(dadosRecebidos)//coloca no modelo fornecedores
        await address.criar()   //pede para o js esperar para rodar antes de continuar e roda a insercao na tabela BD
        res.status(201)
        res.send(address)
    }catch(erro){
        res.status(400)
        res.send(JSON.stringify({mensage: erro.message}))
    }       
})

roteador.get('/:idAddress',async(req,res)=>{//acessar um por id
    try{
        const id = req.params.idAddress//recebe o que é passado no idfornecedor
        const address = new Address({id: id})//cria um novo fornecedor so com id
        await address.carregar()//chama carregar do Fornocedor
        res.status(200)
        res.send(JSON.stringify(address))//mostra o resultado   
    }catch(err){
        res.status(404)
        res.send(JSON.stringify({mensage: err.message}))
    }
})

roteador.put('/:idAddress', async(req,res)=>{//atualizar
    try{
        const id = req.params.idAddress//recebe o que é passado no idfornecedor
        const dadosRecebidos = req.body
        console.log(dadosRecebidos)
        const dados = Object.assign({}, dadosRecebidos, {id: id})//cria um novo objeto so com as variaveis
        const address = new Address(dados)
        await address.atualizar()
        res.status(204)
        console.log(address)
        res.end("Atualizado com sucesso")//mostra o resultado
    }catch(erro){
        res.status(400)
        res.send(JSON.stringify({mensage: erro.message}))
    }
        
       
})

roteador.delete('/:idAddress',async(req,res)=>{//delete
    try{
        const id = req.params.idAddress
        const address = new Address({id: id})
        await address.carregar()//se nao existe emite erro
        await address.remover(id)
        res.status(204)
        res.send(JSON.stringify(address))
    }catch(err){
        res.status(404)
        res.send(JSON.stringify({mensage: err.message}))
    }
})

roteador.get('/nome/:name',async(req,res)=>{//acessar um por nome
    try{
        const name = req.params.name//recebe o que é passado no idfornecedor
        const address = new Address({NAME: name})//cria um novo fornecedor so com id
        await address.carregarnome()//chama carregar do Fornocedor
        res.status(200)
        res.send(JSON.stringify(address))//mostra o resultado   
    }catch(err){
        res.status(404)
        res.send(JSON.stringify({mensage: err.message}))
    }
})

roteador.get('/nomecurto/1',async (req,res)=>{//listar NAME STATE
    const resultados = await tabelaAdress.listarParcial()
    res.status(200)
    res.send( 
        JSON.stringify(resultados)
    )
})



module.exports = roteador