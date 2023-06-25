import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';

import CreateShiftlistFormChild from './CreateShiftlistFormChild';
import './CreateShiftlistForm.css'

function CreateShiftlistForm(props) {

  const location = useParams().location;
  const daysCount = 7;
  let numberOfInputs;

  if (location === 'dixie') {
    numberOfInputs = 8;
  } else if (location === 'gazelle'){
    numberOfInputs = 4;
  }

  const initialGrid = [];
  for (let i = 0; i < numberOfInputs; i++) {
    const row = Array(daysCount).fill(0);
    initialGrid.push(row);
  }

  const [assigned, setAssigned] = useState(initialGrid);

  const updateAssigned = (relevantDay, focusedInput, employee) => {
    setAssigned(prevState => {
      const updatedState = [...prevState];

      updatedState[focusedInput][relevantDay] = employee;
      return updatedState;
    });
    console.log("Employee saved: " + assigned[focusedInput][relevantDay].name);
  }

  const editDayHandler = (event) => {
    event.preventDefault();
    alert("Updating functionality is not yet available.")
  }
  const handleAddDay = (event, location, index) => {
    event.preventDefault()
    let value;

    switch (location) {
      case 'dixie':
        value = {
          day: index,
          shifts: {
            dayShift: {
              cashier: assigned[0][index],
              attendantOne: assigned[1][index],
              attendantTwo: assigned[2][index],
              attendantThree: assigned[3][index]
            },
            nightShift: {
              cashier: assigned[4][index],
              attendantOne: assigned[5][index],
              attendantTwo: assigned[6][index],
              attendantThree: assigned[7][index]
            }
          }
        };
        break;
      case 'gazelle':
        value = {
          day: index,
          shifts: {
            dayShift: {
              cashier: assigned[0][index],
              attendantOne: assigned[1][index],
              attendantTwo: assigned[2][index],
              attendantThree: assigned[3][index]
            }
          }
        }
        break;
    }
    console.log(value)
    props.onAddDay(event, value);

  }

  return (
    <Box
      sx={{
      
        display: 'inline-flex',
        backgroundColor: 'white',
        border: '1px solid #dd1d21',
        overflow: 'auto',
        m: '2rem'
        }}
      >
 
    {Array.from({ length: daysCount }, (_, index) => (
      <CreateShiftlistFormChild
        key={index}
        index={index}
        location={location}
        daysArray={props.daysArray}
        relevantDay={props.daysArray.length}
        assigned={assigned}
        updateAssigned={updateAssigned}
        editDayHandler={editDayHandler}
        handleAddDay={handleAddDay}
      ></CreateShiftlistFormChild>
    ))}
      </Box >
    )
  }

export default CreateShiftlistForm;