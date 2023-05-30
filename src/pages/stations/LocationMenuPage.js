import { Link, useParams } from 'react-router-dom'

function LocationMenuPage() {
    const params = useParams();
    const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
    const date = new Date();

    const dayOfTheMonth = (date.getDate()-date.getDay()-1);
    date.setDate(dayOfTheMonth);

    const firstDay = date.toDateString();

    return (
        <>
            <h1>{location} menu page</h1>
            <ul>
                <li>
                    <Link to={`/${params.location}/employees`}>Employees</Link>
                </li>
                <li>
                    <Link to={`shiftlist/${date.getDate()}${date.getMonth()+1}${date.getFullYear()}`}>Shiftlists</Link>
                </li>
                <li>
                    <Link to={`wages`}>Wages</Link>
                </li>
            </ul>

            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}

export default LocationMenuPage;