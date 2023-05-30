import React, { useState } from 'react'
import AddEmployeeModal from './AddEmployeeModal'

import './AddEmployeeModal'

function AddEmployeeButton(props) {

  const[addEmployeePopUp, setAddEmployeePopUp] = useState (false);

  return (
    <div>
        <button onClick={() => setAddEmployeePopUp(true)}>Add employee</button>

        <AddEmployeeModal 
            open = {addEmployeePopUp} 
            onClose = {() => setAddEmployeePopUp(false) } 
            setEmployeesList={props.setEmployeesList}
        >    
        </AddEmployeeModal>

    </div>
  )
}

export default AddEmployeeButton