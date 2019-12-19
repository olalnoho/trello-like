const express = require('express')
require('./db/db')
const app = express()
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/lists', require('./routes/lists'))

app.listen(5000)