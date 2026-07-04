// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom'
// import './index.css'
// // import App from './App.jsx'



// import './index.css';
// import Home from './assets/pages/Home.jsx';
// import About from './assets/pages/About.jsx';
// import Contact from './assets/pages/Contact.jsx';
// import Avdigital from './assets/pages/Avdigital.jsx';
// import Cctv from './assets/pages/Cctv.jsx';
// import LowVoltage from './assets/pages/LowVoltage.jsx';
// import Structure from './assets/pages/Structure.jsx';
// import Pos from './assets/pages/Pos.jsx';
// import SelfCheckout from './assets/pages/SelfCheckout.jsx';
// import Satellite from './assets/pages/Satellite.jsx';
// import Server from './assets/pages/Server.jsx';
// import Wireless from './assets/pages/Wireless.jsx';
// import OrderPage from './assets/pages/OrderPage.jsx';
// import SignUpPage from './assets/pages/SignUpPage.jsx';
// import SignInPage from './assets/pages/SignInPage.jsx';
// import ServicesDashboard from './assets/pages/ServicesDashboard.jsx';
// import RequestInstallation from './assets/pages/RequestInstallation.jsx';
// import Error from './assets/pages/Error.jsx';
// import ProtectedRoute from './assets/components/ProtectedRoute.jsx';
// // import Login from './assets/pages/Login.jsx';
// import Payment from './assets/pages/Payment.jsx';
// import Admin from './assets/pages/Admin.jsx';
// import CustomerStore from './assets/pages/CustomerStore.jsx';


// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/about', element: <About />},
//   { path: '/contact', element: <ProtectedRoute> <Contact /> </ProtectedRoute> },
//   { path: '/request', element: <ProtectedRoute><Request /></ProtectedRoute> },
//   { path: '/digital', element: <ProtectedRoute><Avdigital /></ProtectedRoute> },
//   { path: '/cctv', element: <ProtectedRoute><Cctv /></ProtectedRoute> },
//   { path: '/low', element: <ProtectedRoute><LowVoltage /></ProtectedRoute>  },
//   { path: '/structure', element: <ProtectedRoute><Structure /></ProtectedRoute> },
//   { path: '/pos', element: <ProtectedRoute><Pos /></ProtectedRoute> },
//   { path: '/self', element: <ProtectedRoute><SelfCheckout /></ProtectedRoute> },
//   { path: '/lite', element: <ProtectedRoute><Satellite /></ProtectedRoute> },
//   { path: '/server', element: <ProtectedRoute><Server /></ProtectedRoute> },
//   { path: '/wireless', element: <ProtectedRoute><Wireless /></ProtectedRoute> },
//   { path: '/signup', element: <SignUpPage /> },
//   { path: '/signin', element: <SignInPage /> },
//   { path: '/dashboard', element: <ServicesDashboard /> },
//   { path: '/payment', element: <Payment /> },
//   { path: '/install', element: <ProtectedRoute><RequestInstallation /></ProtectedRoute> },
//   { path: '/error', element: <Error /> },
//   { path: '/order', element: <OrderPage /> },
//   { path: '/admin', element: <Admin /> },
//   {path: '/store', element: <CustomerStore />},
//   // { path: '*', element: <Navigate to="/error" replace /> },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
