const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(campo, res){
       const sql = 'INSERT INTO REPLACEMENT_PART SET ?' 


       conexao.query(sql, campo, (erro, resultados) => {
        if(erro){
           res.status(400).json(erro)
        } else{
            res.status(201).json(resultados)
        } 
        
       })


    }

    lista(res){
        const sql = 'SELECT * FROM REPLACEMENT_PART'

        conexao.query(sql, res, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM REPLACEMENT_PART WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro) 
            }else{
                res.status(200).json(atendimento)
            }
        })
    }

}

module.exports = new Atendimento