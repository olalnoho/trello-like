const router = require('express').Router()
const db = require('../db/db')

router.post('/', async (req, res) => {
   const { title } = req.body
   if (!title) {
      return res.status(400).json({
         success: false,
         message: 'Title is required'
      })
   }

   try {
      const [project] = await db('projects').insert({
         title,
         creator: req.session.userId
      }, '*')

      res.json(project)

   } catch {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/', async (req, res) => {
   try {
      const projects = await db('projects').select('*')
      return res.json(projects)
   } catch (err) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

module.exports = router