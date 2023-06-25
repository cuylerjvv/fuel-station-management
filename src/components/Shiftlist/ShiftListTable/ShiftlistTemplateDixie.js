import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton, Button, ButtonGroup } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Divider } from '@mui/material';
import { Modal } from '@mui/material';
import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../../../pages/stations/LocationMenuPage.css'

function ShiftlistTemplateDixie(props) {

    console.log("Dixie template reached.")

    const params = useParams();

    const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const { loading, shiftlist } = useSelector((state) => state.shiftlist)
    const [shiftlistsListIndex, setShiftlistsListIndex] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const decrement = () => {
        console.log("decrement")
        setIsLoading(true)
        if (shiftlistsListIndex !== 0) {
            setShiftlistsListIndex((prevState) => prevState - 1)
        } else {
            alert("This is the last shiftlist.")
        }
        setIsLoading(false)
        console.log(shiftlistsListIndex)
    }

    const increment = () => {
        console.log("increment")
        setIsLoading(true)
        if (shiftlistsListIndex !== shiftlist.length - 1) {
            setShiftlistsListIndex((prevState) => prevState + 1)
        } else {
            alert("This is the latest shiftlist.")
        }
        setIsLoading(false)
        // console.log(shiftlistsListIndex)
    }

    useEffect(() => {
        console.log(shiftlist.length)
        if (shiftlist !== undefined && shiftlist.length !== 0) {
            setShiftlistsListIndex(shiftlist.length - 1)
            console.log("Setting shiftlist index")
        } else {
            console.log("Error with shiftlist index")
        }
        setIsLoading(false)
    }, [shiftlist])

    console.log(shiftlist)
    console.log(shiftlistsListIndex)

    let year;
    let month;
    let day;
    let date;

    if (shiftlistsListIndex !== undefined) {
        const stringNumber = shiftlist[shiftlistsListIndex].firstDay.toString();
        const type = typeof stringNumber;
        console.log(type)
        year = stringNumber.slice(0, 4)
        console.log(year)
        month = stringNumber.slice(4, 6)
        console.log(month)
        day = stringNumber.slice(6, 8)
        console.log(day)

        date = day + " " + months[month - 1] + " " + year
        console.log(date)

    }

    return (
        <Box
            sx={{
                paddingTop: '5rem'
            }}
        >
            {shiftlistsListIndex !== undefined ? (
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                >

                    <Box>
                        <Button
                            sx={{
                                backgroundColor: '#dd1d21',
                                boxShadow: 'none',
                                width: '22vh',
                                '&:hover': {
                                    boxShadow: 'none'
                                },
                            }}
                            color='error'
                            variant='contained'
                            startIcon={<ArrowLeftIcon />}
                            onClick={decrement}
                        >
                            Previous
                        </Button>
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
                            {shiftlist[shiftlistsListIndex] && shiftlist[shiftlistsListIndex].firstDay ? (
                                <h3>Week start date: {date}</h3>
                            ) : (
                                <h1>Default Value</h1>
                            )}
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: '#dd1d21',
                                boxShadow: 'none',
                                width: '22vh',
                                '&:hover': {
                                    boxShadow: 'none'
                                },
                            }}
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            color='error'
                            variant='contained'
                            endIcon={<ArrowRightIcon />}
                            onClick={increment}
                        >
                            Next
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            border: '1px solid #dd1d21',

                            m: '2rem'
                        }}
                    >
                        {shiftlist && shiftlist[shiftlistsListIndex].days.map((day, index) => (

                            // DAY BOX
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    border: '1px solid #dd1d21',
                                    margin: '0 ',
                                    width: '25vh'
                                }}
                            >
                                {/* WEEKDAY BOX */}
                                <Box
                                    sx={{
                                        backgroundColor: '#dd1d21',
                                        height: ' 2rem',
                                        padding: '0.5rem 0.25rem'
                                    }}
                                    key={weekdays[day.day]}
                                >
                                    {weekdays[day.day] ? (
                                        <Typography
                                            sx={{
                                                color: 'white'
                                            }}
                                            variant='h6'
                                            align='center'
                                        >
                                            {weekdays[day.day]}
                                        </Typography>

                                    ) : (
                                        <h3 className='h-three'>Default Day</h3>
                                    )}
                                </Box>

                                {/* DAYSHIFT CASHIER BOX */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}

                                >
                                    {day?.shifts?.dayshift?.cashier?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                            fontWeight="medium"
                                        >
                                            {day.shifts.dayshift.cashier.name} {day.shifts.dayshift.cashier.surname}
                                        </Typography>

                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.dayshift?.attendantOne?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.dayshift.attendantOne.name} {day.shifts.dayshift.attendantOne.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.dayshift?.attendantTwo?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.dayshift.attendantTwo.name} {day.shifts.dayshift.attendantTwo.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.dayshift?.attendantThree?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.dayshift.attendantThree.name} {day.shifts.dayshift.attendantThree.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />

                                {/* NIGHT SHIFT CASHIER BOX */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.nightshift?.cashier?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                            fontWeight="medium"
                                        >{day.shifts.nightshift.cashier.name} {day.shifts.nightshift.cashier.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.nightshift?.attendantOne?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.nightshift.attendantOne.name} {day.shifts.nightshift.attendantOne.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.nightshift?.attendantTwo?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.nightshift.attendantTwo.name} {day.shifts.nightshift.attendantTwo.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                                <Divider

                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        height: ' 2rem',
                                        padding: '0 0.25rem 0 0.25rem',
                                        alignItems: 'center'

                                    }}
                                >
                                    {day?.shifts?.dayshift?.attendantThree?.name ? (
                                        <Typography
                                            sx={{
                                                color: 'black',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '23vh',
                                            }}
                                        >{day.shifts.nightshift.attendantThree.name} {day.shifts.nightshift.attendantThree.surname}</Typography>
                                    ) : (
                                        <Typography></Typography>
                                    )}
                                </Box>
                            </Box>))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '30vh'
                        }}
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
                            component={Link}
                            variant='contained'
                            to={`/${params.location}/shiftlist/create`}
                        >
                            Create
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: '#dd1d21',
                                boxShadow: 'none',
                                margin: '0.5rem 0 0.5rem 0',
                                '&:hover': {
                                    boxShadow: 'none'
                                },
                            }}
                            color='error'
                            variant='contained'
                            onClick={() => (handleOpen())}
                        >
                            Delete
                        </Button>
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
                            to={`/${params.location}`}
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
                                Are you sure you want to delete shift list?
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
                                    onClick={() => (props.deleteHandler(shiftlist[shiftlistsListIndex]._id))}
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

                </Box>) : (
                
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    
                )
            }


        </Box >
    )
}

export default ShiftlistTemplateDixie; 