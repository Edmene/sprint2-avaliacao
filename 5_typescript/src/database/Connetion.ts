import { Sequelize } from 'sequelize';

class Connection {
    connection: Sequelize;

    constructor() {
        this.connection = new Sequelize(
            (process.env.DB || 'EVALUATION'),
            (process.env.DB_USER || 'root'),
            (process.env.DB_PASSWORD || 'root'),
            {
                host:(process.env.DB_HOST || 'mysql'),
                dialect:"mysql"
            })
    }
}

const connection = new Connection().connection;

export default connection;