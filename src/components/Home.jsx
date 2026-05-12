
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import houseimg from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'

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
                    <div className="header-section">
                        <h3>Featured Houses</h3>
                    </div>               
                    <div className="home-card">
                    
                        <div className="image-card">
                            <img src={houseimg} alt="a beautiful house" />
                            <div className="image-section">
                                <p><i className="fas fa-location-dot"></i>Kilimani,Nairobi</p>
                                <p>Unique house</p>

                            </div>

                        </div>
                        <div className="image-card">
                            <img src={house3} alt="a beautiful villa" />
                            <div className="image-section">
                                <p><i className="fas fa-location-dot"></i>Kileleshwa,Nairobi</p>
                                <p>Cool house</p>
                            </div>
                        </div>

                        <div className="image-card">
                            <img src={house4} alt="a beautiful condo" />
                            <div className="image-section">
                            <p><i className="fas fa-location-dot"></i>Thika road, Kiambu</p>
                            <p>Big house</p>
                            </div>

                        </div>
  

                    </div> 
                    <div className="btn-props">
                        <button className="button-84">View All Properties</button> 
                    </div>  
                    <div className="home-last-section">
                        <h4>Ready to Find Your Dream Home?</h4>
                        <p>Our expert agents are here to help you every step of the way</p>

                    </div>            

            </div>
    
        </div>
    )

}

export default Home;