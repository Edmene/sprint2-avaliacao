//Importa os pacotes necessários para a configuração do custom express
const express = require('express');
const consign = require('consign');

//pré carrega o script de json parser e o controller e exporta em um custom app 
module.exports = () => {
  
  const app = express();
 
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  consign()
    .include('./api/controller')
    .into(app);
 
  return app;
}
