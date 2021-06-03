import { SequelizeSearch } from "../models/SearchModel";

const DEFAULT_LIMIT = 10;

export default class Pagination{
//metodo que faz a paginacao com os dados   
    public static paginationData(data, receivedOffset, receivedLimit){
        const { total, items } = data;
        const offset= receivedOffset ? + receivedOffset : 0;
        const limit= receivedLimit ? receivedLimit : DEFAULT_LIMIT;

        return {items, offset, limit, total};
      }

//metodo que seta as configuracoes deafults da paginacao
    public static getPagination(offsetReceived, limitReceived){
        const limit = limitReceived ? +limitReceived : DEFAULT_LIMIT;
        const offset = offsetReceived ? offsetReceived : 0;

        return { limit, offset } as SequelizeSearch;
    }
}
