const ModeloTabela = require('../rotas/ModeloTabelaAddress')


ModeloTabela.sync().then(()=>{
    console.log("tabela criada com sucesso")
}).catch(console.log)