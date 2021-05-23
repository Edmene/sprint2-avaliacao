const config = require('config');

/*função para receber um objeto e a página selecionada e retornar um novo objeto
e retornar um novo objeto com os parametros prev e next caso existam*/
function paginacao(obj, pag){

  const limite = config.get("api.limite");
  const resultados = {};

  //valida se a página selecionada é maior ou igual a 1
  if(pag>=1){
  
    resultados.previous = {
  
      page: pag-1
    }
  }

  //valida se o length do obj é e igual ao limite estabelecido 
  if(Object.keys(obj).length==limite){
  
    resultados.next = {
  
      page: pag+1
    }
  }

  resultados.registros = obj;

  //retorna o novo objeto com os params da paginação e os valores fornecidos pelo banco
  return resultados;
}

//função para ajudar e definir o valor da página fornecida no query.params da requisição
function definirPagina(bodyPagina){

  let pagina = bodyPagina;
    
  if(pagina==undefined){
    pagina=0;
  }else{
    pagina = parseInt(bodyPagina);
  }
  //retorna o valor em int da página que foi enviada ou 0 caso o usuário não forneça
  return pagina;
}

//exporta as funções param serem utilizadas pelo controller e pelo mode Registro
module.exports = {paginacao, definirPagina};