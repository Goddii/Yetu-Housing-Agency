import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function Favourites() {
    const [favourites, setFavourites] = useState([])


    useEffect(() => {
        const saved = localStorage.getItem('favourites')
        setFavourites(saved ? JSON.parse(saved): [])
    },[])

    function handleRemove(id) {
        const updated = favourites.filter(p => p.id !== id)
        localStorage.setItem('favourites', JSON.stringify(updated))
        setFavourites(updated)
    }

    return (
        <div>
            <div style={{
                backgroundColor: 'oklch(60.129% 0.20181 259.183)',
                padding: '40px',
                color: 'white'
            }}>
                <h1>My Favourites</h1>
                <p>Properties you have saved</p>

            </div>
            <div className="properties-listing" style={{ padding: '20px'}}>
                { favourites.length === 0 && (
                    <div style={{padding: '40px', textAlign: 'center'}}>
                        <p>You have no saved properties yet</p>
                        <Link to='/properties'>
                            <button className="button-84" style={{ marginTop: '20px'}}>
                                Browse Properties
                            </button>
                        </Link>
                    </div>
                )}

                {favourites.map(property => (
                    <div key={property.id} alt={'property.title'}>
                        <img src={property.image} alt={property.title} />
                        <h3>{property.title}</h3>
                        <p>{property.location}</p>
                        <h5>${property.price.toLocaleString()}</h5>
                        <p>{property.beds} beds</p>
                        <p>{property.baths} baths</p>
                        <p>{property.sqft} sqft</p>

                        <div style={{display: 'flex', gap:'10px', marginTop:'10px'}}>
                            <Link to={`/properties/${property.id}`} style={{flex: 1}}>
                                <button className="button-84" style={{width: '100%'}}>
                                    View Details
                                </button>
                            </Link>
                            <button className="button-84"
                            onClick={() => handleRemove(property.id)}
                            style={{flex: 1, backgroundColor: '#e74c3c', backgroundImage:'none'}}
                            >
                                Remove
                            </button>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
export default Favourites