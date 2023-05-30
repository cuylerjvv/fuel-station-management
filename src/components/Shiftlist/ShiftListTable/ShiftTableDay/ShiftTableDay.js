import React from "react";

import DayOfTheWeek from "./DayOfTheWeek";
import Shift from "./Shift";

function ShiftTableDay(props) {

    const workingDate = {
        firstDay: props.firstDay,
        month: props.month,
        year: props.year
    }
    console.log(props.index)
    return (
        // Row div
        <div className="d-flex"> 
            {/* Day of the week div */}
            <div>
                <DayOfTheWeek workingDate={workingDate}/>
            </div>
                <Shift />
            <div> 
                <Shift />
            </div>
        </div>
    );
}

export default ShiftTableDay;