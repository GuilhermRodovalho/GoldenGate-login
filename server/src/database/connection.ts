import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'user',
    password: 'Mysql123',
    database: 'database',
    filename: path.resolve(__dirname, 'database.sql'),
  }
});

export default connection;
