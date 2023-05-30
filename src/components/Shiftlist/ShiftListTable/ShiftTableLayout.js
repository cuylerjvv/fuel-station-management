import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom'

import Week from "./ShiftTableWeek/Week";

import './ShiftTableLayout.css';

function ShiftTableLayout ({workingDate}) {

    console.log("shift table rendered");
    const params = useParams();

    const onEdit = () => {
        alert("Functionality for editing week has not been added yet.")
    }

    return (
        // Whole table div
        <div className="shiftTable "> 
            {/* Day + night shift div */}
            <div className="d-flex containerDiv">
                {/* Day shit div */}
                <div>
                    <div className="cell shifts">Day Shift</div>
                    <div className="d-flex">
                        <div className="cell">Cashier</div>
                        <div className="cell">Attendants</div>
                    </div>
                </div>
                {/* Night shift div */}
                <div>
                    <div className="cell shifts">Night Shift</div>
                    <div className="d-flex">
                        <div className="cell">Cashier</div>
                        <div className="cell">Attendants</div>
                    </div>
                </div>
            </div>
            {/* Below is the section that is gonig to change */}
            <Week workingDate={workingDate}/>
            <button onClick={onEdit}>Edit</button>
        </div>
    ) ;
}

export default ShiftTableLayout;