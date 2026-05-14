
import {useState, useEffect} from "react";
import  "../App.css";



function Agent() {
    const [agent, setAgent] = useState([]);

    useEffect(() => {
         fetch ("http://localhost:3001/agents")
        .then((response) => response.json())
        .then((data) => {
            setAgent(data);
        })
        .catch((error) => {
            console.error("Error fetching agent data:", error);
        });
 }, []);

    return (
        <div className="agent-container">
            {agent.map((agent) => ( 
                <div key={agent.id} className="agent-card">
                    <h3 className="agent-name">{agent.name}</h3>
                    <p><strong>Role:</strong> {agent.role}</p>
                    <p><strong>Description:</strong> {agent.description}</p>
                    <p><strong>Email:</strong> {agent.email}</p>

                    <h3 className="listings-title">My Listings</h3>
                    <div className="listings-container">
                        {agent.listings && agent.listings.map((listing, index) => (
                            <div key={index} className="listing-card">
                                <h4>{listing.title}</h4>
                                <p><strong>Location:</strong> {listing.location}</p>
                                <p style={{ color: 'blue', fontWeight: 'bold' }}><strong>Price:</strong> {listing.price}</p>
                                <img src={listing.image} alt={listing.title} className="listing-img" />
                            </div>
                        ))}
                    </div>
                </div>
            ))} 
        </div>
    );
}

export default Agent;             