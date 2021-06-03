const customExpress = require("./app/customExpress");
const criaTabelas = require('./bd/CriarTabelas');
const config = require("config");

//crio as tabelas
criaTabelas.init();

const app = customExpress();

app.listen(config.get("api.porta"), () => console.log("Estou no ar"));