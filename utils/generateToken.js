const jwt = require('jsonwebtoken')

const genToken = userId => jwt.sign({ userId }, process.env.JWT_SECRET, {
   expiresIn: 360000
})

module.exports = genToken