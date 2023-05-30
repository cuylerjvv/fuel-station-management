import React from "react";

import ShiftTableDay from "../ShiftTableDay/ShiftTableDay";

function Week({workingDate}) {
    
    const days = [];

    for( let i = 0; i < 7; i++){
        
        let passingDate = { 
            firstDay: workingDate.firstDay + i,
            month: workingDate.month,
            year: workingDate.year
        }
        days.push(passingDate)
    }
    
    console.log("week rendered");
    return(
        <div>
            <form>
            {days.map((passingDate, index) => (
            <ShiftTableDay 
                key={index}
                index={index}
                firstDay={passingDate.firstDay}
                month={passingDate.month}
                year={passingDate.year}
            />))}
            </form>
        </div>
    )
}

export default Week;