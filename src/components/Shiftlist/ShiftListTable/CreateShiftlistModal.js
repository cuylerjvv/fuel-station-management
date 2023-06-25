import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Typography, Button, Modal } from '@mui/material';

import styles from './CreateShiftlistFormChild.module.css'
import './CreateShiftlistModal.css'

function CreateShiftlistModal(props) {

  const location = useParams().location
  console.log(location)
  // Make an request to that backend for list of employees
  // Copy list to another list. 
  // Use the copied list to do the assignment of the employees.

  const [employeesList, setEmployeesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const request = async () => {
      setIsLoading(true)
      const employeeObjects = []
      const response = await fetch(`http://localhost:5000/${location}/shiftlist/create`);
      const responseData = await response.json();
      responseData.employee.map((employee) => {
        const employeeObject = {
          name: employee.name,
          surname: employee.surname,
          id: employee._id
        }
        employeeObjects.push(employeeObject)
      })
      setEmployeesList(employeeObjects)
      console.log(employeeObjects)
      setIsLoading(false)
    }

    request();
  }, [])

  const onEmployeeSelect = (index) => {
    console.log("index clicked: " + index)
    const employee = employeesList[index]
    console.log(employee)
    console.log("Selected employee: " + employee.name + " " + employee.surname);
    props.updateAssigned(props.relevantDay, props.focusedInput, employee)
    props.onClose();
  }

  if (!props.modal) {
    return null;
  }

  return (
    <div className='overlay'>

      {props.daysArray.length === props.index ?
        <div className='modal'>
          <Button
            sx={{
              pointerEvents: 'none',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
              backgroundColor: '#dd1d21',
              boxShadow: 'none',

              m: '0 0 0 0',
              width: '100%',
              '&:hover': {
                boxShadow: 'none'
              },
            }}

            color='error'
            variant='contained'

          >
            Select employee
          </Button>

          <Box
            sx={{
              backgroundColor: 'white',
              padding: '0 0 0 4px'
            }}
          >
            {!isLoading &&
              employeesList.map((employee, index) => (
                <input
                  className={styles.select}
                  key={index}
                  value={`${employee.name} ${employee.surname}`}
                  readOnly={true}
                  disabled={props.assigned.some(row => row[props.relevantDay].name === employee.name) ? true : false}
                  style={props.assigned.some(row => row[props.relevantDay].name === employee.name) ? { userSelect: "none" } : {}}
                  onClick={() => (onEmployeeSelect(index))} >

                </input>
              ))}
          </Box>

          {
            employeesList.length === 0 ? (
              <Button
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid #dd1d21',
                  borderRadius: '0',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: 'white'
                  },
                }}
                color='error'
                variant='contained'

              >
                There are no employees available. Go back to main menu to create new employees.
              </Button>
            ) : (
              null
            )
          }

          <Button
            sx={{

              backgroundColor: '#dd1d21',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              boxShadow: 'none',

              width: '100%',
              m: '0 0 0 0',
              '&:hover': {
                boxShadow: 'none'
              },
            }}

            color='error'
            variant='contained'
            onClick={props.onClose}
          >
            Close
          </Button>
          {/* <button onClick={props.onClose}>Close</button> */}
        </div> : null}
    </div>

  )
}

export default CreateShiftlistModal;