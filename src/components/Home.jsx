
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-section">
            <h1>Find Your Dream Home</h1>
            <p>Your trusted partner in finding the perfect home.</p>
            <Link to='/properties' className="explore-btn">Explore Properties</Link>
        </div>
    )

}

export default Home;