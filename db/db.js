// module.exports = require('knex')({
//    client: 'pg',
//    version: '11.5',
//    connection: {
//       host: process.env.DB_HOSTNAME,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME
//    }
// })

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/trello', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(res => console.log('Connected to mongoose'))