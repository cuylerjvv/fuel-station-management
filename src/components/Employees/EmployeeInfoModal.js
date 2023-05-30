import React from 'react'

import './Employee.css'

function EmployeeInfoModal(props) {

    if(!props.open) return null;

  return (
    <div className="employee-info">
        <h4>ID: {props.rid}</h4>
    </div>
  )
}

export default EmployeeInfoModal;