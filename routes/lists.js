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
      }, ['title', 'project', 'id'])

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
         .select('title', 'id')
         .where({
            project: id
         })

      return res.json(lists)
   } catch {

   }
})
module.exports = router