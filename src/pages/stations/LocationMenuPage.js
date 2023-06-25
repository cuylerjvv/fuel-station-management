import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getFirstdays } from '../../redux/firstdaysReducer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';

import './LocationMenuPage.css'

function LocationMenuPage() {

    console.log("Menu started")
    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);

    const { loading, firstdays, length } = useSelector((state) => state.firstdays)

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(getFirstdays(params.location));
            }
            catch (error) {
                console.log("Err")
            }
        }
        fetchData();
    }, [])


    console.log(loading)
    console.log(firstdays.length)
    let firstday;
    if (firstdays.length !== 0) {
        console.log(firstdays[length - 1].firstDay)
        firstday = firstdays[length - 1].firstDay;
    }

    console.log("Menu finished")

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
                                    {location} menu
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
                            </Typography> :

                            <Typography
                            >
                                Error
                            </Typography>
                    }
                </Breadcrumbs>
            </Container>

            {/* {loading ? (
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

            ) : ( */}
            <div
                className='bg'
            >
                <Container
                    maxWidth="xl"
                >

                    {
                        (params.location === 'dixie' || params.location === 'gazelle') ?

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
                                            color: 'black',
                                            backgroundColor: 'white',
                                            border: '1px solid #dd1d21',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                border: '1px solid #dd1d21',
                                                color: '#dd1d21'

                                            },
                                        }}
                                        color='error'
                                        component={Link}
                                        to={`/${params.location}/employees`}
                                    >
                                        Employees
                                    </Button>
                                    <Button
                                        sx={{
                                            color: 'black',
                                            backgroundColor: 'white',
                                            border: '1px solid #dd1d21',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                border: '1px solid #dd1d21',
                                                color: '#dd1d21'

                                            },
                                        }}
                                        color='error'
                                        component={Link}
                                        to={`shiftlist`}
                                    >
                                        Shift lists
                                    </Button>
                                    <Button
                                        sx={{
                                            color: 'black',
                                            backgroundColor: 'white',
                                            border: '1px solid #dd1d21',
                                            '&:hover': {
                                                backgroundColor: 'white',
                                                border: '1px solid #dd1d21',
                                                color: '#dd1d21'

                                            },
                                        }}
                                        color='error'
                                        component={Link}
                                        to={`wages/${firstday}`}
                                    >
                                        Wages
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
                                        to={`..`}
                                    >
                                        Go back...
                                    </Button>
                                </ButtonGroup>
                            </Box> : (
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
                                </Box>)
                    }
                </Container>
            </div>
            {/* )
            } */}


        </div >
    )
}

export default LocationMenuPage;