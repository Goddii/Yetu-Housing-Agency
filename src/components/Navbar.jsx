import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";




function Navbar() {
    return(
        <nav className="nav-section">

            <div className="logo-section">
                <h1>Yetu Housing Agency</h1>
            </div>

            <div className="menu-section">
                <Link to='/'><i className="fas fa-house"></i>Home</Link>
                <Link to='/properties'><i className="fas fa-building"></i>Properties</Link>
                <Link to='/agent'><i className="fas fa-user-tie"></i>Agent</Link>
                <Link to='/contact'><i className="fas fa-message"></i> Contact</Link>
                

            </div>


        </nav>
    )
}

export default Navbar;