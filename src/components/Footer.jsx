

function Footer(){
    return(
        <>
        {/*FOOTER*/}
        <footer className="footer">
          <div className="footer-container">

            {/*LOGO*/}
            <div className="footer-box">
                <h2>LuxeEstates</h2>
                <p>
                    Your trusted partner in finding the perfect home.
                    Excellence in real estate since 2010.
                </p>
            </div>

            {/*LINKS*/}
            <div className="footer-box">
                <h3>Quick Links</h3>

                <ul>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>Our Agents</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            {/*CONTACT*/}
            <div className="footer-box"> 
                <h3>Contact Info</h3>

                <p>123 Real Estate Ave</p>
                <p>New York, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@luxeestates.com</p>
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