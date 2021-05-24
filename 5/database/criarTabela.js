const modeloTabelaMoney = require('./ModeloTabelaMoney_Transaction')

modeloTabelaMoney.sync().then(()=>console.log('tabelas criada com sucesso')).catch(console.log)