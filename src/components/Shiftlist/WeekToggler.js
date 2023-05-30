import React from "react";

import './WeekMonthYear.css';

function WeekToggler ({date, month, year}){

    const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const displayWeek = new Date (year, month, date)

    const weekObject = {
        firstDay: displayWeek.getDate(),
        month: displayWeek.getMonth(),
        year: displayWeek.getFullYear()
    }

    console.log("WeekToggler rendered");
    return(
        <div className="week-toggler d-flex">
            <div className="margin"> 
                <h3>Week:</h3>
                <h3>{weekObject.firstDay}</h3>
            </div>
            <div className="margin">
                <h3>Month:</h3>
                <h3>{monthIndex[weekObject.month]}</h3>
            </div>
            <div className="margin">
                <h3>Year:</h3>
                <h3>{weekObject.year}</h3>
            </div>
        </div>
    )
}

export default WeekToggler;


