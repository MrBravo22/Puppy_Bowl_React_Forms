import { Link } from "react-router-dom"

function NavBar () {
    return (
        <nav>
            <Link to='/AllPlayers'>All Players</Link>
            <Link to='/SinglePlayer'>Single Player</Link>
            <Link to='/NewPlayerForm'>New Player Form</Link>
        </nav>
    )

};

export default NavBar;