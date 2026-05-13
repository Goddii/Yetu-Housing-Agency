    import {
        FaMapMarkerAlt,
        FaPhoneAlt,
        FaEnvelope,
        FaClock,
    } from "react-icons/fa";
    import Footer from "./Footer";
    function Contact() {
        return(
            <div>
                {/*HERO SECTION*/}
                <section className="contact-hero">
                    <h1>Contact Us</h1>
                    <p>
                        We're here to help you find your dream home
                    </p>
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

                                <div className="form-group">
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
                                        <option>General Inquiry</option>
                                        <option>Buy Property</option>
                                        <option>Sell Property</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
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

                    {/*RIGHT SIDE FORM*/}
            <div className="contact-info">

            <div className="info-card">

                <h2>Contact Information</h2>

                <div className="info-item">
                <FaMapMarkerAlt className="icon" />

                <div>
                    <h4>Office Address</h4>
                    <p>123 Real Estate Ave</p>
                    <p>New York, NY 10001</p>
                </div>
                </div>

                <div className="info-item">
                <FaPhoneAlt className="icon" />

                <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                </div>
                </div>

                <div className="info-item">
                <FaEnvelope className="icon" />

                <div>
                    <h4>Email</h4>
                    <p>info@luxeestates.com</p>
                </div>
                </div>

                <div className="info-item">
                <FaClock className="icon" />

                <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
                </div>

            </div>

            {/* BLUE BOX */}
            <div className="help-box">
                <h3>Need Immediate Assistance?</h3>

                <p>
                Our team is ready to help you with all your
                real estate needs.
                </p>
            </div>

            </div>

                </section>
                < Footer/>

            </div>
        );
    }

    export default Contact;