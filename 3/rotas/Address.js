const TabelaAddress = require("./TabelaAddress")

class Address{
    constructor({id, NAME, COUNTY, STATE, COUNTRY, NUMBER, dataCriacao, dataAtualizacao}){
        this.id = id
        this.NAME = NAME
        this.COUNTY = COUNTY
        this.STATE = STATE
        this.COUNTRY = COUNTRY
        this.NUMBER = NUMBER
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
    }

    async criar(){
        this.validar()
        const resultados = await TabelaAddress.inserir({
            NAME: this.NAME,
            COUNTY: this.COUNTY,
            STATE:this.STATE,
            COUNTRY: this.COUNTRY,
            NUMBER: this.NUMBER
        })
        this.id = resultados.id
        this.dataCriacao = resultados.dataCriacao
        this.dataAtualizacao = resultados.dataAtualizacao
    }
    validar(){
        const campos = ['NAME','COUNTY','STATE','COUNTRY','NUMBER']
        campos.forEach(campo=>{
            const valor = this[campo]
            if(valor.length === 0){
                throw new Error(`O campo: ${campo}, esta vazio`)
            }
        })
    }

    async carregar(){
        const resultado = await TabelaAddress.pegarPorID(this.id)//passa para queri sequalize
        this.NAME = resultado.NAME
        this.COUNTY = resultado.COUNTY
        this.STATE = resultado.STATE
        this.COUNTRY = resultado.COUNTRY
        this.NUMBER = resultado.NUMBER
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
    }

    async atualizar(){
        await TabelaAddress.pegarPorID(this.id)//se nao der erro ele roda
      
        const campos = ['NAME','COUNTY','STATE','COUNTRY','NUMBER']
        const dadosParaAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor
                }
            })
            //console.log("dadosParaAtualizar")
            //console.log(dadosParaAtualizar)
        

            if (Object.keys(dadosParaAtualizar).length === 0){
                throw new Error('erro ao atualizar, nao foi fornecido dados')
            }

            await TabelaAddress.atualizar(this.id, dadosParaAtualizar)
        
        
    }

    remover(){
        return TabelaAddress.remover(this.id)
    }
    async carregarnome(){
        const resultado = await TabelaAddress.pegarPorNome(this.NAME)//passa para queri sequalize
        this.id = resultado.id
        this.COUNTY = resultado.COUNTY
        this.STATE = resultado.STATE
        this.COUNTRY = resultado.COUNTRY
        this.NUMBER = resultado.NUMBER
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
    }
}

module.exports = Address