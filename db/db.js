module.exports = require('knex')({
   client: 'pg',
   version: '11.5',
   connection: {
      host: process.env.DB_HOSTNAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})