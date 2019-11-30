const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },

   creator: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
   },

   lists: [{
      title: {
         type: String,
         required: true
      },
      tasks: [{
         title: {
            type: String,
            required: true
         },
         description: {
            type: String,
         },
         created_at: {
            type: Date,
            default: Date.now()
         },
         position: {
            type: Number,
         }
      }]
   }]
})

projectSchema.methods.addList = async function (obj) {
   this.lists.push(obj)
   await this.save()
   // To get ID
   const addedList = this.lists[this.lists.length - 1]
   return addedList
}

projectSchema.methods.addTask = async function (listId, task) {
   const list = this.lists.find(l => l._id == listId)
   list.tasks.push(task)
   await this.save()
   const newTask = list.tasks[list.tasks.length - 1]
   return newTask
}

projectSchema.methods.getTasks = async function (listId) {
   const list = this.find(l => l._id == listId)
   return list.tasks
}

const Project = mongoose.model('Project', projectSchema)
module.exports = Project