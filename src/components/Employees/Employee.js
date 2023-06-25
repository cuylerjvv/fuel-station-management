import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';

import { useHttpClient } from '../../Hooks/http-hook'

import './Employee.css'

function Employee(props) {
  console.log("Employee rendered")
  const params = useParams();

  const { isLoading, sendRequest } = useHttpClient();
  const [employeeInfoPopUp, setEmployeeInfoPopUp] = useState(false)

  const [open, setOpen] = useState(false);

  const openInfoHandler = () => {
    if(employeeInfoPopUp === false) {
      setEmployeeInfoPopUp(true)
    }
    console.log(employeeInfoPopUp)
  };

  const closeInfoHandler = () => {
    if(employeeInfoPopUp === true) {
      setEmployeeInfoPopUp(false)
    }
    console.log(employeeInfoPopUp)
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = () => {
    handleOpen()
    setEmployeeInfoPopUp(true)

  }

  const onDelete = async () => {

    const url = `http://localhost:5000/${params.location}/employees`;

    // try and catch error function should be added
    try {
      await sendRequest(
        url,
        {
          method: 'DELETE',
          body: JSON.stringify({ employeeId: props.id }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      props.onDeleteEmployee(props.id);
      console.log(props.id)
    } catch (error) {
      console.log(error);
    }

    handleClose()
  }

  console.log(employeeInfoPopUp)

  return (

    <Button

      sx={{ 
        color: 'black',
        backgroundColor: 'white',
        display: 'flex',
        border: '1px solid #dd1d21',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: 'white',
          color: '#dd1d21',
          // border: '1px solid #ef5350',
          // borderBottom: '1px solid #ffffff'
          border: '1px solid #dd1d21'

        },
      }}
      color='error'
      key={props.index}
      onClick={() => { openInfoHandler() }}
    >
      {props.name} {props.surname}

      {
        employeeInfoPopUp ?
          <Box
            sx={{
              padding: '0.5rem 1rem 0 1rem'
            }}
          >

            <Box
              sx={{
                display: 'flex',
                width: '16Rem'
              }}
              justifyContent='space-between'
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem',

                }}
                align='left'
                color="Black"
              >
                Nationality:
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
                align='left'
                color="Black"
              >
                {props.nationality}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '16Rem'
              }}
              justifyContent='space-between'
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
                align='left'
                color="Black"
              >
                ID:
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
                align='left'
                color="Black"
              >
                {props.rid}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                padding: '0.5rem 0 1rem 0'
              }}
              alignItems="center"
              justifyContent='space-evenly'
            >
              <Button
                sx={{
                  backgroundColor: '#dd1d21',

                  borderRadius: '4px',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none'
                  },
                  '&(:last-of-type)': {
                    borderRadius: '4px',
                  },
                }}
                variant="contained"
                color="error"
                size="small"
              onClick={() => { deleteHandler()}}
              >
                Delete employee
              </Button>
              <Box>
                <Button
                  sx={{
                    backgroundColor: '#dd1d21',
                    MarginTop: '0',
                    borderRadius: '4px',
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: 'none'
                    },
                  }}
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => {closeInfoHandler()}}
                >
                  Close
                </Button>
              </Box>

            </Box>

            <Modal
            open={open}
            onClose={handleClose}
            >
              <Box
                sx={{
                  
                  background: 'radial-gradient(circle at top left, white, #999999)',
                  border: '1px solid #dd1d21',
                  borderRadius: '4px',
                  margin: '40vh auto',
                  padding: '2rem 1rem 2rem 1rem',
                  width: { xs: '40%' }
                }}

              >
                <Typography
                  variant="h6"
                  component="h2"
                  textAlign='center'
                >
                  Are you sure you want to delete the employee?
                </Typography>
                <Box
                  sx={{
                    marginTop: '1.5rem'
                  }}
                  display='flex'
                  justifyContent='space-evenly'
                >

                  <Button
                    sx={{
                      backgroundColor: '#dd1d21',
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: 'none'
                      },
                      width: '20%'
                    }}
                    color='error'
                    variant='contained'
                    type='submit'
                  onClick={() => onDelete()}
                  >
                    Yes
                  </Button>

                  { }
                  <Button
                    sx={{
                      backgroundColor: '#dd1d21',
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: 'none'
                      },
                      width: '20%'
                      
                    }}S
                    color='error'
                    variant='contained'
                  onClick={() => {handleClose()}}
                  >
                    No
                  </Button>


                </Box>

              </Box>
            </Modal>
          </Box> : null
      }


    </Button>

  )
}

export default Employee;