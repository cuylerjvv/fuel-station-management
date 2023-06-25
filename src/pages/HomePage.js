
import { Link } from 'react-router-dom'
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import './stations/LocationMenuPage.css'

const locations = [
    { title: "dixie" },
    { title: "gazelle" }
]

function HomePage() {


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
                            src={require('../images/shell.png')}
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
                            Home
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

                </Breadcrumbs>
            </Container>

            <Container
                maxWidth="xl"
                className='bg'
                    
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 auto 0 auto',
                        paddingTop: '5rem',
                        width: { xs: '40%' }
                    }}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical button group"
                    >
                        {locations.map((location, index) => (
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
                                component={Link}
                                color={'error'}
                                to={`/${location.title}`}
                                key={location.title}
                            >
                                {(locations[index].title.charAt(0).toUpperCase() + locations[index].title.slice(1))}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Box>
            </Container>
        </div>
    )
}

export default HomePage;