
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-section">
            <div className="home-inside-container">
                <div className="paragraph-container">
                    <h1>Find Your Dream Home</h1>
                    <p>Your trusted partner in finding the perfect home.</p>
                </div> 
                <div>
                <Link to='/properties' className="explore-btn">Explore Properties</Link>
                </div>
            </div>
            <div className="home-mid-section">
                <div className="card-one">
                    <i className="fas fa-list"></i> 
                    <h3>+200 Listings</h3>
                    <p>Premium property listing site</p>

                </div>
                <div className="card-one">
                    <i className="fas fa-users"></i> 
                    <h3>Expert Agents</h3>
                    <p>Proffesional and certified realtors</p>

                </div>
                <div className="card-one">
                    <i className="fas fa-chart-line"></i>
                    <h3>+10 yrs Experience</h3>
                    <p>Trusted in the real estate market</p>
                </div>
                <div className="card-one">
                    <i className="fas fa-trophy"></i> 
                    <h3>Award Winning</h3>
                    <p>Recognized excellence in service</p>
                </div>

            </div>
            <div className="home-featured-section">
                <div className="home-card">
                    <div className="image-card">
                        <img src="" alt="" />
                    </div>
                    <div className="image-section">

                    </div>

                </div>
                <div className="home-card">
                    <div className="image-card">
                        <img src="" alt="" />
                    </div>
                    <div className="image-section">

                    </div>

                </div>
                <div className="home-card">
                    <div className="image-card">

                    </div>
                    <div className="image-section">

                    </div>

                </div>

            </div>
            <div className="home-last-section">

            </div>    
        </div>
    )

}

export default Home;