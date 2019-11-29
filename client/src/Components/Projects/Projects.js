import React, { useEffect, useState, useCallback } from 'react'
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

   const closeModal = useCallback(e => {
      setShowModal(false)
   }, [setShowModal])

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
            <AddForm url={`/api/lists/${id}`} setProjects={setLists} closeModal={closeModal} />
         </Modal>

         <div className="container projects">
            <div className="dashboard__add">
               <h3 className="heading-3 light">Add List</h3>
               <div onClick={e => setShowModal(true)} className="pointer">
                  <span className="add-project"></span>
               </div>
            </div>
            <div className="projects__lists">
               {lists.map(list => <List tasks={list.tasks} projectId={id} key={list._id} list={list} />)}
            </div>
         </div>
      </>
   )
}

export default Projects
