import React from "react";
import { useState, useContext } from "react";
import './css/Notification.css'
import Navbar from './Navbar'
import Footer from './Footer'


function Notification() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prepare_time, setPrepareTime] = useState('');
    const [work, setWork] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [total_amount, setTotalAmount] = useState('');


    const handleCreateNotification = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('prepare_time', prepare_time);
            formData.append('work', work);
            formData.append('ingredients', ingredients);
            formData.append('total_amount', total_amount);
            let token = localStorage.getItem("token")
            token = token ? JSON.parse(token) : null;
            if (!token) {
                throw new Error('Token must be provided - react/MyRecipe.js')
            }

            console.log(formData)

            const response = await fetch('/api/register-recipe', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <section>
            <section className="mynotification_section">
                <article className="create_notification_form">
                    <h2>New Notification</h2>
                    <label>Name of meteostation</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    <label>Date from</label>
                    <input type='date' onChange={(e) => setDescription(e.target.value)} />
                    <label>Date to</label>
                    <input type="date" onChange={(e) => setPrepareTime(e.target.value)} />
                    <label>Temperature below</label>
                    <input type="number" onChange={(e) => setWork(e.target.value)} />
                    <label>Temperature above</label>
                    <input type="number" onChange={(e) => setIngredients(e.target.value)} />
                    <button onClick={handleCreateNotification}>Create</button>
                </article>
                <Footer />
            </section>
        </section>
    )
}

export default Notification