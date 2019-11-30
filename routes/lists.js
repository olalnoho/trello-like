const router = require('express').Router()
const db = require('../db/db')
const Project = require('../db/Projects')

router.post('/:id', async (req, res) => {
   const { title } = req.body
   const { id } = req.params

   if (!title || !id) {
      return res.status(400).json({
         success: false,
         message: 'Title and project is required'
      })
   }
   try {
      const project = await Project.findById(id)
      const list = await project.addList({ title })
      return res.json(list)
   } catch (err) {

      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/:id', async (req, res) => {
   const { id } = req.params
   if (!id) {
      return res.status(400).json({
         success: false,
         message: 'No project specified'
      })
   }

   try {

      const { lists } = await Project.findOne({
         _id: id
      })

      return res.json(lists)
   } catch (err) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.post('/:projectId/:listId/tasks', async (req, res) => {
   const { title } = req.body
   const { projectId, listId } = req.params

   if (!title || !listId || !projectId) {
      return res.status(400).json({
         success: false,
         message: 'Missing required params'
      })
   }
   try {
      const project = await Project.findOne({
         _id: projectId
      })

      const task = await project.addTask(listId, {
         title
      })

      res.json(task)
   } catch (err) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/:projectId/:listId/tasks', async (req, res) => {
   const { projectId, listId } = req.params
   try {
   
      const project = await Project.findOne({
         _id: projectId
      })

      const tasks = await project.getTasks(listId)
      return res.json(tasks)
   
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

module.exports = router