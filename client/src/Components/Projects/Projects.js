import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Modal from '../UI/Modal'
import AddForm from '../Dashboard/AddForm'
const Projects = props => {
   const [lists, setLists] = useState([])
   const [showModal, setShowModal] = useState(false)
   const id = props.match.params.id

   useEffect(() => {
      axios.get(`/api/lists/${id}`)
         .then(({ data }) => {
            setLists(data)
         })
   }, [id])

   const closeModal = useCallback(e => {
      setShowModal(false)
   }, [setShowModal])

   console.log(lists)

   return (
      <div className="container projects">
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
         <div className="dashboard__add">
            <h3 className="heading-3 light">Add List</h3>
            <div onClick={e => {
               setShowModal(true)
            }} className="pointer">
               <span className="add-project"></span>
            </div>
         </div>
         <div className="projects__lists">
            {lists.map(list => {
               return <div key={list.id} className="projects__lists-list">
                  <header className="list-header">
                     <h3>{list.title}</h3>
                  </header>
                  <ul className="list-body">
                     <li>Test</li>
                  </ul>
               </div>
            })}
            <div className="projects__lists-list">
               <header className="list-header">
                  <h3> Title</h3>
                  <ul className="list-body">
                     <li>Cool</li>
                  </ul>
               </header>
            </div>
         </div>
      </div>
   )
}

export default Projects
