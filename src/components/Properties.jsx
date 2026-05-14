import React, { useState, useEffect } from 'react';
import './Properties.css';
import PropertyList from './PropertyList';
import { Link } from 'react-router-dom';
function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/properties')
            .then(response => response.json())
            .then(data => {
                setProperties(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading properties...</div>;
    }

    return(
        <>
        
        <div className="properties-section">
            <div className="properties-header">
            <h1>Properties Listing</h1>
            <p>Discover your perfect home among our exclusive listings.</p>
            </div>
            <div className="search-bar">
               <h2>Filters</h2>
               <div className="search-inputs">
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter location" />
                <label htmlFor="price">Price Range:</label> 
                <select type="text"  id="price" name="price" placeholder="All prices" >
                    <option value="">All prices</option>
                    <option value="0-100000">Under $100,000</option>
                    <option value="100000-500000">$100,000 - $500,000</option>
                    <option value="500000+">$500,000+</option>
                </select>
                <label htmlFor="property-type">Property Type:</label>
                <select id="property-type" name="property-type" placeholder="All Types">
                    <option value="">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                </select>
                </div>
                </div>
        </div>
        <div className="properties-listing">
            {properties.map(property => (
               <Link to={`/properties/${property.id}`} key={property.id}>
                    <div className="property-card" key={property.id}>
                        <img src={property.image} alt={property.name} />
                        <h3>{property.name}</h3>
                        <h5> ${property.price.toLocaleString()}</h5>
                        <p>{property.bedrooms} beds, {property.bathrooms} baths - {property.sqft} sqft</p>
                    </div>
                </Link>
            ))}
        </div>
     
                
            </>
       
    )
}

export default Properties;