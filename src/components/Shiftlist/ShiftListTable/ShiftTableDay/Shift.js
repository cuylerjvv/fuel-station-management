import React, { useState } from "react";

import CashierCol from "./CashierColumn";
import AttendantCol from "./AttendantCol";

function Shift () {

    const [employeeAssigned, setEmployeeAssigned] = useState("")
    const clickHandler = () => {
        setEmployeeAssigned("Assigned")
    }

    return (
        <div className="d-flex">
            <div onClick={clickHandler}><CashierCol name={"Tendai Katerere"} /></div>
            <div className="d-flex">
                <div onClick={clickHandler}><AttendantCol name={employeeAssigned} /></div>
                <div onClick={clickHandler}><AttendantCol name={"Attendant 2"} /></div>
                <div onClick={clickHandler}><AttendantCol name={"Attendant 3"} /></div>
            </div>
        </div>
    )
}

export default Shift;