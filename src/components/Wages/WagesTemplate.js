import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import WageInfoModal from './WageInfoModal';

function WagesTemplate(props) {
  console.log("Wages template" + props.firstday)
  const location = useParams().location

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("handleOpen")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data } = useQuery(["Wages"], async () => {
    const response = await fetch(`http://localhost:5000/${location}/wages/${props.firstday}`);
    const data = await response.json();
    console.log(data)
    return data
  });

  console.log(data?.employeesWages)
  console.log((data?.employeesWages[4]?.cashierWage + data?.employeesWages[4]?.attendantWage))

  const wage = (data?.employeesWages[2]?.cashierWage + data?.employeesWages[2]?.attendantWage)
  const formattedWage = wage.toFixed(2)
  console.log(formattedWage)
  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        paddingTop: '2rem',
        width: { xs: '40%' },
        justifyContent: 'center'
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical button group"
      >

        <Button
          sx={{
            pointerEvents: 'none',
            backgroundColor: '#dd1d21',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none'
            },
          }}
          color='error'
          variant='contained'

        >
          Employees
        </Button>

        {(data?.employeesCounter?.length !== 0) ?

          data?.employeesWages.map((employee, index) => (
            <Button
              sx={{
                color: 'black',
                backgroundColor: 'white',
                display: 'flex',
                border: '1px solid #dd1d21',
                flexDirection: 'row',
                justifyContent: 'space-between',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#dd1d21',
                  // border: '1px solid #ef5350',
                  // borderBottom: '1px solid #ffffff'
                  border: '1px solid #dd1d21' 

                },

              }}
              key={index}
              
            >
              {employee.name} {employee.surname}:

              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem',

                }}
                align='left'
                color="Black"
              >R {(employee.cashierWage + employee.attendantWage).toFixed(2)}</Typography>
            </Button>
          ))

          : (
            <Button
              sx={{
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid #dd1d21',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                  backgroundColor: 'white'
                },
              }}
              color='error'
              variant='contained'

            >
              There are no employees available...
            </Button>
          )}

      </ButtonGroup>


      <Button
        sx={{
          backgroundColor: '#dd1d21',
          boxShadow: 'none',
          m: '1rem auto 0.5rem auto',
          width: '180px',
          '&:hover': {
            boxShadow: 'none'
          },
        }}
        color='error'
        onClick={() => handleOpen()}
        variant='contained'

      >
        Info
      </Button>

      {
        open ?
          <WageInfoModal
            open={open}
            handleClose={handleClose}
          ></WageInfoModal> :
          null
      }

      <Button
        sx={{
          backgroundColor: '#dd1d21',
          boxShadow: 'none',
          m: '0 auto',
          width: '180px',
          '&:hover': {
            boxShadow: 'none'
          },
        }}
        color='error'
        component={Link}
        variant='contained'
        to={`/${location}`}
      >
        Go back...
      </Button>


    </Box >
  )
}

export default WagesTemplate