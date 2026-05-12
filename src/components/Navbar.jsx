import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";




function Navbar() {
    return(
        <nav className="nav-section">

            <div className="logo-section">
                <h1>Yetu Housing Agency</h1>
            </div>

            <div className="menu-section">
                <Link to='/'>Home</Link>
                <Link to='/properties'>Properties</Link>
                <Link to='/agent'>Agent</Link>
                <Link to='/contact'>Contact</Link>
                

            </div>


        </nav>
    )
}

export default Navbar;