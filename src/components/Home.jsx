
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Footer from "./Footer";

function Home(){




    return(
        <div className="home-section">
            <div className="home-inside-container">
                <div className="paragraph-container">
                    <h1 className="slide-in-title">Find Your Dream Home</h1>
                    <p className="slide-in-title">Your trusted partner in finding the perfect home.</p>
                </div> 
                <div>
                <button className="button-84"><Link to='/properties' className="explore-btn">Explore Properties</Link></button>
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
                    
                        
  

                    </div> 
                    <div className="btn-props">
                        <button className="button-84"><Link to='/properties'>View All Properties</Link></button> 
                    </div>  
                              

            </div>
            <div className="home-last-section">
                        <h4>Ready to Find Your Dream Home?</h4>
                        <p>Our expert agents are here to help you every step of the way</p>
                          <button className="button-84">
                                <Link to='/contact' style={{color:'white', textDecoration:'none'}}>
                                    Contact Us Today
                                </Link>
                         </button>

            </div>  
    
        </div>
    )

}

export default Home;