import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import { useHttpClient } from '../../Hooks/http-hook'

import './Employee.css'
import EmployeeInfoModal from './EmployeeInfoModal'

function Employee(props) {
  console.log("Employee rendered")
  const params = useParams();
  
  const { isLoading, sendRequest } = useHttpClient();
  const[employeeInfoPopUp, setEmployeeInfoPopUp] = useState(false)

  const onUpdate = async () => {
    alert("Update functionality is not yet available.");
  }

  const onDelete = async () => {

    const url = `http://localhost:5000/${params.location}/employees`;

    // try and catch error function should be added
    try {
      await sendRequest(
        url, 
        { method: 'DELETE', 
        body: JSON.stringify({ employeeId: props.id }), 
        headers: {
          'Content-Type': 'application/json'
        }
      });
      props.onDeleteEmployee(props.id);
      console.log(props.id )
    } catch (error) {
      // Handle error here
      console.log(error);
    }  
  }

  return (
    <li className="list-item">
      <div className="employee d-flex">
        <h4 className="employee-name">{props.name} {props.surname}</h4>
        <div className="buttons"> 
          <button className="button" onClick={() => {setEmployeeInfoPopUp(!employeeInfoPopUp)}}>Info</button>
          <button className="button" onClick={onUpdate}>Update</button>
          <button className="button" onClick={onDelete}>Delete</button>
        </div>
      </div>
      <EmployeeInfoModal 
        rid={props.rid}
        open={employeeInfoPopUp}
      >        
      </EmployeeInfoModal>
    </li>
  )
}

export default Employee;