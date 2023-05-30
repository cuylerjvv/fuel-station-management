import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <>
            <h1>An error occured!</h1>
            <p>Could not find this page!</p>
            <p>Go back to the <Link to="/">home page</Link>.</p>
        </>
    )
}

export default ErrorPage;