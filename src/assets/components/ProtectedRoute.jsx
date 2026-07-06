// assets/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  
  // Checks for your authentication token in local storage
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token; 

  // DEBUG LOG: Helps you trace exactly why a route blocks or allows access in the console
  console.log(`[ProtectedRoute] Path: ${location.pathname} | Authenticated: ${isAuthenticated}`);

  // If authenticated, render the children routes (e.g., /dashboard)
  // If NOT authenticated, redirect them to the error/signup fallback route
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/error" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;