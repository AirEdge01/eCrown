import { useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Page Imports
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
import Payment from './assets/pages/Payment.jsx';
import Admin from './assets/pages/Admin.jsx';
import AdminSignup from './assets/pages/AdminSignup.jsx';
import AdminSignin from './assets/pages/AdminSignin.jsx';

// =========================================================================
// 1. THE BOUNCER (ProtectedRoute) DEFINITION
// =========================================================================
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  // Verify that both a valid token and user profile exist in storage
  const isVerified = token && token !== 'null' && token !== 'undefined' && token.trim() !== '' &&
                     user && user !== 'null' && user !== 'undefined';

  console.log(`[ROUTE GUARD] Checking authorization. Access Granted: ${!!isVerified}`);

  // If verified, show the page. If unregistered/not signed in, bounce to /error
  return isVerified ? children : <Navigate to="/error" replace />;
};

// =========================================================================
// 2. MAIN APPLICATION COMPONENT
// =========================================================================
function App() {
  return (
    <>
      <Routes>
        {/* ================= PUBLIC ZONE ================= */}
        {/* Open paths accessible to any web client without verification */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Admin Public Authentication Portals */}
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/signin" element={<AdminSignin />} />

        {/* ================= INLINE PROTECTED CORES ================= */}
        {/* Every private route here is strictly wrapped in the execution guard */}
        <Route path="/dashboard" element={<ProtectedRoute><ServicesDashboard /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="/request" element={<ProtectedRoute><RequestInstallation /></ProtectedRoute>} />
        <Route path="/install" element={<ProtectedRoute><RequestInstallation /></ProtectedRoute>} />
        
        {/* Engineering Module Routing */}
        <Route path="/digital" element={<ProtectedRoute><Avdigital /></ProtectedRoute>} />
        <Route path="/cctv" element={<ProtectedRoute><Cctv /></ProtectedRoute>} />
        <Route path="/low" element={<ProtectedRoute><LowVoltage /></ProtectedRoute>} />
        <Route path="/structure" element={<ProtectedRoute><Structure /></ProtectedRoute>} />
        <Route path="/pos" element={<ProtectedRoute><Pos /></ProtectedRoute>} />
        <Route path="/self" element={<ProtectedRoute><SelfCheckout /></ProtectedRoute>} />
        <Route path="/lite" element={<ProtectedRoute><Satellite /></ProtectedRoute>} />
        <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
        <Route path="/wireless" element={<ProtectedRoute><Wireless /></ProtectedRoute>} />
        
        {/* Protected Administrative Dashboard Core */}
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

        {/* ================= FALLBACKS ================= */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;