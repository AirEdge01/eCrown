// import React, { useState } from 'react';
// import { Mail, Lock, LogIn, GitBranch, Globe } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import { Link, useNavigate } from 'react-router-dom';

// const SignIn = () => {


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const navigate = useNavigate();




//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userData = { email, password };
//     console.log("User attempting sign-in:", userData);

//     // localStorage.getItem('userData'); 
//     const storedUserData = JSON.parse(localStorage.getItem('userData') || 'null');

//     if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
//       console.log("Sign-in successful!");
//       navigate('/dashboard');
//     } else {
//       console.error("Invalid email or password.");
//     }
//   };



//   return (
//     <>
//       <Navbar />
//       <div className="signin-container">
//         <div className="signin-glass-card">
//           {/* Header */}
//           <div className="text-center mb-5">
//             <h2 className="fw-800 text-white mb-2">Welcome Back</h2>
//             <p className="text-muted-gray small">Enter your credentials to access your fleet</p>
//           </div>

//           {/* Social Signin */}
//           <div className="d-flex gap-3 mb-4">
//             <button className="btn-social-auth flex-grow-1">
//               <Globe size={18} className="me-2" /> Google
//             </button>
//             <button className="btn-social-auth flex-grow-1">
//               <GitBranch size={18} className="me-2" /> GitHub
//             </button>
//           </div>

//           <div className="divider-container mb-4">
//             <span>or sign in with email</span>
//           </div>

//           {/* Form - Added onSubmit handler */}
//           <form onSubmit={handleSubmit}>
//             <div className="input-group-drivex mb-3">
//               <Mail className="input-icon" size={18} />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 name='email'
//                 value={email} // Controlled input
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="input-group-drivex mb-2">
//               <Lock className="input-icon" size={18} />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 name='password'
//                 value={password} // Controlled input
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="text-end mb-4">
//               <span className="text-primary-blue x-small pointer fw-600">Forgot Password?</span>
//             </div>

//             <button type="submit" className="btn-signin-primary w-100 mb-4">
//               Sign In <LogIn size={18} className="ms-2" />
//             </button>
//           </form>

//           <p className="text-center text-muted-gray small mb-0">
//             New to DriveX?{' '}
//             <Link to="/signup" className="text-decoration-none">
//               <span className="text-primary-blue pointer fw-600">
//                 Create Account
//               </span>
//             </Link>
//           </p>
//         </div>

//         <style>{`
//           .signin-container {
//             min-height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background: #050505;
//             padding: 20px;
//             font-family: 'Plus Jakarta Sans', sans-serif;
//           }

//           .signin-glass-card {
//             width: 100%;
//             max-width: 420px;
//             background: rgba(255, 255, 255, 0.03);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             backdrop-filter: blur(25px);
//             border-radius: 32px;
//             padding: 40px;
//             animation: fadeIn 0.8s ease-out;
//           }

//           .input-group-drivex {
//             position: relative;
//             display: flex;
//             align-items: center;
//           }

//           .input-icon {
//             position: absolute;
//             left: 18px;
//             color: #64748b;
//           }

//           .input-group-drivex input {
//             width: 100%;
//             background: rgba(255, 255, 255, 0.05);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             border-radius: 16px;
//             padding: 14px 14px 14px 50px;
//             color: white;
//             outline: none;
//             transition: 0.3s;
//           }

//           .input-group-drivex input:focus {
//             border-color: #3b82f6;
//             background: rgba(59, 130, 246, 0.05);
//           }

//           .btn-signin-primary {
//             background: #3b82f6;
//             color: white;
//             border: none;
//             padding: 16px;
//             border-radius: 16px;
//             font-weight: 700;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             transition: 0.3s;
//           }

//           .btn-signin-primary:hover {
//             background: #2563eb;
//             transform: translateY(-2px);
//             box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
//           }

//           .btn-social-auth {
//             background: rgba(255, 255, 255, 0.04);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             color: white;
//             padding: 12px;
//             border-radius: 14px;
//             font-size: 14px;
//             font-weight: 600;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             transition: 0.3s;
//           }

//           .btn-social-auth:hover {
//             background: rgba(255, 255, 255, 0.08);
//           }

//           .divider-container {
//             display: flex;
//             align-items: center;
//             text-align: center;
//             color: #475569;
//             font-size: 11px;
//             text-transform: uppercase;
//             letter-spacing: 0.5px;
//           }

//           .divider-container::before, .divider-container::after {
//             content: '';
//             flex: 1;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.06);
//           }

//           .divider-container span { padding: 0 15px; }

//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           .text-primary-blue { color: #3b82f6; }
//           .text-muted-gray { color: #94a3b8; }
//           .fw-800 { font-weight: 800; }
//           .fw-600 { font-weight: 600; }
//           .pointer { cursor: pointer; }
//           .x-small { font-size: 12px; }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default SignIn;