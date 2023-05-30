import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import './AddEmployeeForm.css';

function AddEmployeeForm(props) {

    const params = useParams()

    const[employeeName, setEmployeeName] = useState("");
    const[employeeSurname, setEmployeeSurname] = useState("");
    const[employeeRid, setEmployeeRid] = useState("");

    function onNameChangeHandler (event) {
        setEmployeeName(event.target.value)
    }

    function onSurnameChangeHandler (event) {
        setEmployeeSurname(event.target.value)
    }
    
    function onIdChangeHandler (event) {
        setEmployeeRid(event.target.value)
    }

    const onSubmitHandler = async event => {
        event.preventDefault();
        console.log("form has been submitted");

        // MAKE A GET REQUEST AFTER SUBMITTING FORM TO GET THE LATEST EMPLOYEE ADDED ASWELL
        try {
            const response = await fetch(`http://localhost:5000/${params.location}/employees`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                name: employeeName,
                surname: employeeSurname, 
                rid: employeeRid,
            })           
        });
        
        const responseData = await response.json();
        console.log(responseData)

        } catch (err) {
            console.log(err);
        }
        
        // add loading screen here

        props.onClose(); 

        const request = async () => {
            // setIsLoading(true)
            const response = await fetch(`http://localhost:5000/${params.location}/employees`);
            const responseData = await response.json();
            console.log("Hooray!")
            props.setEmployeesList(responseData.employee)
            // setIsLoading(false)
        }
        
        request();
    }
    
  return (
    <form onSubmit={onSubmitHandler}>
        <div>
            <h3>New Employee details:</h3>
            <div className='form'>
                <label className='input'>Name:</label>
                <input className='input' type="text" onChange={onNameChangeHandler}/>
            </div>
            <div className='form'>
                <label>Surname:</label>
                <input type="text" onChange={onSurnameChangeHandler}/>
            </div>
            <div className='form'>
                <label>ID:</label>
                <input onChange={onIdChangeHandler}/>
            </div >
            <div className='button-div'> 
                <button type="submit">Create employee</button>
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    </form>
  )
}

export default AddEmployeeForm;