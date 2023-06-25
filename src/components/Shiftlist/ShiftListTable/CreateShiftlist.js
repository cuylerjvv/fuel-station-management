import React, { useReducer, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import { Modal } from '@mui/material';

import '../../../pages/stations/LocationMenuPage.css'
import CreateShiftlistForm from './CreateShiftlistForm';
import './CreateShiftlist.css';

function CreateShiftlist() {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const daysArrayReducer = (days, action) => {
        switch (action.type) {
            case 'ADD':
                return [...days, action.payload];
            case 'EDIT':
        }
    }

    const weekReducer = (week, action) => {
        switch (action.type) {
            case 'CREATE':
                return [...week, action.payload];
            case 'EDIT':
        }
    }

    const [daysArray, setDaysArray] = useReducer(daysArrayReducer, [])
    console.dir((daysArray));
    const [week, setWeek] = useReducer(weekReducer, [])
    console.dir(week);

    const { loading, shiftlist } = useSelector((state) => state.shiftlist)
    const { firstdays, length } = useSelector((state) => state.firstdays)

    let year;
    let month;
    let day;
    let newDay;
    const [newDate, setNewDate] = useState(null);
    console.log(shiftlist)
    console.log(firstdays)

    const settingNewDate = (date) => {
        setNewDate(date)
    }

    useEffect(() => {
        console.log(length)
        if (length !== null) {
            if (length !== 0) {
                console.log("useEffect");
                const stringNumber = firstdays[length - 1].firstDay.toString();
                year = stringNumber.slice(0, 4)
                console.log(year)
                month = (stringNumber.slice(4, 6) - 1)
                console.log(month)
                day = stringNumber.slice(6, 8)
                console.log(day)
                const placeholderDate = new Date(year, month, day)
                newDay = placeholderDate.getDate() + 7;
                placeholderDate.setDate(newDay);
                settingNewDate(placeholderDate)
            } else {
                const date = new Date();
                const dayOfTheMonth = (date.getDate() - date.getDay() + 6);
                date.setDate(dayOfTheMonth);
                console.log(date)
                settingNewDate(date)
            }
        }
    }, [])

    const onAddDayClick = async (event, dayValue) => {
        event.preventDefault();
        setDaysArray({
            type: 'ADD',
            payload: dayValue
        });
        console.log(dayValue);
    }

    const createWeek = async (event, daysArray, date) => {
        event.preventDefault();

        let monthDate;
        let dayDate;

        if ((date.getMonth() + 1) < 10) {
            monthDate = '0' + (date.getMonth() + 1)
        } else {
            monthDate = (date.getMonth() + 1)
        }

        if ((date.getDate()) < 10) {
            dayDate = '0' + (date.getDate())
        } else {
            dayDate = (date.getDate())
        }

        const startDate = date.getFullYear() + '' + monthDate + '' + dayDate

        let weekValue = {
            startDate: startDate,
            days: daysArray
        }
        onSubmitWeek(event, weekValue)
    }

    const onSubmitWeek = async (event, weekValue) => {
        event.preventDefault();

        console.log("Shiftlist has been submitted.")

        try {
            const response = await fetch(`http://localhost:5000/${params.location}/shiftlist/create`, {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    startDate: weekValue.startDate,
                    days: weekValue.days
                })
            });

            const responseData = await response.json();
            console.log(responseData)

        } catch (err) {
            console.log(err);
        }

        console.log(weekValue)
        navigate(`/${params.location}`)
    }

    console.log(length)
    console.log(newDate)

    return (
        <div>
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
                            src={require('../../../images/shell.png')}
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
                            {location} shift list
                        </Typography>
                    </Box>
                </Box>
            </Container>
            {/* Breadcrumbs container */}
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
                        Shift lists
                    </Typography>
                    <Typography
                    >
                        Create
                    </Typography>
                </Breadcrumbs>
            </Container>
            {length !== null && newDate !== null ? (
                <div
                    className='bg'
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '5rem'
                        }}
                        maxWidth="xl"
                    >
                        <Box>
                            <Button
                                sx={{
                                    pointerEvents: 'none',
                                    backgroundColor: '#dd1d21',
                                    boxShadow: 'none',
                                    m: '0 1rem 0 1rem',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    },
                                }}

                                color='error'
                                variant='contained'

                            >
                                <h3>Week start date: {newDate.toDateString()}</h3>
                            </Button>
                        </Box>

                        <form className='week-form'>
                            <CreateShiftlistForm
                                onAddDay={onAddDayClick}
                                daysArray={daysArray}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '30vh',
                                    m: '0 auto'
                                }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: '#dd1d21',
                                        boxShadow: 'none',
                                        width: '100%',
                                        margin: '0.5rem 0 0.5rem 0',
                                        '&:hover': {
                                            boxShadow: 'none'
                                        },
                                        '&:disabled': {
                                            color: 'white',
                                            backgroundColor: '#dd1d21',
                                            opacity: '0.5'
                                        }
                                    }}
                                    color='error'
                                    variant='contained'
                                    // disabled={daysArray.length !== 7}
                                    // style={daysArray.length === 7 ? {} : { userSelect: "none" }}
                                    onClick={() => {
                                        if (daysArray.length === 7) {
                                            handleOpen();
                                        } else {
                                            alert("Ensure that all the days of the week have been submitted bofore saving the shift list.")
                                        }
                                    }}
                                    
                                >
                                    Save
                                </Button>
                                <Button
                                    sx={{
                                        backgroundColor: '#dd1d21',
                                        boxShadow: 'none',
                                        width: '100%',
                                        '&:hover': {
                                            boxShadow: 'none'
                                        },
                                    }}
                                    color='error'
                                    component={Link}
                                    variant='contained'
                                    to={`/${params.location}/shiftlist`}
                                >
                                    Go back...
                                </Button>
                            </Box>
                    
                            <Modal
                                open={open}

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
                                        Are you sure you want to save shift list?
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
                                            onClick={(event) => createWeek(event, daysArray, newDate)}
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
                        </form>
                    </Container>
                </div>
            ) : length === null && newDate === null ? (
                <div
                    className='bg'
                >
                    <Container
                        maxWidth="xl"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}

                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '90vh'
                            }}
                            justifyContent='center' 
                            alignItems='center'
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'radial-gradient(circle at top left, white, #999999)',
                                    border: '1px solid #dd1d21',
                                    borderRadius: '4px',
                                    marginTop: '5rem',
                                    padding: '2rem 3rem 2rem 3rem',
                                    // width: { xs: '40%' }
                                }}
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    textAlign='center'
                                >
                                    Something went wrong!
                                </Typography>
                                <Button
                                    sx={{
                                        backgroundColor: '#dd1d21',
                                        marginTop: '1.5rem',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            boxShadow: 'none'
                                        },
                                    }}
                                    color='error'
                                    component={Link}
                                    variant='contained'
                                    to={`/${params.location}`}
                                >
                                    Go back...
                                </Button>
                            </Box>
                        </Box>


                    </Container>
                </div>
            ) : (
                <div
                    className='bg'
                >
                    <Container
                        sx={{
                            p: '3rem',
                        }}
                        maxWidth="xl"
                    >
                        <Box
                            sx={{

                                display: 'flex',
                                justifyContent: 'center',

                            }}
                        >
                            <CircularProgress />
                        </Box>

                    </Container>
                </div>

            )}
        </div>

    )
}

export default CreateShiftlist;