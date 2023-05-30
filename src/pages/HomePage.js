import { Link } from 'react-router-dom'

const locations = [
    {title: "dixie"},
    {title: "gazelle"}
]

    function HomePage() {

    return (
        <>
            <h1>Home Page</h1>
            <ul>
                {locations.map((location, index) => (
                    <li key={location.title}>
                        <Link to={`/${location.title}`}>{(locations[index].title.charAt(0).toUpperCase() + locations[index].title.slice(1))}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage;