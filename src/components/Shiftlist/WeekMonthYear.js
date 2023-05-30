import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import './WeekMonthYear.css';
import WeekToggler from './WeekToggler';


function WeekMonthYear ({dateCounter, setDateCounter, workingDate, setWorkingDate}) {

    const params = useParams();
    // Code to update URL
    const navigate = useNavigate();
    const formatDate = (date) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        return date.toDateString(undefined, options);
      }

    function previousWeekClickHandler () {
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

        const formattedDate = formatDate(liveDate);
        navigate(`/${params.location}/shiftlist/${formattedDate}`);
    }

    function nextWeekClickHandler () {
        setDateCounter(dateCounter+7)

        const liveDate = new Date ()
        liveDate.setDate(dateCounter)

        setWorkingDate((prevState) => {
            return {
                ...prevState,
                firstDay: liveDate.getDate(),
                month: liveDate.getMonth(),
                year: liveDate.getYear(),
            };
        });

        const formattedDate = formatDate(liveDate);
        navigate(`/${params.location}/shiftlist/${formattedDate}`)
    }
    
    useEffect(() => {
        setWorkingDate((prevWorkingDate) => {
            const liveDate = new Date ()
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
    
    return (
        <div className="week-toggler"> 
                <WeekToggler date={workingDate.firstDay} month={workingDate.month} year={workingDate.year}/>
            <div className="week-toggler d-flex"> 
                <button onClick={previousWeekClickHandler}>Previous week</button>
                <button onClick={nextWeekClickHandler}>Next week</button>
                <Link to={`/${params.location}/shiftlist/${workingDate.firstDay}${workingDate.month}${workingDate.year}`}>Previous</Link>
            </div>
        </div>
        
    );
}

export default WeekMonthYear;