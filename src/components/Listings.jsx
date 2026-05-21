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

    return (
        <div className="listings-container">
            <form>
                <div className="listings-form">
                    <label>Add Title</label>
                    <input />
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
    )
}