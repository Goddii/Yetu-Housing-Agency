import{
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
}from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
        {/*FOOTER*/}
        <footer className="footer">
          <div className="footer-container">

            {/*LOGO*/}
            <div className="footer-box">
                <h2>Yetu Housing</h2>
                <p>
                    Your trusted partner in finding the perfect home.
                    Excellence in real estate since 2010.
                </p>
            </div>

            {/*LINKS*/} 
            <div className="footer-box">
                <h3>Quick Links</h3>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                    <li><Link to="/agent">Our Agents</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            {/*CONTACT*/}
            <div className="footer-box"> 
                <h3>Contact Info</h3>

                <p>123 Real Estate KE</p>
                <p>Nairobi, KE 254</p>
                <p>Phone: (+254) 123-456708</p>
                <p>Email: info@yetuhousing.co.ke</p>
            </div>

            {/*SOCIALS*/}
            <div className="footer-box">
                <h3>Folllow Us</h3>

                <div className="social-icons">
                    <FaFacebookF /> 
                    <FaInstagram /> 
                    <FaTwitter />
                    <FaLinkedinIn />    
                </div>
            </div>
         </div>  
        </footer>
        </>

    )
}

export default Footer