import './Properties.css';
function Properties() {
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
            <div className="property-card">
                <img src="https://images.unsplash.com/photo-1706855203772-c249b75fe016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 1" />
                <h3>Modern Family Home</h3>
                    <h5> $2,850,000</h5>
                <p>5beds, 4baths - 4,200 sqft</p>
               </div>
                <div className="property-card">
                    <img src="https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 2" />
                    <h3>Contemporary Estate</h3>
                        <h5> $1,950,000</h5>
                    <p>4 beds, 3 baths - 3,800 sqft</p>
                </div>
                <div className="property-card">
                    <img src="https://images.unsplash.com/photo-1706808849803-f61304e024ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 3" />
                    <h3>Elegant Modern Residence</h3>
                        <h5> $3,200,000</h5>
                    <p>6 beds, 5 baths -5,200 sqft</p>
                </div>
                <div className="property-card">
                    <img src="https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 4" />
                    <h3>Waterfront Paradise</h3>
                        <h5> $4,100,000</h5>
                    <p>5beds, 5 baths -4,800 sqft</p>
                </div>
                <div className="property-card">
                    <img src="https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 5" />
                    <h3>Sophisticated Modern Home</h3>
                        <h5> $2,650,000</h5>
                    <p>4 beds, 4 baths - 4,200 sqft</p>
                </div>
                 <div className="property-card">
                    <img src="https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Property 6" />
                    <h3>Luxury Pool Estate</h3>
                    <h5> $3,750,000</h5>
                    <p>5 beds, 4 baths - 4,900 sqft</p>
                </div> 
        </div>
     
                
            </>
       
    )
}

export default Properties;