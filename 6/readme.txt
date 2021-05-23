Código desenvolvido por: Breno Coré.

Código referente a avaliação prática do programa de bolsas da Compasso UOL,
realizado em 20/05/2021.

Este código é um servidor em Nodejs com os pacotes: Express, MySql2,
Nodemon, Consign, Config.

Há um arquivo chamado default.json na pasta config e lá é onde está armazedo configurações que o servidor está utilizando para comunição com o banco e algumas configurações internas. Caso necessário, troque nesse arquivos os dados de conexão com o banco e portas utilizadas pelo servidor.

Rotas reconhecidas pelo servidor:
/api/registros/ - Get - retorna um array de objeto json paginados com o limite default de 10 itens.

/api/registros/:id - Get - retorna o registro cujo o ID do banco seja equivalente ao enviado.

/api/registros/nome/:nome - Get - retorna o registro cujo o NAME do banco seja equivalente ao enviado.

/api/registros/:dono/:tipo - Get - retorna o registro cujo o OWNER e o BUSINESS_TYPE sejam equivalentes aos enviados.

/api/registros/ - Post - Insere no banco de dados caso seja enviado um objeto json com os valores "name", "owner", "business_type". E opcionalmente o campo "registration_date" que caso não fornecido no corpo da requisição será atribuído a data da criação do objeto.

Ex:
{
  "NAME": "Slade",
  "OWNER": "Scott",
  "BUSINESS_TYPE": "Corporation"
}

/api/registros/:id - Delete - Deleta no banco de dados a linha cujo equivalente ao id fornecido.

/api/registros/:id - Patch - Atualiza no banco a linha com o id equivalente com os dados enviados no corpo da requisição.

Adicionalmente qualquer uma das requisições Get que possuírem mais itens do que o limite no arquivo dafault.json serão paginadas. Se o parametro da página for implícito, será selecionado automaticamente a página 0 e se caso haja mais páginas elas poderão ser selecionadas com a query ?pagina na url da requisição.

ex:
/api/registros?pagina=2