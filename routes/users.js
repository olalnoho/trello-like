const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../db/User')
const genToken = require('../utils/generateToken')

router.post('/register', async (req, res) => {
   const { username, email, password, name } = req.body
   
   if (!username || !email || !password || !name) {
      return res.status(400).json({
         success: false,
         message: 'Required fields missing'
      })
   }

   const hashedPw = await bcrypt.hash(password, 10)

   const user = new User({
      username,
      password: hashedPw,
      email: email.toLowerCase(),
      name
   })

   await user.save()
   
   return res.json({
      token: genToken(user._id),
      user: {
      id: user._id,
      username: user.username,
      email: user.email,
      name: user.name
   }})
})

module.exports = router