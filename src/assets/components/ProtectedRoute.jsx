// // assets/components/ProtectedRoute.jsx
// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';

// const ProtectedRoute = () => {
//   const location = useLocation();
//   const token = localStorage.getItem('token');

//   // Strict Validation: Ensure token exists and isn't a broken string placeholder
//   const isAuthenticated = token && 
//                           token !== 'null' && 
//                           token !== 'undefined' && 
//                           token !== 'logged-in' && 
//                           token.trim() !== '';

//   // Safe tracking to monitor route behavior in your developer tools console
//   console.log(`[GUARD] Path: ${location.pathname} | Access Granted: ${!!isAuthenticated}`);

//   // If authenticated, render child matching routes. Otherwise, bounce to /error
//   return isAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
// };

// export default ProtectedRoute;