import React, { useState } from 'react'
import Modal from '../UI/Modal'

const Dashboard = () => {
   const [showModal, setShowModal] = useState(false)
   return (
      <div className="container dashboard">
         <Modal show={showModal} onCancel={e => setShowModal(false)}>
            Hello
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
