const router = require('express').Router()
const User = require('../db/User')
const bcrypt = require('bcryptjs')
const db = require('../db/db')

router.post('/login', async (req, res) => {
   const { email, password } = req.body
   if (!email || !password) {
      return res.status(400).json({
         success: false,
         message: 'email and password is required'
      })
   }
   try {
      const user = await User.findOne({
         email 
      }, '+password')

      if (!user) {
         return res.status(401).json({
            success: false,
            message: 'Authentication failed'
         })
      }

      const isValidPassword = await bcrypt.compare(
         password, user.password
      )

      if (!isValidPassword) {
         return res.status(401).json({
            success: false,
            message: 'Authentication failed'
         })
      }

      req.session.userId = user.id

      res.json({
         email: user.email,
         name: user.name,
         username: user.username,
         id: user.id,
      })

   } catch (err) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.post('/logout', async (req, res) => {
   try {
      await req.session.destroy()
      res.clearCookie('sid')
      res.json({
         success: true,
         message: 'OK'
      })
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/me', async (req, res) => {
   const { userId } = req.session
   if (!userId) {
      return res.status(401).json({
         success: false,
         message: 'Not authorized'
      })
   }

   const user = await User.findById(req.session.userId)

   res.json(user)
})

module.exports = router