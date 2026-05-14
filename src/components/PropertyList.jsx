import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Properties.css';
function PropertyList() {
    const [property, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/properties/${id}`)
            .then(response => response.json())
            .then(data => {
                setProperty(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading properties...</div>;
    }

    return(
        
        
        
        <div className="properties-listing">
            
                <div className="property-card" key={property.id}>
                    <img src={property.image} alt={property.name} />
                    <h2>{property.title}</h2>
                    <h3>{property.name}</h3>
                    <h5> ${property.price.toLocaleString()}</h5>
                    <p>{property.bedrooms} beds, {property.bathrooms} baths - {property.sqft} sqft</p>
                    <p>{property.description}</p>
                </div>
            
        </div>
     
                
            
       
    )
}

export default PropertyList;