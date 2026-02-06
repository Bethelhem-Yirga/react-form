import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!name || !email || !message) {
            setError('All fields are required!');
            return;
        }
        
        setError('');
        // Here you would typically send data to your server
        alert(`Thank you for your message, ${name}!`);
        
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Contact Us</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    Message:
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;