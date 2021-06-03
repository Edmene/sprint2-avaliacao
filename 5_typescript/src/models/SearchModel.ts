interface Query {
    use?: boolean;
    where?: any;
}

export interface SequelizeSearch {
    where?: any;
    limit?: number;
    offset?: number;
}

export default interface SearchModel{
    query: Query;
}