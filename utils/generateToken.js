const jwt = require('jsonwebtoken')

const genToken = (userId) => jwt.sign({ userId }, 'secret', {
   expiresIn: 360000
})

module.exports = genToken