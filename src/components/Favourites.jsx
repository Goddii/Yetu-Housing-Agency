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
            
        </div>
    )
}