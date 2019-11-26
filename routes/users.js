const router = require('express').Router()
const bcrypt = require('bcryptjs')
const db = require('../db/db')

router.post('/register', async (req, res) => {
   const { username, email, password, name } = req.body
   if (!username || !email || !password || !name) {
      return res.status(400).json({
         success: false,
         message: 'Required fields missing'
      })
   }

   const hashedPw = await bcrypt.hash(password, 10)
   
   const [user] = await db('users')
      .insert({
         username,
         password: hashedPw,
         email: email.toLowerCase(),
         name
      }, '*')

   req.session.userId = user.id
   return res.json(user)
})

module.exports = router