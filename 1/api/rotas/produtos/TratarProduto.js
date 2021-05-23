const TabelaProduto = require("./TabelaProduto");

module.exports = {
    listar(){
        return TabelaProduto.findAll();
    }
}