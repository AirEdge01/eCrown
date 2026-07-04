// assets/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Replace this with your actual authentication logic (e.g., checking localStorage, context, or Redux)
  const isAuthenticated = !!localStorage.getItem('token'); 

  // If authenticated, render the child routes (via Outlet). Otherwise, redirect to signup.
  return isAuthenticated ? <Outlet /> : <Navigate to="/error" replace />;
};

export default ProtectedRoute;