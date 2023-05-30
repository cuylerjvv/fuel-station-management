import React from 'react'

import AddEmployeeForm from './AddEmployeeForm'
import './AddEmployeeModal.css'

function AddEmployeeModal(props) {

  if(!props.open) return null

  return (
    <>
        <div className="overlay"></div>
        <div className="modal">
                <AddEmployeeForm 
                  onClose={props.onClose}
                  setEmployeesList={props.setEmployeesList}
                />              
        </div>
    </>
  )
}

export default AddEmployeeModal