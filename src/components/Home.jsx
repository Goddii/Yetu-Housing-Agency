
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-section">
            <div className="home-inside-container">
                <div className="paragraph-container">
                    <h1>Find Your Dream Home</h1>
                    <p>Your trusted partner in finding the perfect home.</p>
                </div> 
            
                <Link to='/properties' className="explore-btn">Explore Properties</Link>
            </div>
            <div className="home-mid-section">

            </div>
            <div className="home-featured-section">

            </div>
            <div className="home-last-section">

            </div>    
        </div>
    )

}

export default Home;