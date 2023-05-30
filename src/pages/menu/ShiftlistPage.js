import { Link, useParams } from 'react-router-dom'
import React, { useState } from 'react';

import ShiftlistTemplate from '../../components/Shiftlist/ShiftListTable/ShiftlistTemplate';
import ShiftTableLayout from '../../components/Shiftlist/ShiftListTable/ShiftTableLayout';
import WeekMonthYear from '../../components/Shiftlist/WeekMonthYear';

import './ShiftListPage.css'


function ShiftlistPage() {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    const date = new Date();
    const fullDate = date.toDateString();
    const dayOfTheMonth = (date.getDate() - date.getDay() - 1);
    date.setDate(dayOfTheMonth);

    const firstDayOfTheWeekDate = date.getDate();

    const [dateCounter, setDateCounter] = useState(firstDayOfTheWeekDate)

    const [workingDate, setWorkingDate] = useState({
        firstDay: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    })

    console.log("shiftlist rendered");

    return (
        <div className='shiftList'>
            <div className='dates'>
                <h1>{location}</h1>
                <WeekMonthYear
                    dateCounter={dateCounter}
                    setDateCounter={setDateCounter}
                    workingDate={workingDate}
                    setWorkingDate={setWorkingDate}
                />
            </div>
            <div className='days-div'> 
                {Array.from({ length: 7 }, (_, index) => (
                    <ShiftlistTemplate
                        index={index}
                        location={location}
                    />))}
            </div>
            <ShiftTableLayout workingDate={workingDate} />
            <Link to="../.." relative="path">Back</Link>
            <Link to={`/${params.location}/shiftlist/create`}>Create new shiftlist</Link>
        </div>
    );
}

export default ShiftlistPage;
