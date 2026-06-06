import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    try {
      const rawUser = localStorage.getItem('userData');
      const rawSession = localStorage.getItem('authSession');

      if (!rawUser || !rawSession) return false;

      const user = JSON.parse(rawUser);
      const session = JSON.parse(rawSession);

      if (!user || !session) return false;
      if (session.loggedIn !== true) return false;
      if (typeof session.token !== 'string' || session.token.length === 0) return false;
      if (typeof user.email !== 'string' || user.email.length === 0) return false;
      if (session.email !== user.email) return false;
      if (typeof user.password !== 'string' || user.password.length === 0) return false;
      if (typeof user.token !== 'string' || user.token.length === 0) return false;

      return true;
    } catch {
      return false;
    }
  };

  if (!isAuthenticated()) {
    localStorage.removeItem('authSession');
    return <Navigate to="/error" replace />;
  }

  return children;
};

export default ProtectedRoute;
