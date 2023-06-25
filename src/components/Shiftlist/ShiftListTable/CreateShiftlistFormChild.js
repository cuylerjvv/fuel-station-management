import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton, Button, ButtonGroup } from '@mui/material';
import { Divider } from '@mui/material';
import { Modal } from '@mui/material';

import styles from './CreateShiftlistFormChild.module.css'
import CreateShiftlistModal from './CreateShiftlistModal';

function CreateShiftlistFormChild(props) {

    const params = useParams();
    const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const [focusedInput, setFocusedInput] = useState(0);
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const submitDayHandler = (event, location, index) => {
        props.handleAddDay(event, location, index)
        setOpen(false);
    }

    const handleFocus = (focusedInput) => {
        setFocusedInput(focusedInput)
        console.log("Focused input :" + focusedInput)
        setModal(true);
    }

    const onModalClose = () => {
        setModal(false);
    }

    return (
        <div>

            <CreateShiftlistModal
                index={props.index}
                modal={modal}
                daysArray={props.daysArray}
                focusedInput={focusedInput}
                assigned={props.assigned}
                updateAssigned={props.updateAssigned}
                relevantDay={props.relevantDay}
                onClose={onModalClose}
            ></CreateShiftlistModal>



            {/* Day Box */}
            <Box
                sx={{
                    border: '1px solid #dd1d21',
                    // width: '25vh'
                }}
            >
                {/* Weekday Box */}
                <Box
                    sx={{
                        backgroundColor: '#dd1d21',
                        height: ' 2rem',
                        padding: '0.5rem 0.25rem'
                    }}
                    key={weekdays[props.index]}
                >
                    <Typography
                        sx={{
                            color: 'white'
                        }}
                        variant='h6'
                        align='center'
                    >
                        {weekdays[props.index]}
                    </Typography>

                </Box>

                {
                    params.location === 'dixie' ?

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                            key={props.index}
                        >
                            <input
                                className={styles.cashier}
                                type="text"
                                readOnly={true}
                                value={props.assigned[0][props.index].name !== undefined ? props.assigned[0][props.index].name + " " + props.assigned[0][props.index].surname : ""}
                                placeholder="Day shift cashier..."
                                onFocus={() => { handleFocus(0) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                                required
                            />
                            <Divider
                                className={styles.divider}
                            ></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[1][props.index].name !== undefined ? props.assigned[1][props.index].name + " " + props.assigned[1][props.index].surname : ""}
                                onFocus={() => { handleFocus(1) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                                required
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[2][props.index].name !== undefined ? props.assigned[2][props.index].name + " " + props.assigned[2][props.index].surname : ""}
                                onFocus={() => { handleFocus(2) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[3][props.index].name !== undefined ? props.assigned[3][props.index].name + " " + props.assigned[3][props.index].surname : ""}
                                onFocus={() => { handleFocus(3) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.cashier}
                                type="text"
                                readOnly={true}
                                value={props.assigned[4][props.index].name !== undefined ? props.assigned[4][props.index].name + " " + props.assigned[4][props.index].surname : ""}
                                onFocus={() => { handleFocus(4) }}
                                placeholder="Night shift cashier..."
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[5][props.index].name !== undefined ? props.assigned[5][props.index].name + " " + props.assigned[5][props.index].surname : ""}
                                onFocus={() => { handleFocus(5) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[6][props.index].name !== undefined ? props.assigned[6][props.index].name + " " + props.assigned[6][props.index].surname : ""}
                                onFocus={() => { handleFocus(6) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <input
                                className={styles.attendant}
                                type="text"
                                readOnly={true}
                                value={props.assigned[7][props.index].name !== undefined ? props.assigned[7][props.index].name + " " + props.assigned[7][props.index].surname : ""}
                                onFocus={() => { handleFocus(7) }}
                                disabled={props.index === props.daysArray.length ? false : true}
                            />
                            <Divider className={styles.divider}></Divider>
                            <Button
                                sx={{
                                    backgroundColor: '#dd1d21',
                                    boxShadow: 'none',
                                    m: '4px',
                                    borderRadius: '0',
                                    width: '90%',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    },
                                }}
                                color='error'
                                variant='contained'
                                onClick={() => (handleOpen())}
                                disabled={props.index === props.daysArray.length ? false : true}
                            >
                                Submit day
                            </Button>
                        </Box> : (params.location === 'gazelle') ? (

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}
                                key={props.index}
                            >
                                <input
                                    className={styles.cashier}
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[0][props.index].name !== undefined ? props.assigned[0][props.index].name + " " + props.assigned[0][props.index].surname : ""}
                                    placeholder="Day shift cashier..."
                                    onFocus={() => { handleFocus(0) }}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                    required
                                />
                                <Divider
                                    className={styles.divider}
                                ></Divider>
                                <input
                                    className={styles.attendant}
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[1][props.index].name !== undefined ? props.assigned[1][props.index].name + " " + props.assigned[1][props.index].surname : ""}
                                    onFocus={() => { handleFocus(1) }}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                    required
                                />
                                <Divider className={styles.divider}></Divider>
                                <input
                                    className={styles.attendant}
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[2][props.index].name !== undefined ? props.assigned[2][props.index].name + " " + props.assigned[2][props.index].surname : ""}
                                    onFocus={() => { handleFocus(2) }}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                />
                                <Divider className={styles.divider}></Divider>
                                <input
                                    className={styles.attendant}
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[3][props.index].name !== undefined ? props.assigned[3][props.index].name + " " + props.assigned[3][props.index].surname : ""}
                                    onFocus={() => { handleFocus(3) }}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                />
                                <Divider className={styles.divider}></Divider>
                                <Button
                                    sx={{
                                        backgroundColor: '#dd1d21',
                                        boxShadow: 'none',
                                        m: '4px',
                                        borderRadius: '0',
                                        width: '90%',
                                        '&:hover': {
                                            boxShadow: 'none'
                                        },
                                    }}
                                    color='error'
                                    variant='contained'
                                    onClick={() => (handleOpen())}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                >
                                    Submit day
                                </Button>
                            </Box>
                        )
                            : null
                }
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
                        Are you sure you want to submit day?
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
                            onClick={(event) => submitDayHandler(event, props.location, props.index)} disabled={props.index === props.daysArray.length ? false : true}
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




        </div>
    )
}

export default CreateShiftlistFormChild;