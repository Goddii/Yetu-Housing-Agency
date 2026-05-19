import React, { useState, useEffect } from 'react';
import './Properties.css';
import PropertyList from './PropertyList';
import { Link } from 'react-router-dom';
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

function Properties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites')
        return saved ? JSON.parse(saved) : []
    });
    const [filters, setFilters] = useState({
        location: '',
        price: '',
        type: ''
    });

    useEffect(() => {
    const fetchProperties = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'properties'))
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setProperties(data)
            setLoading(false)
        } catch (err) {
            console.error('Error:', err)
            setLoading(false)
        }
    }
    fetchProperties()
    }, [])

    function handleFilterChnge(e) {
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    
    const filteredProperty= properties.filter(property => {
        const locationMatch = property.location.toLowerCase().includes(filters.location.toLowerCase())

        let priceMatch = true
        if (filters.price === '0-100000'){
            priceMatch = property.price < 100000
        } else if (filters.price === '100000-500000 ') {
            priceMatch = property.price >= 100000 && property.price <= 500000
        } else if (filters.price === '500000 +') {
            priceMatch = property.price > 500000
        }

        const typeMatch = filters.type === '' || property.type === filters.type

        return locationMatch && priceMatch && typeMatch


    })
    
    if (loading) {
        return <div>Loading properties...</div>;
    }

    function handleFavourite(e, property){
        e.preventDafault()
        e.stopPropagation()


        const existing = JSON.parse(localStorage.getItem('favourites') || '[]')
        const alreadySaved = existing.find(p => p.id === property.id)

        if (alreadySaved) {
            const updated = existing.filter(p => p.id !== property.id)
            localStorage.setItem('favourites',JSON.stringify(updated))
            setFavorites(updated)
        } else {
            const updated = [...existing,property]
            localStorage.setItem('favourites', JSON.stringify(updated))
            setFavorites(updated)
        }
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
                <input type="text" id="location" name="location" value={filters.location} placeholder="Enter location" onChange={handleFilterChnge} />
                <label htmlFor="price">Price Range:</label> 
                <select type="text"  id="price" name="price" value={filters.price} placeholder="All prices" onChange={handleFilterChnge}>
                    <option value="">All prices</option>
                    <option value="0-100000">Under $100,000</option>
                    <option value="100000-500000">$100,000 - $500,000</option>
                    <option value="500000+">$500,000+</option>
                </select>
                <label htmlFor="property-type">Property Type:</label>
                <select id="property-type" name="type" value={filters.type} placeholder="All Types" onChange={handleFilterChnge}>
                    <option value="">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                </select>
                </div>
                </div>
        </div>
        <div className="properties-listing">

            {loading && <p>Loading properties...</p>}

            {!loading && filteredProperty.length  === 0 && (
                <p style = {{padding:'10px'}}>No properties match your search</p>
            )}

            {filteredProperty.map( property => {
                const isFavourited = favorites.find(p => p.id === property.id)

                return (
                    <Link to={'/properties/${property.id}'} style={{textDecoration: 'none', color:'inherit'}} >
                        <img src={property.image} alt={property.title} />
                        <h3>{property.title}</h3>
                        <p>{property.location}</p>
                        <h5>${property.beds} beds, {property.baths} baths - {property.sqft} sqft</h5>

                        <button className='button-84' style={{backgroundColor: isFavourited ? '#e74c3c':''}} onClick={(e) => handleFavourite(e,property)}>
                            {isFavourited ? '❤️ Saved' : '🤍 Add to Favorites'}
                        </button>
                    </Link>
                )
            })}



        </div>
     
                
            </>
       
    )
}

export default Properties;