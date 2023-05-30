import React, { useReducer } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

import CreateShiftlistForm from './CreateShiftlistForm';
import './CreateShiftlist.css';

function CreateShiftlist() {

    const location = useParams().location;
    const navigate = useNavigate();
    const params = useParams();
    const date = new Date();
    const dayOfTheMonth = (date.getDate() - date.getDay() + 6);
    date.setDate(dayOfTheMonth);

    const daysArrayReducer = (days, action) => {
        switch(action.type) {
            case 'ADD':            
                return [...days, action.payload];
            case 'EDIT':
        }
    }

    const weekReducer = (week, action) => {
        switch(action.type) {
            case 'CREATE':            
                return [...week, action.payload];
            case 'EDIT':
        }
    }

    const [daysArray, setDaysArray] = useReducer(daysArrayReducer, [])
    console.dir( ( daysArray) );
    const [week, setWeek] = useReducer(weekReducer, [])
    console.dir( week );
    
    console.log(daysArray.length)

    const onAddDayClick = async (event, dayValue) => {
        event.preventDefault();
        setDaysArray({ 
            type: 'ADD',
            payload: dayValue
        });
        console.log(dayValue);
    }

    const createWeek = async (event, daysArray) => {
        event.preventDefault();
        const startDate = date.getFullYear()+''+(date.getMonth()+1)+''+(date.getDate())
        let weekValue = {
            startDate: startDate,
            days: daysArray
        }
        onSubmitWeek(event, weekValue)
    }
    const onSubmitWeek = async (event, weekValue) => {
        event.preventDefault();
        setWeek({
            type: 'CREATE', 
            payload: weekValue
        })
        console.log(weekValue)
        navigate('/dixie/shiftlist/2752023')
    }

    // console.log(daysArray)

    return (
        <div className='form-div'>
            <form className='week-form'>
                <h3>Date: {date.toDateString()}</h3>

                    <CreateShiftlistForm
                        onAddDay={onAddDayClick}
                        daysArray={daysArray}
                    />
        
                <div className='button-and-link'>
                    <Link to={`/${params.location}/shiftlist/${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`}>Back</Link>
                    <button 
                        disabled={daysArray.length !== 7} 
                        style={ daysArray.length === 7 ? {} : { userSelect: "none" }}
                        onClick={(event) => createWeek(event, daysArray)}
                        >Save</button>
                </div>
            </form>
        </div>

    )
}

export default CreateShiftlist;