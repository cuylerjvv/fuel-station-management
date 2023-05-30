import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import Employee from '../../components/Employees/Employee';
import AddEmployeeButton from '../../components/Employees/AddEmployeeButton';
import './EmployeesPage.css'

const EmployeesPage = () => {

    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
        
        const[employeesList, setEmployeesList] = useState([])
        // Set loadding stage and state here
        const [isLoading, setIsLoading] = useState(false)

        // request is in an useEffect hook because it should not rerender when the page rerenders. The dependancies are empty because it should only run on page load and not again. 
        useEffect(() => {
            const request = async () => {
                setIsLoading(true)
                const response = await fetch(`http://localhost:5000/${params.location}/employees`);
                console.log(params)
                const responseData = await response.json();
                console.log(responseData);
                setEmployeesList(responseData.employee)
                setIsLoading(false)
            }
            
            request();
        }, [])

    // deletes employee on screen
    const onDeleteEmployee = (id) => {
        setEmployeesList( prevList => 
            prevList.filter(employee => employee.id !== id)
        );
    };
    
    return (
        <div className="employees-page">
            <h1>{location}'s employeesList page.</h1>
            <ul className="list">
                {!isLoading && employeesList &&
                employeesList.map((employeeObject) => (
                <Employee 
                location={params.location}
                id={employeeObject.id}
                rid={employeeObject.rid}
                name={employeeObject.name} 
                surname={employeeObject.surname}
                onDeleteEmployee={onDeleteEmployee}
                />
                ))}
            </ul>
            <AddEmployeeButton setEmployeesList={setEmployeesList}/>
            <p><Link to=".." relative="path">Back</Link></p>
        </div>     
    );
}

export default EmployeesPage;
