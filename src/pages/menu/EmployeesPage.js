import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import AddEmployeeModal from '../../components/Employees/AddEmployeeModal';
import Employee from '../../components/Employees/Employee';
import AddEmployeeButton from '../../components/Employees/AddEmployeeButton';
import '../stations/LocationMenuPage.css'
import './EmployeesPage.css'

const EmployeesPage = () => {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);

    const [employeesList, setEmployeesList] = useState([])
    const [addEmployeePopUp, setAddEmployeePopUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    // request is in an useEffect hook because it should not rerender when the page rerenders. The dependancies are empty because it should only run on page load and not again. 
    useEffect(() => {
        const request = async () => {
            setIsLoading(true)
            const response = await fetch(`http://localhost:5000/${params.location}/employees`);
            const responseData = await response.json();
            console.log(responseData);
            setEmployeesList(responseData.employee)
            console.log(responseData.employee)
            console.log(employeesList)
            setIsLoading(false)
        }

        request();
    }, [])

    // deletes employee on screen
    const onDeleteEmployee = (id) => {
        setEmployeesList(prevList =>
            prevList.filter(employee => employee.id !== id)
        );
    };

    console.log(employeesList)
    return (
        <div className="employees-page">
            <Container
                sx={{

                    // background: '#dd1d21',
                    borderBottom: '0.5px solid #dd1d21',
                    background: 'linear-gradient(to right, #FFffff, #999999)'
                }}
                maxWidth="xl"
            >
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Box
                        sx={{
                            margin: '2rem'
                        }}
                    >
                        <img
                            src={require('../../images/shell.png')}
                            alt='shell-logo'
                            className='shell-logo'
                        ></img>
                    </Box>
                    <Box
                        sx={{
                            padding: '4rem 0 0 2rem'
                        }}
                    >
                        <Typography
                            align='center'
                            variant='h3'
                            color="#dd1d21"
                        >
                            {location} employees
                        </Typography>
                    </Box>
                </Box>


            </Container>
            <Container
                sx={{
                    backgroundColor: '#dd1d21',
                    padding: '0.5Rem'
                }}
                maxWidth="xl"
            >
                <Breadcrumbs
                    sx={{
                        color: "#ffffff"
                    }}
                    separator='>'
                    aria-label="breadcrumb"
                >
                    <Typography
                    >
                        Home
                    </Typography>
                    <Typography
                    >
                        {location}
                    </Typography>
                    <Typography
                    >
                        Employees
                    </Typography>

                    {addEmployeePopUp ?
                        <Typography
                        >
                            Create
                        </Typography> : " "}
                </Breadcrumbs>
            </Container>

            {isLoading ? (
                <div
                    className='bg'
                >
                    <Container
                        maxWidth="xl"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: 'auto',
                                paddingTop: '5rem',
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    </Container>
                </div>
            ) : (addEmployeePopUp ? (
                <div
                    className='bg'
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: 'auto',
                            paddingTop: '5rem',
                            width: { xs: '40%' }
                        }}
                    >
                        <AddEmployeeModal
                            addEmployeePopUp={addEmployeePopUp}
                            setEmployeesList={setEmployeesList}
                            onDeleteEmployee={onDeleteEmployee}
                            onClose={() => setAddEmployeePopUp(false)}
                        />
                        <Button
                            sx={{
                                backgroundColor: '#dd1d21',
                                boxShadow: 'none',
                                marginTop: '1rem',
                                '&:hover': {
                                    boxShadow: 'none'
                                },
                            }}
                            color='error'
                            variant='contained'
                            onClick={() => setAddEmployeePopUp(false)}
                        >
                            Go back...
                        </Button>
                    </Box>
                </div>
            ) : (
                <div
                    className='bg'
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: 'auto',
                            paddingTop: '5rem',
                            width: { xs: '40%' }
                        }}
                    >
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="vertical button group"
                        >
                            <Button
                                sx={{
                                    backgroundColor: '#dd1d21',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    },
                                }}
                                color='error'
                                variant='contained'
                                onClick={() => setAddEmployeePopUp(true)}
                            >
                                Create employee
                            </Button>


                            {(!isLoading && employeesList) ? ((employeesList.length !== 0) ? (
                                employeesList.map((employeeObject, index) => (

                                    <Employee
                                        key={index}
                                        location={params.location}
                                        id={employeeObject.id}
                                        nationality={employeeObject.nationality}
                                        rid={employeeObject.rid}
                                        name={employeeObject.name}
                                        surname={employeeObject.surname}
                                        onDeleteEmployee={onDeleteEmployee}
                                    />

                                ))) : (
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
                            )) : null}


                            <Button
                                sx={{
                                    backgroundColor: '#dd1d21',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    },
                                }}
                                color='error'
                                component={Link}
                                variant='contained'
                                to={`/${params.location}/`}
                            >
                                Go back...
                            </Button>
                        </ButtonGroup>
                    </Box>
                </div>
            ))}

        </div>
    );
}

export default EmployeesPage;
