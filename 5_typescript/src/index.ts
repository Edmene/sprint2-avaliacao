import * as express from 'express';
import Routes from './routes/MoneyTransactionRouter';
import CreateTables from './database/CreateTables';

const app = express()

CreateTables.init();
app.use(express.json())
app.use(Routes)
app.listen(process.env.PORT || 3000)