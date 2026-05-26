
import {useState, useEffect} from "react";
import  "../App.css";
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube, FaTiktok, FaWhatsapp, FaGithub } from 'react-icons/fa6'
import { FaThreads } from 'react-icons/fa6'



function Agent() {
    const [agent, setAgent] = useState([]);

    useEffect(() => {
    const fetchAgents = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'agents'))
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setAgent(data)
        } catch (err) {
            console.error('Error fetching agent data:', err)
        }
    }
    fetchAgents()
    }, [])

    return (
    
      <div style={{border: 'none'}}>
             <div style={{
                backgroundColor: 'oklch(60.129% 0.20181 259.183)',
                padding: '40px',
                color: 'white'
            }
                
            }>
                <h1>Agents</h1>
                <p>Our top professional agents and realtors</p>

            </div>
            <div className="agent-container">
            {agent.map((agentItem) => ( 
                 <div key={agentItem.id} className="agent-card">
                    <div className="agent-logo">
                        <div className="agent-image">
                        <img src='' alt={agentItem.name}/>
                        </div>
                        <div className="agent-contact">
                            <h3 className="agent-name" >{agentItem.name}</h3>
                            <p><strong>Role:</strong> {agentItem.role}</p>
                            <p><strong>Email:</strong> {agentItem.email}</p>
                            <p><strong>Phone:</strong> {agentItem.phone}</p>
                        </div>
                    </div>
                    <div className="agent-details">
                        
                        <p><strong>Description:</strong> {agentItem.description}</p>
                        <p>Agency: {agentItem.Agency}</p>
                        <p>Service Area: {agentItem.ServiceArea}</p>
                        <div className="agent-icons">
                            <FaFacebook size={24} color="#1877F2" />
                            <FaInstagram size={24} color="#E1306C" />
                            <FaXTwitter size={24} color="#000000" />
                            <FaLinkedin size={24} color="#0A66C2" />
                            <FaYoutube size={24} color="#FF0000" />
                            <FaTiktok size={24} color="#010101" />
                            <FaWhatsapp size={24} color="#25D366" />
                            <FaGithub size={24} color="#181717" />
                        </div>

                    </div>
                    <div className="agent-listings">
                        <h3 className="listings-title">My Listings</h3>
                        <div className="listings-container">
                            {agentItem.listings && agentItem.listings.map((listing, index) => (
                                <div key={index} className="listing-card">
                                    <div className="listing-blob">
                                        
                                    </div>
                                    <div className="listing-bg">
                                        <h4>{listing.title}</h4>
                                        <p><strong>Location:</strong> {listing.location}</p>
                                        <p style={{ color: 'blue', fontWeight: 'bold' }}><strong>Price:</strong> {listing.price}</p>
                                        <img src={listing.image} alt={listing.title} className="listing-img" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            </div> 
        </div>
    
    );
}

export default Agent;             