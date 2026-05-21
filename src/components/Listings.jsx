import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
import './Listings.css'
import { type } from "firebase/firestore/pipelines";

export default function Listings() {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        type: 'house',
        description: '',
        image: '',
        featured: false
    })

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        try {
            await addDoc(collection(db, 'properties'),{
                ...formData,
                price: Number(formData.price),
                beds: Number(formData.beds),
                baths: Number(formData.baths),
                sqft: Number(formData.sqft),
            })
            setSubmitted(true)
            setLoading(false)
            setFormData({
                title: '', location: '', price: '', beds: '', baths: '', sqft: '', type: 'house', description: '', image: '', featured: false
            })
            setTimeout(() => Navigate('/properties'), 2000)
        } catch (err) {
            console.error('Error adding listings', err)
            setLoading(false)
        }
    }

    return (
        <div className="listings-container">
            <div style={{
                backgroundColor: 'oklch(60.129% 0.20181 259.183)',
                padding: '40px',
                color: 'white'
            }
                
            }>
                <h1>Add New Listing</h1>
                <p>Fill in the details to add a new property</p>

            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <div className="listings-form">
                    <label>Property Title</label>
                    <input name="title"
                           value={formData.title}
                           onChange={handleChange}
                           placeholder="e.g Modern Family Home"
                           required 
                    />
                    <label>Location</label>
                    <input name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g Kilimani Nairobi"
                        required
                    />
                    <label>Bedrooms</label>
                    <input 
                        name="beds"
                        type="number"
                        value={formData.beds}
                        onChange={handleChange}
                        placeholder="e.g 2"
                        required
                    />
                    <label>Bathrooms</label>
                    <input 
                        name="baths"
                        type="number"
                        value={formData.baths}
                        onChange={handleChange}
                        placeholder="eg. 3"
                        required
                    />
                    <label>Sqft</label>
                    <input 
                        name="sqft"
                        type="number"
                        value={formData.sqft}
                        onChange={handleChange}
                        placeholder="eg 3200"
                    />
                    <label>Image url</label>
                    <input 
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://images.unsplash.com..."
                        required

                    />
                    {formData.image && (
                        <img 
                            src={formData.image}
                            alt="preview"
                            style={{
                                width: '100%',
                                maxHeight: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                margin: '10px 0'
                            }}
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    )}
                    <label>Description</label>
                    <textarea  
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows='5'
                        placeholder="Descrive the property...."
                        required
                        
                    />
                    <l
                </div>

            </form>
            </div>
        </div>
    )
}