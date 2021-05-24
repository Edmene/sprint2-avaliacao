class NaoEncontrado extends Error{
    constructor(){
        super("Produto não encontrado!");
        this.name = "NaoEncontrado";
        this.idErro = 2;
    }
}

module.exports = NaoEncontrado;