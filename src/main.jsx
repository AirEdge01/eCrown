

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Contact from './assets/pages/Contact.jsx';
import Request from './assets/pages/Request.jsx';
import Avdigital from './assets/pages/Avdigital.jsx';
import Cctv from './assets/pages/Cctv.jsx';
import LowVoltage from './assets/pages/LowVoltage.jsx';
import Structure from './assets/pages/Structure.jsx';
import Pos from './assets/pages/Pos.jsx';
import SelfCheckout from './assets/pages/SelfCheckout.jsx';
import Satellite from './assets/pages/Satellite.jsx';
import Server from './assets/pages/Server.jsx';
import Wireless from './assets/pages/Wireless.jsx';







const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
  {path: '/request', element: <Request />},
  {path: '/digital', element: <Avdigital />},
  {path: '/cctv', element: <Cctv />},
  {path: '/low', element: <LowVoltage />},
  {path: '/structure', element: <Structure />},
  {path: '/pos', element: <Pos />},
  {path: '/self', element: <SelfCheckout />},
  {path: '/lite', element: <Satellite /> },
  {path: '/server', element: <Server /> },  
  {path: '/wireless', element: <Wireless /> }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);