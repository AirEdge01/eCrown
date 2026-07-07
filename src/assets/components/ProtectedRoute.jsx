import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import API from '../api'; // Import the security interceptor we made in Step 1

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = localStorage.getItem('userToken');

    useEffect(() => {
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        // Send a quick ping to the backend profile context route to verify authenticity
        API.get('/api/user/profile-context')
            .then((res) => {
                if (res.data.success) {
                    setIsAuthenticated(true);
                }
            })
            .catch(() => {
                // If the backend rejects the token, interceptor handles it, but safety fallback here:
                setIsAuthenticated(false);
            });
    }, [token]);

    // Show a loading screen while the backend performs its security handshake
    if (isAuthenticated === null) {
        return <div className="text-center mt-5 text-white">Verifying Secure Network Credentials...</div>;
    }

    // If backend rejects identity, redirect straight to /error
    return isAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
};

export default ProtectedRoute;