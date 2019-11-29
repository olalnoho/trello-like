import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Modal from '../UI/Modal'
import AddForm from './AddForm'
import Project from './Project'

const Dashboard = () => {
   const [showModal, setShowModal] = useState(false)
   const [projects, setProjects] = useState([])
   useEffect(() => {
      axios.get('/api/projects')
         .then(res => {
            setProjects(res.data)
         })
   }, [])

   const closeModal = useCallback(e => {
      setShowModal(false)
   }, [setShowModal])

   return (
      <div className="container dashboard">
         <Modal
            show={showModal}
            className="dashboard-modal"
            onCancel={closeModal}
            header={<h2>
               Add a new Project
            </h2>}
            headerClass="dashboard-modal__header"
            contentClass="dashboard-modal__content"
         >
            <AddForm url="/api/projects" setProjects={setProjects} closeModal={closeModal} />
         </Modal>
         <div className="dashboard__add">
            <h3 className="heading-3">Add project</h3>
            <div onClick={e => {
               setShowModal(true)
            }} className="pointer">
               <span className="add-project"></span>
            </div>
         </div>
         <div className="dashboard__projects">
            {projects.map(p => <Project key={p._id} project={p} />)}
         </div>
      </div>
   )
}

export default Dashboard
