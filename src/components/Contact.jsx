import {
    FaMarketAlt,
    FaPhoneAlt,
    FaEnvelop,
    FaClock,
} from "react-icons/fa";
function Contact() {
    return(
        <div>
            {/*HERO SECTION*/}
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <P>
                    We're here to help you find your dream home
                </P>
            </section>

            {/*MAIN CONTACT SECTION*/}
            <section className="contact-container">

                {/*LEFT SIDE FORM*/}
                <div className="contact-form-box">
                    <h2>Send us a Message</h2>

                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>

                                <input
                                type="text"
                                placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label>Email Address</label>

                                <input
                                type="email"
                                placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Subject</label>

                                <select>
                                    <option>Genersl Inquiry</option>
                                    <option>Buy Property</option>
                                    <option>Sell property</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea
                            rows="7"
                            placeholder="Tell us about your real estate needs..."></textarea>
                        </div>

                        <button className="send-btn">
                            Send Message
                        </button>
                    </form>
                </div>
                
            </section>
        </div>
    )
}

export default Contact;