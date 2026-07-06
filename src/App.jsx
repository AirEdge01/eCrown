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
  return (
    <Routes>
      {/* ================= 1. PUBLIC ZONE ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Admin Public Portals */}
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/signin" element={<AdminSignin />} />

      {/* ================= 2. STRICTLY PROTECTED ZONE ================= */}
      {/* If any user tries to access these paths without a real token, the wrapper boots them instantly */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<ServicesDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/request" element={<RequestInstallation />} /> 
        <Route path="/install" element={<RequestInstallation />} />
        
        {/* Core Sub-Module Infrastructure */}
        <Route path="/digital" element={<Avdigital />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/low" element={<LowVoltage />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/self" element={<SelfCheckout />} />
        <Route path="/lite" element={<Satellite />} />
        <Route path="/server" element={<Server />} />
        <Route path="/wireless" element={<Wireless />} />
        
        {/* Management Core Panel */}
        <Route path="/admin" element={<Admin />} />
      </Route>
      
      {/* ================= 3. FALLBACKS ================= */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;