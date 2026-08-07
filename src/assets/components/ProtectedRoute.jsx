import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import API from '../api'; // This must be your Axios instance file

const ProtectedRoute = () => {
    // Status can be: 'loading', 'authenticated', or 'unauthenticated'
    const [status, setStatus] = useState('loading');
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        // 1. If there's no token in storage at all, block immediately without hitting backend
        if (!token) {
            setStatus('unauthenticated');
            return;
        }

        // 2. Ping the backend to cryptographically verify if the user is registered
        API.get('/profile-context')
            .then((res) => {
                if (res.data.success) {
                    setStatus('authenticated');
                } else {
                    setStatus('unauthenticated');
                }
            })
            .catch((err) => {
                console.error("Backend security guard rejected request:", err.message);
                setStatus('unauthenticated');
            });
    }, [token]);

    // ⏳ WHILE LOADING: Render a blank screen or a loading state. 
    // This stops unauthorized users from seeing a brief flash of your protected pages!
    if (status === 'loading') {
        return (
            <div style={{
                height: '100vh',
                backgroundColor: '#0b0c10',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#66fcf1',
                fontFamily: 'sans-serif'
            }}>
                <div className="spinner">Verifying system node credentials...</div>
            </div>
        );
    }

    // 🚨 IF UNREGISTERED: Boot them to the error page instantly
    if (status === 'unauthenticated') {
        return <Navigate to="/error" replace />;
    }

    // ✅ IF AUTHENTICATED: Allow passage to the 20+ protected pages
    return <Outlet />;
};

export default ProtectedRoute;