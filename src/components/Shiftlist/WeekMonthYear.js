import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import './WeekMonthYear.css';
import WeekToggler from './WeekToggler';


function WeekMonthYear({ dateCounter, setDateCounter, workingDate, setWorkingDate }) {

    const params = useParams();

    function previousWeekClickHandler() {
        setDateCounter((prevDateCounter) =>
            prevDateCounter - 7
        )

        const liveDate = new Date();
        liveDate.setDate(dateCounter - 7);

        setWorkingDate((prevState) => {
            return {
                ...prevState,
                firstDay: liveDate.getDate(),
                month: liveDate.getMonth(),
                year: liveDate.getYear(),
            };
        });

    }

    function nextWeekClickHandler () {
        setDateCounter(dateCounter + 7)

        const liveDate = new Date()
        liveDate.setDate(dateCounter)

        setWorkingDate((prevState) => {
            return {
                ...prevState,
                firstDay: liveDate.getDate(),
                month: liveDate.getMonth(),
                year: liveDate.getYear(),
            };
        });

    }

    useEffect(() => {
        setWorkingDate((prevWorkingDate) => {
            const liveDate = new Date()
            console.log(liveDate)
            liveDate.setDate(dateCounter)

            return {
                ...prevWorkingDate,
                firstDay: liveDate.getDate(),
                month: liveDate.getMonth(),
                year: liveDate.getFullYear(),
            }
        })
    }, [dateCounter]);

    console.log("WeekMonthYear rendered");
    console.log(workingDate)

    return (
        <div className="week-toggler">
            <WeekToggler date={workingDate.firstDay} month={workingDate.month} year={workingDate.year} />
            <div className="week-toggler d-flex">
                <button onClick={previousWeekClickHandler}>Previous week</button>
                <button onClick={nextWeekClickHandler}>Next week</button>
                <Link to={`/${params.location}/shiftlist/${workingDate.year}${workingDate.month}${workingDate.firstDay}`}>Previous</Link>
            </div>
        </div>

    );
}

export default WeekMonthYear;