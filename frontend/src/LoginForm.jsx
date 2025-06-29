// LoginForm.jsx
import { useState } from 'react';
import axiosInstance from './api/axios';

export default function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('login/', credentials);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            alert('Login successful');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" placeholder="Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
            <button type="submit">Login</button>
        </form>
    );
}
