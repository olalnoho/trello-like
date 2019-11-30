import React, { useEffect, useState, useCallback } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import axios from 'axios'

import Modal from '../UI/Modal'
import AddForm from '../Dashboard/AddForm'
import List from './List'

const Projects = props => {
   const id = props.match.params.id

   const [lists, setLists] = useState([])
   const [showModal, setShowModal] = useState(false)

   useEffect(() => {
      axios.get(`/api/lists/${id}`)
         .then(({ data }) => {
            setLists(data)
         })
   }, [id])

   const onDragEnd = result => {
      const { source, destination, draggableId } = result

      if (!destination) return

      const fromContainer = lists.find(list => list._id === source.droppableId)
      const toContainer = lists.find(list => list._id === destination.droppableId)

      const [elem] = fromContainer.tasks.splice(source.index, 1)
      toContainer.tasks.splice(destination.index, 0, elem)
   }

   const closeModal = useCallback(e => {
      setShowModal(false)
   }, [])

   const formCallback = useCallback(data => {
      setLists(prev => {
         return [...prev, data]
      })
   }, [])

   const addTask = useCallback((listId, data) => {
      const copy = lists.slice()
      const list = copy.find(l => l._id === listId)
      list.tasks.push(data)
      setLists(copy)
   }, [lists])

   return (
      <>
         <Modal
            show={showModal}
            className="dashboard-modal"
            onCancel={closeModal}
            header={<h2>
               Add a new list
            </h2>}
            headerClass="dashboard-modal__header"
            contentClass="dashboard-modal__content"
         >
            <AddForm url={`/api/lists/${id}`} callback={formCallback} closeModal={closeModal} />
         </Modal>
         <DragDropContext onDragEnd={onDragEnd}>
            <div className="container projects">
               <div className="dashboard__add">
                  <h3 className="heading-3 light">Add List</h3>
                  <div onClick={e => setShowModal(true)} className="pointer">
                     <span className="add-project"></span>
                  </div>
               </div>
               <div className="projects__lists">
                  {lists.map(list => <List addTask={addTask} tasks={list.tasks} projectId={id} key={list._id} list={list} />)}
               </div>
            </div>
         </DragDropContext>
      </>
   )
}

export default Projects
