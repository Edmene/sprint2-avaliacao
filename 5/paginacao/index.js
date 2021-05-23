module.exports ={
paginacaoDados(dados, pagina, limit){
    const { count : totalItens,rows : Money_transaction} = dados
    const paginaAtual = pagina ? + pagina : 0
    const totalPaginas = Math.trunc(totalItens / limit)
  
    return {Money_transaction, totalPaginas, paginaAtual, totalItens }
  },

getPaginacao(pagina, tamanho){
    const limit = tamanho ? +tamanho : 5
    const offset = pagina ? pagina * limit : 0

    return { limit, offset }
  }
}
