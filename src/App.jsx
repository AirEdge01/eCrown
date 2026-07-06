import { useEffect } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

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
import ProtectedRoute from './assets/components/ProtectedRoute.jsx';
import Payment from './assets/pages/Payment.jsx';
import Admin from './assets/pages/Admin.jsx';
import AdminSignup from './assets/pages/AdminSignup.jsx';
import AdminSignin from './assets/pages/AdminSignin.jsx';

function App() {
  
  // // Sanitize stored auth safely on app mount
  // useEffect(() => {
  //   try {
  //     const rawUser = localStorage.getItem('userData');
  //     const rawSession = localStorage.getItem('authSession');

  //     // 1. Guest user: No data at all. Perfectly fine.
  //     if (!rawUser && !rawSession) return;

  //     // 2. Corrupt state: Session exists but user data vanished. Wipe session.
  //     if (!rawUser && rawSession) {
  //       localStorage.removeItem('authSession');
  //       return;
  //     }

  //     // 3. Evaluation when both exist
  //     if (rawUser && rawSession) {
  //       const user = JSON.parse(rawUser);
  //       const session = JSON.parse(rawSession);
        
  //       // Ensure email configurations match up perfectly
  //       if (!user?.email || !session?.email || session.email !== user.email) {
  //         localStorage.removeItem('authSession');
  //       }
  //     }
  //   } catch (e) {
  //     console.error("Sanitization hook failed:", e);
  //     localStorage.removeItem('authSession');
  //   }
  // }, []); 

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/signin" element={<AdminSignin />} />

        {/* Protected Customer Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestInstallation />} /> 
        <Route path="/digital" element={<Avdigital />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/low" element={<LowVoltage />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/self" element={<SelfCheckout />} />
        <Route path="/lite" element={<Satellite />} />
        <Route path="/server" element={<Server />} />
        <Route path="/wireless" element={<Wireless />} />
        <Route path="/dashboard" element={<ServicesDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/install" element={<RequestInstallation />} />
        <Route path="/order" element={<OrderPage />} />
        
        {/* Protected Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Fallbacks */}
        <Route path="/error" element={<Error />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;