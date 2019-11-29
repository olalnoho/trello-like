const router = require('express').Router()
const db = require('../db/db')

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
      const [list] = await db('lists').insert({
         title,
         project: id,
      }, ['title', 'id'])

      return res.json(list)
   } catch {
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
      const lists = await db('lists')
         .select('*')
         .where({ project: id })

      return res.json(lists)
   } catch (err) {
      console.log(err)
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

/*
   title VARCHAR(255) NOT NULL,
   "description" VARCHAR(255),
   list INT NOT NULL,
   creator INT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY(list) REFERENCES lists(id),
   FOREIGN KEY(creator) REFERENCES users(id)

*/

router.post('/:id/tasks', async (req, res) => {
   const { title } = req.body
   const { id } = req.params
   console.log(id)

   if (!title || !id) {
      return res.status(400).json({
         success: false,
         message: 'Missing required params'
      })
   }
   try {
      const [task] = await db('tasks').insert({
         title,
         list: id,
         creator: req.session.userId,
      }, '*')

      res.json(task)
   } catch {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      })
   }
})

router.get('/:id/tasks', async (req, res) => {
   const tasks = await db('tasks').select('*').where({
      list: req.params.id
   })

   return res.json(tasks)
})

module.exports = router