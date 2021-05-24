class DadosNaoFornecidos extends Error{
    constructor(){
        super("Dados não foram fornecidos!")
        this.name = "DadosNaoFornecidos",
        this.idErro = 1;
    }
}

module.exports = DadosNaoFornecidos;