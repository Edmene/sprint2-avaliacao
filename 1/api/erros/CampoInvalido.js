class CampoInvalido extends Error{
    constructor(campo){
        const mensagem = `O campo '${campo}' está invalido`;
        super(mensagem);
        this.name = 'CampoInvalido';
        this.idErro = 0;
    }
}

module.exports = CampoInvalido;