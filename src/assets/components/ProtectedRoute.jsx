// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = !!localStorage.getItem('token'); 

  if (!isAuthenticated) {
    // If not authenticated, redirect to the error page
    return <Navigate to="/error" replace />;
  }

  // If authenticated, render the requested page
  return children;
};

export default ProtectedRoute;