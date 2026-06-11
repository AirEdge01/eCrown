import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'



import './index.css';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Contact from './assets/pages/Contact.jsx';
import Avdigital from './assets/pages/Avdigital.jsx';
import Cctv from './assets/pages/Cctv.jsx';
import LowVoltage from './assets/pages/LowVoltage.jsx';
import Structure from './assets/pages/Structure.jsx';
import Pos from './assets/pages/Pos.jsx';
import SelfCheckout from './assets/pages/SelfCheckout.jsx';
import Satellite from './assets/pages/Satellite.jsx';
import Server from './assets/pages/Server.jsx';
import Wireless from './assets/pages/Wireless.jsx';
import OrderPage from './assets/pages/OrderPage.jsx';
import SignUpPage from './assets/pages/SignUpPage.jsx';
import SignInPage from './assets/pages/SignInPage.jsx';
import ServicesDashboard from './assets/pages/ServicesDashboard.jsx';
import RequestInstallation from './assets/pages/RequestInstallation.jsx';
import Error from './assets/pages/Error.jsx';
import ProtectedRoute from './assets/components/ProtectedRoute.jsx';

// Sanitize stored auth on app start: remove authSession if it doesn't match a registered user
(() => {
  try {
    const rawUser = localStorage.getItem('userData');
    const rawSession = localStorage.getItem('authSession');
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    if (!rawUser && rawSession) {
      localStorage.removeItem('authSession');
      return;
    }

    if (rawUser && rawSession) {
      const user = JSON.parse(rawUser);
      const session = JSON.parse(rawSession);
      const userExists = storedUsers.some(
        (registered) => registered.email === session.email
      );

      if (!user || !user.email || !session || session.email !== user.email || !userExists) {
        localStorage.removeItem('authSession');
      }
    }
  } catch (e) {
    localStorage.removeItem('authSession');
  }
})();


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About />},
  { path: '/contact', element: <Contact /> },
  { path: '/request', element: <ProtectedRoute><Request /></ProtectedRoute> },
  { path: '/digital', element: <ProtectedRoute><Avdigital /></ProtectedRoute> },
  { path: '/cctv', element: <ProtectedRoute><Cctv /></ProtectedRoute> },
  { path: '/low', element: <ProtectedRoute><LowVoltage /></ProtectedRoute>  },
  { path: '/structure', element: <ProtectedRoute><Structure /></ProtectedRoute> },
  { path: '/pos', element: <ProtectedRoute><Pos /></ProtectedRoute> },
  { path: '/self', element: <ProtectedRoute><SelfCheckout /></ProtectedRoute> },
  { path: '/lite', element: <ProtectedRoute><Satellite /></ProtectedRoute> },
  { path: '/server', element: <ProtectedRoute><Server /></ProtectedRoute> },
  { path: '/wireless', element: <ProtectedRoute><Wireless /></ProtectedRoute> },
  {path: '/order', element: <OrderPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/signin', element: <SignInPage /> },
  { path: '/Sign', element: <Navigate to="/signin" replace /> },
  { path: '/SignUp', element: <Navigate to="/signup" replace /> },
  { path: '/dashboard', element: <ProtectedRoute><ServicesDashboard /></ProtectedRoute> },
  { path: '/install', element: <ProtectedRoute><RequestInstallation /></ProtectedRoute> },
  { path: '/error', element: <Error /> },
  { path: '*', element: <Navigate to="/error" replace /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
);