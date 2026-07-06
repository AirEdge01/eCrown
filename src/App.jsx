import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute.jsx'; 
// Page Imports
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Contact from './assets/pages/Contact.jsx';
import SignUpPage from './assets/pages/SignUpPage.jsx';
import SignInPage from './assets/pages/SignInPage.jsx';
import ServicesDashboard from './assets/pages/ServicesDashboard.jsx';
import RequestInstallation from './assets/pages/RequestInstallation.jsx';
import Error from './assets/pages/Error.jsx';
import Payment from './assets/pages/Payment.jsx';
import OrderPage from './assets/pages/OrderPage.jsx';
import Admin from './assets/pages/Admin.jsx';
import AdminSignup from './assets/pages/AdminSignup.jsx';
import AdminSignin from './assets/pages/AdminSignin.jsx';
import Avdigital from './assets/pages/Avdigital.jsx';
import Cctv from './assets/pages/Cctv.jsx';
import LowVoltage from './assets/pages/LowVoltage.jsx';
import Structure from './assets/pages/Structure.jsx';
import Pos from './assets/pages/Pos.jsx';
import SelfCheckout from './assets/pages/SelfCheckout.jsx';
import Satellite from './assets/pages/Satellite.jsx';
import Server from './assets/pages/Server.jsx';
import Wireless from './assets/pages/Wireless.jsx';
import ProtectedRoute from './assets/components/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES (Accessible by everyone) */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/signin" element={<AdminSignin />} />
      <Route path="/error" element={<Error />} />

      {/* PROTECTED ROUTES (Only accessible if signed in) */}
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><ServicesDashboard /></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
      <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
      <Route path="/request" element={<ProtectedRoute><RequestInstallation /></ProtectedRoute>} />
      <Route path="/install" element={<ProtectedRoute><RequestInstallation /></ProtectedRoute>} />
      <Route path="/digital" element={<ProtectedRoute><Avdigital /></ProtectedRoute>} />
      <Route path="/cctv" element={<ProtectedRoute><Cctv /></ProtectedRoute>} />
      <Route path="/low" element={<ProtectedRoute><LowVoltage /></ProtectedRoute>} />
      <Route path="/structure" element={<ProtectedRoute><Structure /></ProtectedRoute>} />
      <Route path="/pos" element={<ProtectedRoute><Pos /></ProtectedRoute>} />
      <Route path="/self" element={<ProtectedRoute><SelfCheckout /></ProtectedRoute>} />
      <Route path="/lite" element={<ProtectedRoute><Satellite /></ProtectedRoute>} />
      <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
      <Route path="/wireless" element={<ProtectedRoute><Wireless /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      
      {/* Catch-all route: Redirects any unknown URL to error page */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;