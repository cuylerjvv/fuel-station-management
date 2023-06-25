import React from 'react'

import AddEmployeeForm from './AddEmployeeForm'
import './AddEmployeeModal.css'

function AddEmployeeModal(props) {

  return (
    <>
      <AddEmployeeForm
        setEmployeesList={props.setEmployeesList}
        onClose={props.onClose}
      />
    </>
  )
}

export default AddEmployeeModal