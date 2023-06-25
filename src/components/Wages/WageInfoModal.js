import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

function WageInfoModal(props) {

    return (
        <Modal
            open={props.open}
        >
            <Box
                sx={{

                    background: 'white',
                    border: '1px solid #dd1d21',
                    borderRadius: '4px',
                    margin: '40vh auto',
                    padding: '0 0 2rem 0',
                    width: { xs: '40%' }
                }}

            >
                <Button
                    sx={{
                        pointerEvents: 'none',
                        backgroundColor: '#dd1d21',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                        width: '100%',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none'
                        },
                    }}
                    color='error'
                    variant='contained'

                >
                    Info
                </Button>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1rem 2rem 0 2rem'
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        textAlign='center'
                    >
                        Cashier hourly rate:
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        textAlign='center'
                    >
                        R37.99
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1rem 2rem 0 2rem'
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        textAlign='center'
                    >
                        Attendant hourly rate:
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        textAlign='center'
                    >
                        R36.10
                    </Typography>
                </Box>


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
                            width: '120px'

                        }} S
                        color='error'
                        variant='contained'
                        onClick={() => { props.handleClose() }}
                    >
                        Close
                    </Button>


                </Box>

            </Box>
        </Modal>
    )
}

export default WageInfoModal