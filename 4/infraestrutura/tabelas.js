class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTabelas()
    }

    criarTabelas() {
        const sql = 'CREATE TABLE IF NOT EXISTS REPLACEMENT_PART (ID int NOT NULL AUTO_INCREMENT, SERIAL_NUMBER varchar(300) NOT NULL, WIDTH double(100, 2) NOT NULL, HEIGHT double(100, 2) NOT NULL, DEPTH double(100, 2) NOT NULL, WEIGHT double(100, 2) NOT NULL, PRIMARY KEY (ID))'
        
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('tabela tabelas criado com sucesso')
            }
        })
    }
}

module.exports = new Tabelas