import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Pulls the active authorization token out of localStorage
  const isAuthenticated = !!localStorage.getItem('token'); 

  // If true, render the child page. If false, route immediately to the error file screen.
  return isAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
};

export default ProtectedRoute;