import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, 
    //para saber oque tem que jogar nos campos nao preenchidos
})

export default db;