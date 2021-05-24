const TabelaProduto = require('../rotas/produtos/TabelaProduto');

class CriarTabelas{
    init(){
        console.log("Conexão ao banco iniciada");

        this.criaTabelaProduto();
    }
    criaTabelaProduto(){
        //sicronizo a minha tabela com o meu banco de dados
        //exibo uma mensagem de positiva que tudo deu certo
        //caso ocorra algum erro eu pego e exibo no console
        TabelaProduto
        .sync()
        .then(() => console.log("Tabela criada com sucesso"))
        .catch(console.log);
    }
}

module.exports = new CriarTabelas;


