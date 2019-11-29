import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const List = ({ list, projectId }) => {
   const [title, setTitle] = useState('')
   const [tasks, setTasks] = useState([])
   const listId = list.id
   console.log(listId)

   useEffect(() => {
      axios.get(`/api/lists/${listId}/tasks`)
         .then(res => {
            setTasks(res.data)
         })
   }, [listId])

   const onSubmit = e => {
      e.preventDefault()
      axios.post(`/api/lists/${listId}/tasks`, { title })
         .then(res => {
            setTasks(tasks => ([
               res.data,
               ...tasks
            ]))
         })
   }
   return (
      <Droppable droppableId={String(listId)}>
         {provider => (
            <div ref={provider.innerRef} {...provider.droppableProps} className="projects__lists-list">
               <header className="list-header">
                  <h3>{list.title}</h3>
               </header>
               <ul className="list-body">
                  {tasks.map((t, index) => {
                     return <Draggable index={index} key={t.id} draggableId={String(t.id)}>
                        {provider => (
                           <li index={index} {...provider.dragHandleProps} ref={provider.innerRef} {...provider.draggableProps}> {t.title} </li>
                        )}
                     </Draggable>
                  })}
                  {provider.placeholder}
               </ul>
               <form className="form" onSubmit={onSubmit}>
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                  <input type="submit" className="btn btn--primary" />
               </form>
            </div>
         )}
      </Droppable>
   )
}

export default List
