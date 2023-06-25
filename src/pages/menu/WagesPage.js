import { useState, useReducer, useEffect } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WagesTemplate from '../../components/Wages/WagesTemplate';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import '../stations/LocationMenuPage.css'


const indexReducer = (state, action) => {
    switch (action.type) {
        case "PREV":
            return (state - 1)

        case "NEXT":
            return (state + 1)

        default:
            return state
    }
}

function WagesPage() {

    const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const params = useParams()
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    const firstDay = useParams().firstday
    console.log("Start reached " + firstDay)

    const [allowNav, setAllowNav] = useState(false)

    const { loading, firstdays, length } = useSelector((state) => state.firstdays)

    const INITIAL_STATE = (length - 1)

    const [index, dispatch] = useReducer(indexReducer, INITIAL_STATE);

    const navigate = useNavigate()

    const prevWages = () => {
        if (index !== 0) {
            console.log(index)
            dispatch({ type: "PREV" })
            setAllowNav(true)
        } else {
            alert("This is the last available wages.")
        }
    }

    const nextWages = () => {
        if (index < length - 1) {
            console.log(index)
            dispatch({ type: "NEXT" })
            setAllowNav(true)
        } else {
            alert("This is the latest available wages.")
        }
    }

    useEffect(() => {
        const allowNavHandler = () => {
            if (allowNav) {
                const url = `/${params.location}/wages/${firstdays[index].firstDay}`
                navigate(url)
                console.log("Navigating")
                setAllowNav(false)
                console.log("Navigating")
            }
        }

        allowNavHandler()
    }, [index])

    console.log(allowNav)
    console.log("Finished reached")

    let year;
    let month;
    let day;
    let date;

    if (firstdays[index]?.firstDay !== undefined) {
        const stringNumber = firstdays[index]?.firstDay.toString();
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
        <div >
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
                        {
                            (params.location === 'dixie' || params.location === 'gazelle') ?
                                <Typography
                                    align='center'
                                    variant='h3'
                                    color="#dd1d21"
                                >
                                    {location} wages
                                </Typography> :

                                <Typography
                                    align='center'
                                    variant='h3'
                                    color="#dd1d21"
                                >
                                    Error
                                </Typography>
                        }
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
                    {
                        (params.location === 'dixie' || params.location === 'gazelle') ?
                            <Typography
                            >
                                {location}
                            </Typography>
                            :

                            <Typography
                            >
                                Error
                            </Typography>
                    }
                    {
                        (params.location === 'dixie' || params.location === 'gazelle') ?
                            <Typography
                            >
                                Wages
                            </Typography>
                            :

                            null
                    }



                </Breadcrumbs>
            </Container>


            {
                (params.location === 'dixie' || params.location === 'gazelle') ? (
                    length !== null ?
                        (length === 0 ?
                            <div
                                className='bg'
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',

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

                                            m: '5rem auto 0 auto',
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
                                            There are currently no shift lists to display wages for.
                                            <br></br>
                                            Go back to main menu to create new shift lists.
                                        </Typography>

                                        <Box
                                            sx={{
                                                width: '80%',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around'
                                            }}
                                        >
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
                                </Box>
                            </div> : (
                                loading || allowNav ? <p>loading...</p> : (
                                    <div
                                        className='bg'
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: '5rem'
                                            }}
                                        >
                                            <Button
                                                sx={{
                                                    backgroundColor: '#dd1d21',
                                                    boxShadow: 'none',
                                                    width: '9rem',
                                                    '&:hover': {
                                                        boxShadow: 'none'
                                                    },
                                                }}
                                                color='error'
                                                variant='contained'
                                                startIcon={<ArrowLeftIcon />}
                                                onClick={() => (prevWages())}
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
                                                <h3>Week start date: {date}</h3>
                                            </Button>
                                            <Button
                                                sx={{
                                                    backgroundColor: '#dd1d21',
                                                    boxShadow: 'none',
                                                    width: '9rem',
                                                    '&:hover': {
                                                        boxShadow: 'none'
                                                    },
                                                }}
                                                color='error'
                                                variant='contained'
                                                endIcon={<ArrowRightIcon />}
                                                onClick={() => (nextWages())}
                                            >
                                                Next
                                            </Button>
                                        </Box>

                                        <WagesTemplate firstday={firstdays[index]?.firstDay} />

                                    </div>
                                ))) :
                        <div
                            className='bg'
                        >

                            <Box
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
                        </div>) :

                    <div
                        className='bg'
                    >
                        <Box
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
                                    to={`/`}
                                >
                                    Go back...
                                </Button>
                            </Box>
                        </Box>
                    </div>
            }

                    </div>
    );
}

            export default WagesPage;
