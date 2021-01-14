import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'user',
    password: 'Mysql123',
    database: 'database',
    filename: path.resolve(__dirname, 'src', 'database', 'database.sql'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
};