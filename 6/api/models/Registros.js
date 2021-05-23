//importa os pacotes necessários para a comunicação com o banco e servidor
const config = require("config");
const conexao = require("../banco-de-dados/conexao");
const pag = require("../helpers/paginacao");

//cria o modelo Registro e define os métodos que interagem com o banco de dados
class Registros{

  //adiciona ao banco o objeto json passado e responde a requisição
  adicionar(registro, res){

    const sql = 'INSERT INTO STORE_REGISTRATION SET ?';

    conexao.query(sql, registro, (erro, result)=>{

      if(erro){

        res.status(400).json(erro);
      }else{

        res.status(201).json(result);
      }
    });
  }

  //retorna os objetos do banco com o limite definido no arquivo default.json
  listarTudo(res, page){

    const limite = config.get("api.limite");
    const sql = `SELECT * FROM STORE_REGISTRATION LIMIT ${limite} OFFSET ${page*limite}`;

    conexao.query(sql, (erro, result) => {
      if(erro){

        res.status(400).json(erro);
      }else{

        const registros = pag.paginacao(result, page);  
        res.status(200).json(registros);
      }
    }); 
  }

  //retorna o objeto que possua o id correspondente ao enviado
  listarId(res, id){

    const sql = `SELECT * FROM STORE_REGISTRATION WHERE ID=${id}`

    conexao.query(sql, (erro, result) => {
      if(erro){

        res.status(400).json(erro);
      }else{

        res.status(200).json(result);
      }
    });
  }

  //retorna o objeto cujo o name seja equivalente ao enviado
  listarNome(res, nome, page){

    const limite = config.get("api.limite");
    const sql = `SELECT * FROM STORE_REGISTRATION WHERE NAME=${nome} LIMIT ${limite} OFFSET ${page*limite}`

    conexao.query(sql, (erro, result) => {
      if(erro){

        res.status(400).json(erro);
      }else{

        const registros = pag.paginacao(result, page);
        res.status(200).json(registros);
      }
    });
  }

  //retorna o objeto cujo o valores owner e business_type sejam equivalentes aos enviados
  listarInfo(res, dono, tipo, page){

    const limite = config.get("api.limite");
    const sql = `SELECT * FROM STORE_REGISTRATION WHERE OWNER=${dono} AND BUSINESS_TYPE=${tipo} LIMIT ${limite} OFFSET ${page*limite}`;

    conexao.query(sql, (erro, result)=>{

      if(erro){

        res.status(400).json(erro);
      }else{

        const registros = pag.paginacao(result, page);
        res.status(200).json(registros);
      }
    });
  }

  //deleta o objeto cujo id seja equivalente ao enviado
  deletarRegistro(res, id){

    const sql = `DELETE FROM STORE_REGISTRATION WHERE ID=${id}`;

    conexao.query(sql, (erro, result)=>{
      if(erro){

        res.status(400).json(erro);
      }else{

        res.status(200).json(result);
      }
    });
  }
  
  //atualiza o objeto ao qual seja equivalente ao id enviado
  atualizar(res, id, registro){

    const sql = `UPDATE STORE_REGISTRATION SET ? WHERE ID=${id} `;

    conexao.query(sql, registro, (erro,result)=>{
      
      if(erro){

        res.status(400).json(erro);
      }else{

        res.status(200).json(result);
      }
    });
      
  }
}

//instancia o registro e exporta para a utilização no controller
module.exports = new Registros;