import React, { useState } from 'react'
import AddEmployeeModal from './AddEmployeeModal'
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import './AddEmployeeModal'

function AddEmployeeButton(props) {

  return (
    
      <Box>
        <AddEmployeeModal
          open={props.addEmployeePopUp}
          setEmployeesList={props.setEmployeesList}
        >
        </AddEmployeeModal>

      </Box>
  )
}

export default AddEmployeeButton