const express = require('express')
require('./db/db')
const app = express()
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/lists', require('./routes/lists'))

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'))
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(
         __dirname, 'client', 'build', 'index.html'
      ))
   })
}


app.listen(
   process.env.PORT || 5000
)