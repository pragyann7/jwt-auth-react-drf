import { useState } from 'react';
import axios from './api/axios';

export default function RegisterForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('register/', formData);
            setMessage(res.data.message);
        } catch (err) {
            setMessage('Registration failed. ' + (err.response?.data?.username || err.response?.data?.password || err.message));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
}
