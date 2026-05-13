import  "../App.css";



function Agent() {
    const agent = [{
        id: 1,
        name: "ilhan ahamed",
        role: "property manager",
        description: "A skilled professional with a deep understanding of the real estate market, responsible for managing and overseeing properties, ensuring tenant satisfaction, and maximizing property value.",
        email: "ilhan.ahamed@example.com",
        listings: [
            {
                title: "real estate",
                location: "south c",
                price: "$10,000",
                image: "/images/photo2.avif"
             },
                {
                title: "sana sana estate",
                location: "south b",
                price: "$7,000",
                image: "/images/photo1.avif"
                }
            
        ]

    },
    {
        id: 2,
        name: "kevin maina",
        role: "sales manager",
        description: "An experienced sales manager with a proven track record of driving revenue growth, leading high-performing sales teams, and developing effective sales strategies to achieve business objectives.",
        email: "kevin.maina@example.com",
        listings: [
            {
                title: "A-one Acacia",
                location: "Kilimani",
                price: "$80,000",
                image: "/images/photo3.avif"
            },
            {
                title: "Libra Residence",
                location: "nairobi kilimani",
                price: "$90,000",
                image: "/images/photo4.avif"
            },
           
        ]
    }
];

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
                                <p className="price"><strong>Price:</strong> {listing.price}</p>
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