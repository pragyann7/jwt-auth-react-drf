// ProtectedComponent.jsx
import { useEffect, useState } from 'react';
import axiosInstance from './api/axios';

export default function ProtectedComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('access');
        axiosInstance.get('protected/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => setMessage(res.data.message))
            .catch(err => setMessage('Access denied or token expired'));
    }, []);

    return <p>{message}</p>;
}
