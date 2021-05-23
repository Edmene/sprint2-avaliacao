const regis = require("../models/Registros");
const pag = require("../helpers/paginacao");

//utiliza o custom app para realizar diversas requisições
module.exports = app =>{

  //escuta por requisições do tipo Get na rota /api/registros/ e chama o método listarTudo passando os parâmentros da requisição
  app.get('/api/registros', (req, res) =>{
    
    const pagina = pag.definirPagina(req.query.pagina);
    
    regis.listarTudo(res, pagina);
  });

  //escuta por requisições do tipo Get na rota /api/registros/:id e chama o método listarId passando os parâmentros da requisição
  app.get('/api/registros/:id', (req, res) =>{

    regis.listarId(res, parseInt(req.params.id));
  });

  //escuta por requisições do tipo Get na rota /api/registros/:nome e chama o método listarNome passando os parâmentros da requisição
  app.get('/api/registros/nome/:nome', (req, res) =>{

    const pagina = pag.definirPagina(req.query.pagina);
    
    regis.listarNome(res, JSON.stringify(req.params.nome), pagina);
  });

  //escuta por requisições do tipo Get na rota /api/registros/:dono/:tipo e chama o método listarInfo passando os parâmentros da requisição
  app.get('/api/registros/:dono/:tipo', (req, res) =>{

    const pagina = pag.definirPagina(req.query.pagina);
    
    regis.listarInfo(res, JSON.stringify(req.params.dono), JSON.stringify(req.params.tipo), pagina);
  });

  //escuta por requisições do tipo Post na rota /api/registros/ e chama o método adicionar passando os parâmentros da requisição
  app.post('/api/registros/', (req, res)=>{
    
    let registro = req.body;
    
    if(registro.REGISTRATION_DATE == null){
      registro.REGISTRATION_DATE = new Date();
    }
    
    regis.adicionar(registro, res);
  });

  //escuta por requisições do tipo Delete na rota /api/registros/:id e chama o método deletarRegistro passando os parâmentros da requisição
  app.delete('/api/registros/:id', (req, res)=>{

    regis.deletarRegistro(res, parseInt(req.params.id));
  })

  //escuta por requisições do tipo Patch na rota /api/registros/:id e chama o método atualizar passando os parâmentros da requisição
  app.patch('/api/registros/:id', (req, res) =>{

    regis.atualizar(res, parseInt(req.params.id), req.body);
  });
}


