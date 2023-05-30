import React from 'react';

import './Col.css'

function DayOfTheWeek({workingDate}) {

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(workingDate.year, workingDate.month, workingDate.firstDay);
     
    const dayOfTheWeek = {
        key: workingDate.key,
        day: weekDays[date.getDay()],
        date: date.getDate(),
        month: months[date.getMonth()]
    } 

    return ( 
        <div className="col dayOfTheWeek">
            {dayOfTheWeek.day}
            <div className="d-flex">
                <div className="date">
                    {dayOfTheWeek.date}
                </div>
                <div>
                    {dayOfTheWeek.month}
                </div>
            </div>
        </div>
    );
}

export default DayOfTheWeek;