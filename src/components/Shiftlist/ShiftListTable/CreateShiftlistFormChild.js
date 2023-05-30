import React, { useState } from 'react'

import CreateShiftlistModal from './CreateShiftlistModal';

function CreateShiftlistFormChild(props) {

    const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const [focusedInput, setFocusedInput] = useState(0);
    const [modal, setModal] = useState(false);

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
                dsCashierChange={props.dsCashierChange}
                dsAttendantOneChange={props.dsAttendantOneChange}
                modal={modal}
                daysArray={props.daysArray}
                focusedInput={focusedInput}
                assigned={props.assigned}
                updateAssigned={props.updateAssigned}
                relevantDay={props.relevantDay}
                onClose={onModalClose}
            ></CreateShiftlistModal>
            {props.location === 'dixie' ? (
                <div className='shiftlist-right-div' key={weekdays[props.index]} >

                    <div className='day-div'>
                        <div className='date-div'>
                            <div><h3>{weekdays[props.index]}</h3></div>
                        </div>

                        <div className='day-shift-div'>
                            <div className='cashier-div' key={props.index}>
                                <input
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[0][props.index] || ""}
                                    placeholder="Day shift cashier..."
                                    onFocus={() => { handleFocus(0) }}
                                    disabled={props.index === props.daysArray.length ? false : true}
                                    required
                                />
                            </div>
                            <div className='attendees-div'>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[1][props.index] || ""}
                                        onFocus={() => { handleFocus(1) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                        required
                                    />
                                </div>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[2][props.index] || ""}
                                        onFocus={() => { handleFocus(2) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[3][props.index] || ""}
                                        onFocus={() => { handleFocus(3) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='night-shift-div'>
                            <div className='cashier-div'>
                                <input
                                    type="text"
                                    readOnly={true}
                                    value={props.assigned[4][props.index] || ""}
                                    onFocus={() => { handleFocus(4) }}
                                    placeholder="Night shift cashier..."
                                    disabled={props.index === props.daysArray.length ? false : true}
                                />
                            </div>
                            <div className='attendees-div'>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[5][props.index] || ""}
                                        onFocus={() => { handleFocus(5) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[6][props.index] || ""}
                                        onFocus={() => { handleFocus(6) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                                <div className='attendee-div'>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        value={props.assigned[7][props.index] || ""}
                                        onFocus={() => { handleFocus(7) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={(event) => props.handleAddDay(event, props.location, props.index)} disabled={props.index === props.daysArray.length ? false : true}>Add day</button>
                    <button onClick={(event) => props.editDayHandler(event)} disabled={props.index < props.daysArray.length ? false : true}>Edit day</button>

                </div>) :
                (
                    <div className='shiftlist-right-div' key={weekdays[props.index]} >

                        <div className='day-div'>
                            <div className='date-div'>
                                <div><h3>{weekdays[props.index]}</h3></div>
                            </div>
                            <div className='day-shift-div'>
                                <div className='cashier-div' key={props.index}>
                                    <input
                                        type="text"
                                        readOnly={true}
                                        placeholder="Day shift cashier..."
                                        value={props.assigned[0][props.index] || ""}
                                        onFocus={() => { handleFocus(0) }}
                                        disabled={props.index === props.daysArray.length ? false : true}
                                    />
                                </div>
                                <div className='attendees-div'>
                                    <div className='attendee-div'>
                                        <input
                                            type="text"
                                            readOnly={true}
                                            value={props.assigned[1][props.index] || ""}
                                            onFocus={() => { handleFocus(1) }}
                                            disabled={props.index === props.daysArray.length ? false : true}
                                        />
                                    </div>
                                    <div className='attendee-div'>
                                        <input
                                            type="text"
                                            readOnly={true}
                                            value={props.assigned[2][props.index] || ""}
                                            onFocus={() => { handleFocus(2) }}
                                            disabled={props.index === props.daysArray.length ? false : true}
                                        />
                                    </div>
                                    <div className='attendee-div'>
                                        <input
                                            type="text"
                                            readOnly={true}
                                            value={props.assigned[3][props.index] || ""}
                                            onFocus={() => { handleFocus(3) }}
                                            disabled={props.index === props.daysArray.length ? false : true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={(event) => props.handleAddDay(event, props.location, props.relevantDay)} disabled={props.index === props.daysArray.length ? false : true}>Add day</button>
                        <button onClick={(event) => props.editDayHandler(event)} disabled={props.index < props.daysArray.length ? false : true}>Edit day</button>
                    </div>)
            }
        </div>
    )
}

export default CreateShiftlistFormChild;