import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './Employee.css'


function EmployeeInfoModal(props) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = () => {
    handleOpen()
    props.setPopUp(true)

  }

  const closeHandler = () => {
    console.log("Close handler")
    props.setPopUp(false)
    console.log(props.popUp)

  }

  console.log(props.popUp)
  
  if (!props.popUp) return null;

  return (
    <Box
      sx={{
        paddingTop: '0.5rem'
      }}
    >

      <Box
        sx={{
          display: 'flex',
          width: '20Rem'
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
          width: '20Rem'
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
          onClick={() => { deleteHandler() }}
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
            onClick={() => { props.setPopUp(false) }}
          >
            Close
          </Button>
        </Box>
  
      </Box>

      <Modal
        open={open}
      
      >
        <Box
          sx={{
            backgroundColor: 'white',
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
              onClick={() => props.onDelete()}
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
              }}
              color='error'
              variant='contained'
              onClick={handleClose}
            >
              No
            </Button>


          </Box>

        </Box>
      </Modal>
    </Box>
  )
}

export default EmployeeInfoModal;