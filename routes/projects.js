const router = require('express').Router()
const Project = require('../db/Projects')
const authMw = require('../middleware/auth')

router.post('/', authMw, async (req, res) => {
   const { title } = req.body
   if (!title) {
      return res.status(400).json({
         success: false,
         message: 'Title is required'
      })
   }

   try {
      const project = new Project({
         title,
         creator: req.userId
      })

      await project.save()

      res.json(project)

   } catch {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/', authMw, async (req, res) => {
   try {
      const projects = await Project.find({
         creator: req.userId
      })
      return res.json(projects)
   } catch (err) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

module.exports = router