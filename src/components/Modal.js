import React from 'react'
import "./css/modal.css"

function Modal({children}) {
  return (
   <div className="modal__back">
    <div className="modal">
        {children}
        
    </div>
   </div>
  )
}

export default Modal