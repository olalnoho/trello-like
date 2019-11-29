const express = require('express')
const redis = require('redis')
const session = require('express-session')

const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()

const app = express()

app.use(express.json())

app.use(
   session({
      name: process.env.SESSION_NAME ||'sid',
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET || 'asdaj3ijt893893nk',
      store: new RedisStore({ client: redisClient }),
      cookie: {
         maxAge: (1000 * 60 * 60 * 24) * 1, // 1 Day
         secure: false,
      }
   })
)

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/lists', require('./routes/lists'))

app.listen(5000)