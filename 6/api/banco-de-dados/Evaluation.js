const conexao = require("./conexao");

//classe para a criação e conexão com o banco de dados
class Evaluation{
  
  //método que recebe a conexão e chama o método para criar a tabela
  init(conexao){

    this.conexao = conexao;
    this.criarStoreRegis();
  }

  //método para criar a tabela store_registration caso não exista
  criarStoreRegis(){
    const sql = "CREATE TABLE IF NOT EXISTS STORE_REGISTRATION (ID INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(100) NOT NULL, OWNER VARCHAR(100) NOT NULL, REGISTRATION_DATE DATE NOT NULL, BUSINESS_TYPE VARCHAR(100) NOT NULL, PRIMARY KEY (ID))"

    this.conexao.query(sql, error=>{
      
      if(error){
      
        console.log(error);
      } 
    });
  }
}

//instância e exporta esse obj para utilzar o método init() no index.js do servidor
module.exports = new Evaluation();