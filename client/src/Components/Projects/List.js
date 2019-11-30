import React, { useState } from 'react'
import axios from 'axios'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const List = ({ list, tasks, projectId, addTask }) => {
   const [title, setTitle] = useState('')
   const listId = list._id

   const onSubmit = e => {
      e.preventDefault()
      axios.post(`/api/lists/${projectId}/${list._id}/tasks`, { title })
         .then(res => {
            addTask(list._id, res.data)
            setTitle('')
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
                     return <Draggable index={index} key={t._id} draggableId={String(t._id)}>
                        {provider => (
                           <li
                              index={index}
                              {...provider.dragHandleProps}
                              {...provider.draggableProps}
                              ref={provider.innerRef}
                           > {t.title}
                           </li>
                        )}
                     </Draggable>
                  })}
                  {provider.placeholder}
               </ul>
               <form className="form" onSubmit={onSubmit}>
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                  <input type="submit" value="+" className="btn btn--secondary" />
               </form>
            </div>
         )}
      </Droppable>
   )
}

export default List
