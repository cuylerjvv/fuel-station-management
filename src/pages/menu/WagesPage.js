import { Link } from 'react-router-dom'



function WagesPage() {
    return (
        <div>
            <h1>Wages page.</h1>
            <p><Link to=".." relative="path">Back</Link></p>
        </div>
    );
}

export default WagesPage;
