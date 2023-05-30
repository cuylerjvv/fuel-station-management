import React, { useState } from 'react';

import './CreateShiftlistModal.css'

function CreateShiftlistModal(props) {

  // Make an request to that backend for list of employees
  // Copy list to another list. 
  // Use the copied list to do the assignment of the employees.
  const DUMMY_EMPLOYEES = [
    {
      name: "Tendai",
      surname: "Katerere",
      id: "123"
    },
    {
      name: "Calvin",
      surname: "Calvin",
      id: "234"
    },
    {
      name: "Toto",
      surname: "Toto",
      id: "345"
    },
    {
      name: "Sindile",
      surname: "Sindile",
      id: "456"
    }
  ]

  const [NEW_LIST, setNewList] = useState(DUMMY_EMPLOYEES);

  // Use Reducer to have multiple cases to set relevant input to relevant employee
  const onEmployeeSelect = (index) => {
    console.log("index clicked: " + index)
    const employee = NEW_LIST[index].name
    console.log("Selected employee: " + employee);
    props.updateAssigned(props.relevantDay, props.focusedInput, employee)
    props.onClose();
  }

  if (!props.modal) {
    return null;
  }

  return (
    <div>
      {props.daysArray.length === props.index ?
        <div className='modal'>
          <h3>Employees</h3>
          <div >
              {NEW_LIST.map((employee, index) => (
                <input 
                  key={index} 
                  value={`${employee.name}`} 
                  readOnly={true} 
                  disabled={props.assigned.some(row => row[props.relevantDay] === employee.name) ? true : false} 
                  style={props.assigned.some(row => row[props.relevantDay] === employee.name) ? { userSelect: "none" } : {}} 
                  onClick={() => (onEmployeeSelect(index))} >

                </input>
              ))}
          </div>
          <button onClick={props.onClose}>Close</button>
        </div> : null}
    </div>

  )
}

export default CreateShiftlistModal;