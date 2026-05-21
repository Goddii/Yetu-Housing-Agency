import { useState,useEffect } from "react";

export default function Listings() {
    const [listings, setListings] = useState([])

    return (
        <div>
            <form>
                <label>Add Title</label>
                <input />
                <label>Add Location</label>
                <input />
                <label>Add Description</label>
                <input />
                <label>Add Beds</label>
                <input />
                <label>Add Baths</label>
                <input />
                <label>Add Sqft</label>
                <input />

            </form>
        </div>
    )
}