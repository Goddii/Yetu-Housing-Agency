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
                    />
                    <label>Add Location</label>
                    <input />
                    <label>Add Beds</label>
                    <input />
                    <label>Add Baths</label>
                    <input />
                    <label>Add Sqft</label>
                    <input />
                    <label>Add Description</label>
                    <textarea />
                    <div>
                        <label>Add image</label>
                        <input />
                    </div>
                </div>

            </form>
            </div>
        </div>
    )
}