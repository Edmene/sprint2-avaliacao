//Importa os pacotes necessários para a conexão com o banco de dados e iniciar o servidor
const cExpress = require('./config/customExpress');
const app = cExpress();

const conexao = require("./api/banco-de-dados/conexao");
const tabela = require("./api/banco-de-dados/Evaluation");

const config = require('config');

//conecta com o banco de dados e se caso não haja erro inicia o servidor
conexao.connect(erro =>{
  
  if(erro){

    console.log(erro);
  }
  else{
  
    console.log("conectado com a db com sucesso");
    tabela.init(conexao);
    
    app.listen(config.get("api.porta"), ()=>{
    
      console.log(`O servidor está rodando na porta ${config.get("api.porta")}`)
    });
  }
});

