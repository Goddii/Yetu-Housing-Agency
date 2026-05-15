import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Properties.css';
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'


function PropertyList() {
    const [property, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
    const fetchProperty = async () => {
        try {
            const docRef = doc(db, 'properties', id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setProperty({ id: docSnap.id, ...docSnap.data() })
            }
            setLoading(false)
        } catch (err) {
            console.error('Error:', err)
            setLoading(false)
        }
    }
    fetchProperty()
    }, [id])
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
                    <p>{property.beds} beds, {property.baths} baths - {property.sqft} sqft</p>
                    <p>{property.description}</p>
                </div>
            
        </div>
     
                
            
       
    )
}

export default PropertyList;