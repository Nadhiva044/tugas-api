const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tugas_api',
  password: 'nadhivazr19',
  port: 5432,
});

module.exports = pool;