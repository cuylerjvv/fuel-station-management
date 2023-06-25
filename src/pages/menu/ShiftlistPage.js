import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ShiftlistTemplate from '../../components/Shiftlist/ShiftListTable/ShiftlistTemplate';

import './ShiftListPage.css'
import '../stations/LocationMenuPage.css'


function ShiftlistPage() {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    const date = new Date();
    const dayOfTheMonth = (date.getDate() - date.getDay() - 1);
    date.setDate(dayOfTheMonth);
    const firstDayOfTheWeekDate = date.getDate();

    console.log("shiftlist rendered");

    return (
        <div className=' shiftList'>
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
                                Shift lists
                            </Typography>
                            :

                            null
                    }
                </Breadcrumbs>
            </Container>
            <div
                className='bg'

            >
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}

                >
                    {
                        (params.location === 'dixie' || params.location === 'gazelle') ?
                            <ShiftlistTemplate /> :
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
                    }
                </Container>

            </div>

        </div>
    );
}

export default ShiftlistPage;
