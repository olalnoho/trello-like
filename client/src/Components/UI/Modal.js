import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from "./Backdrop"


const ModalOverlay = props => {
   const content = (
      <div className={`modal ${props.className}`}>
         <header className={props.headerClass}>
            {props.header}
            <span onClick={props.onCancel} className="modal__close">X</span>
         </header>
         <main className={props.contentClass}>
            {props.children}
         </main>
      </div>
   )

   return ReactDOM.createPortal(content, document.getElementById('modal-root'))
}

const Modal = props => {
   return (
      <>
         {props.show &&
            <>
               <Backdrop onClick={props.onCancel} />
               <ModalOverlay {...props} />
            </>
         }
      </>
   )
}

export default Modal