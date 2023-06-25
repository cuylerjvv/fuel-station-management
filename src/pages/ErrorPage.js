import { Link } from 'react-router-dom'
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function ErrorPage() {
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
                            Error
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
                        Error
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

            </Container>
        </div>

    )
}

export default ErrorPage;