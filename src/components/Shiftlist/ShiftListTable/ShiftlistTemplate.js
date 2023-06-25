import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHttpClient } from '../../../Hooks/http-hook';
import { Box } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton, Button, ButtonGroup, Container, CircularProgress } from '@mui/material';
import { getShiftlists } from '../../../redux/shiftlistReducer';
import ShiftlistTemplateDixie from './ShiftlistTemplateDixie';
import ShiftlistTemplateGazelle from './ShiftlistTemplateGazelle';
import './ShiftlistTemplate.css'

function ShiftlistTemplate() {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);

    console.log("Shiftlist template: " + location)

    const [deleted, setDeleted] = useState([])

    const addDeleted = (id) => {
        const newArray = [...deleted, id];
        setDeleted(newArray);
    }

    const { isLoading, sendRequest } = useHttpClient();
    const navigate = useNavigate();

    const deleteHandler = async (id) => {
        alert("Week deleted: " + id)
        const url = `http://localhost:5000/${params.location}/shiftlist`;
        try {
            await sendRequest(
                url,
                {
                    method: 'DELETE',
                    body: JSON.stringify({ shiftlistId: id }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            addDeleted(id)
            navigate(`/`)
        } catch (error) {
            console.log(error);
        }
    }

    const { loading, firstdays, length } = useSelector((state) => state.firstdays)
    const { shiftlist } = useSelector((state) => state.shiftlist)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(getShiftlists(params.location));
            }
            catch (error) {
                console.log("Err")
            }
        }
        fetchData();
    }, [])

    console.log(length)

    return (

        <div >
            {params.location === 'dixie' ? (
                loading ? (
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
                ) : (length === null ?
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
                    :
                    (length === 0 ?
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
                                    There are currently no shift lists to display.
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
                                        to={`/${params.location}/shiftlist/create`}
                                    >
                                        Create
                                    </Button>
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
                        </Box> : (
                            <ShiftlistTemplateDixie
                                deleteHandler={deleteHandler}
                            />
                        )
                    ))) : (
                loading ? (
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
                ) : (length === null ?
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
                    :
                    (length === 0 ?
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
                                    There are currently no shift lists to display.
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
                                        to={`/${params.location}/shiftlist/create`}
                                    >
                                        Create
                                    </Button>
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
                        </Box> : (
                            <ShiftlistTemplateGazelle
                                deleteHandler={deleteHandler}
                            />
                        )
                    ))
            )}
        </div>

    );
}

export default ShiftlistTemplate;

