import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// const AuthGuard = () => {
//     const rawData = localStorage.getItem('userData');
    
//     // Check if data doesn't exist
//     if (!rawData || rawData === 'null' || rawData === 'undefined') {
//         return <Navigate to="/login" replace />;
//     }

//     try {
//         const parsed = JSON.parse(rawData);
        
//         // Check if token exists inside the object
//         if (!parsed || !parsed.token) {
//             localStorage.removeItem('userData'); // Clear bad data
//             return <Navigate to="/login" replace />;
//         }
        
//         // If everything is completely fine, allow them through
//         return <Outlet />;
//     } catch (e) {
//         localStorage.removeItem('userData');
//         return <Navigate to="/login" replace />;
//     }
// };

export default AuthGuard;