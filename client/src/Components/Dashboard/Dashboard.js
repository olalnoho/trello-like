import React, { useState } from 'react'
import Modal from '../UI/Modal'
import AddForm from './AddForm'

const Dashboard = () => {
   const [showModal, setShowModal] = useState(false)
   return (
      <div className="container dashboard">
         <Modal
            show={showModal}
            className="dashboard-modal"
            onCancel={e => setShowModal(false)}
            header={<h2>
               Add a new Project
            </h2>}
            headerClass="dashboard-modal__header"
            contentClass="dashboard-modal__content"
         >
            <AddForm />
         </Modal>
         <div className="dashboard__add">
            <strong>Add project</strong>
            <div onClick={e => {
               setShowModal(true)
            }} className="pointer">
               <span className="add-project"></span>
            </div>
         </div>
         <div className="dashboard__projects">
            <div className="project center">
               <h3>Project 1</h3>
            </div>
            <div className="project center">
               <h3>Project 2</h3>
            </div>
            <div className="project center">
               <h3>Project 3</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
            <div className="project center">
               <h3>Project 5</h3>
            </div>
         </div>
      </div>
   )
}

export default Dashboard
