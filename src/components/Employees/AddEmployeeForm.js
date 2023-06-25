import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

import './AddEmployeeForm.css';

function AddEmployeeForm(props) {

    const location = useParams().location

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeSurname, setEmployeeSurname] = useState("");
    const [employeeNationality, setEmployeeNationality] = useState("");
    const [employeeRid, setEmployeeRid] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function onNameChangeHandler(event) {
        setEmployeeName(event.target.value)
    }

    function onSurnameChangeHandler(event) {
        setEmployeeSurname(event.target.value)
    }

    function onIdChangeHandler(event) {
        setEmployeeRid(event.target.value)
    }

    function onNationalityChangeHandler(event) {
        setEmployeeNationality(event.target.value)
    }

    const onSubmitHandler = async event => {
        event.preventDefault();
        console.log("form has been submitted");

        // MAKE A GET REQUEST AFTER SUBMITTING FORM TO GET THE LATEST EMPLOYEE ADDED ASWELL
        try {
            const response = await fetch(`http://localhost:5000/${location}/employees`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: employeeName,
                    surname: employeeSurname,
                    nationality: employeeNationality,
                    rid: employeeRid,
                })
            });

            const responseData = await response.json();
            console.log(responseData)

            props.onClose();



        } catch (err) {
            console.log(err);
            props.onClose();
            alert("Error creating employee. Please try again.")
        }



        const request = async () => {
            setIsLoading(true)
            const response = await fetch(`http://localhost:5000/${location}/employees`);
            const responseData = await response.json();
            console.log("Hooray!")
            props.setEmployeesList(responseData.employee)
            setIsLoading(false)
        }

        request();
    }

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                border: '1px solid #dd1d21',
                borderRadius: '4px',
                // padding: '0 2rem 0 2rem ',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography
                sx={{
                    backgroundColor: '#dd1d21',
                    color: 'white',
                    padding: '1rem 1rem 1rem 1rem',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px'
                }}
                variant='h5'
                fontWeight={500}
                fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
            >
                NEW EMPLOYEE DETAILS
            </Typography>

            <Box
                component="form"
                onSubmit={onSubmitHandler}
            >
                <Box
                    sx={{
                        padding: '0 2rem 0 2rem ',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '2rem 0 2rem 0'
                    }}
                >
                    <TextField
                        sx={{
                            margin: '0.3rem'
                        }}
                        id="outlined-basic"
                        label="Name"
                        type="text"
                        onChange={onNameChangeHandler}
                        variant="outlined"
                        color='error'
                    >
                    </TextField>
                    <TextField
                        sx={{
                            margin: '0.3rem'
                        }}
                        id="outlined-basic"
                        label="Surname"
                        onChange={onSurnameChangeHandler}
                        variant="outlined"
                        color='error'
                    >
                    </TextField>
                    <TextField
                        sx={{
                            margin: '0.3rem'
                        }}
                        id="outlined-basic"
                        label="Nationality"
                        onChange={onNationalityChangeHandler}
                        variant="outlined"
                        color='error'
                    >
                    </TextField>
                    <TextField
                        sx={{
                            margin: '0.3rem'
                        }}
                        id="outlined-basic"
                        label="ID-number"
                        onChange={onIdChangeHandler}
                        variant="outlined"
                        color='error'
                    >
                    </TextField>


                </Box>
                <Button
                    sx={{
                        backgroundColor: '#dd1d21',
                        boxShadow: 'none',

                        '&:hover': {
                            boxShadow: 'none'
                        },
                    }}
                    // type="submit"
                    onClick={handleOpen}
                    color='error'
                    variant='contained'
                    fullWidth
                >
                    Submit new employee
                </Button>
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
                            Are you sure you want to submit new employee?
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
                                onClick={(event) => onSubmitHandler(event)}
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

        </Box>
    )
}

export default AddEmployeeForm;