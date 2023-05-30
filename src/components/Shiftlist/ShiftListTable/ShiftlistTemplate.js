import React from 'react';

import './ShiftlistTemplate.css'

function ShiftlistTemplate(props) {

    const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    console.log("Shiftlist template: " + props.location)

    return (
        <div>
            {props.location === 'Dixie' ? (
                <div className='shiftlist-right-div' key={weekdays[props.index]} >

                    <div className='day-div'>
                        <div className='date-div'>
                            <div><h3>{weekdays[props.index]}</h3></div>
                        </div>

                        <div className='day-shift-div'>
                            <div className='cashier-div' key={props.index}>
                                    <p>Cashier</p>                                
                            </div>
                            <div className='attendees-div'>
                                <div className='attendee-div'>
                                    <div>
                                        <p>Attendant</p>
                                    </div>
                                </div>
                                <div className='attendee-div'>
                                    <div>
                                        <p>Attendant</p>
                                    </div>
                                </div>
                                <div className='attendee-div'>
                                    <div>
                                    <p>Attendant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='night-shift-div'>
                            <div className='cashier-div'>
                                <div>
                                     <p>Cashier</p>
                                </div>
                            </div>
                            <div className='attendees-div'>
                                <div className='attendee-div'>
                                    <div>
                                    <p>Attendant</p>
                                    </div>
                                </div>
                                <div className='attendee-div'>
                                    <div>
                                    <p>Attendant</p>
                                    </div>
                                </div>
                                <div className='attendee-div'>
                                    <div>
                                    <p>Attendant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) :
                (
                    <div className='shiftlist-right-div' key={weekdays[props.index]} >

                        <div className='day-div'>
                            <div className='date-div'>
                                <div><h3>{weekdays[props.index]}</h3></div>
                            </div>
                            <div className='day-shift-div'>
                                <div className='cashier-div' key={props.index}>
                                    <div>
                                    <p>Cashier</p>
                                    </div>
                                </div>
                                <div className='attendees-div'>
                                    <div className='attendee-div'>
                                        <div>
                                        <p>Attendant</p>
                                        </div>
                                    </div>
                                    <div className='attendee-div'>
                                        <div>
                                        <p>Attendant</p>
                                        </div>
                                    </div>
                                    <div className='attendee-div'>
                                        <div>
                                        <p>Attendant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
        </div>
    )
}

export default ShiftlistTemplate;