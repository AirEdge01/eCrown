// assets/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  // ELIMINATES FALSE PASSES: Strictly ensures token and user keys exist, 
  // are not empty, and are not placeholder strings.
  const hasValidToken = token && token !== 'null' && token !== 'undefined' && token.trim() !== '';
  const hasValidUser = user && user !== 'null' && user !== 'undefined' && user.trim() !== '';

  const isFullyAuthenticated = hasValidToken && hasValidUser;

  // Monitor this inside your browser F12 inspection terminal!
  console.log(`[ROUTE SECURITY GUARD] Path: ${location.pathname} -> Verified Authentic: ${!!isFullyAuthenticated}`);

  // If authenticated, grant passage. If a generic hacker/unregistered user tries to pass, throw them out to /error
  return isFullyAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
};

export default ProtectedRoute;