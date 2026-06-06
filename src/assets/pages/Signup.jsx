// import React from 'react';
// import { User, Mail, Lock, ArrowRight, GitBranch, Globe } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let userData = { firstName, lastName, email, password }
//     console.log(userData)

//     localStorage.setItem('userData', JSON.stringify(userData))



//       navigate('/login')
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="signup-container">
//         <div className="signup-glass-card">
//           {/* Header */}
//           <div className="text-center mb-5">
//             <h2 className="fw-800 text-white mb-2">Create Account</h2>
//             <p className="text-muted-gray small">Join the elite circle of DriveX mobility</p>
//           </div>

//           {/* Social Signup */}
//           <div className="d-flex gap-3 mb-4">
//             <button className="btn-social-auth flex-grow-1">
//               <Globe size={18} className="me-2" /> Google
//             </button>
//             <button className="btn-social-auth flex-grow-1">
//               <GitBranch size={18} className="me-2" /> GitHub
//             </button>
//           </div>

//           <div className="divider-container mb-4">
//             <span>or sign up with email</span>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             <div className="input-group-drivex mb-3">
//               <User className="input-icon" size={18} />
//               <input type="text" placeholder="First Name" required name='firstName' onChange={(e) => { setFirstName(e.target.value) }} />
//             </div>

//             <div className="input-group-drivex mb-3">
//               <User className="input-icon" size={18} />
//               <input type="text" placeholder="Last Name" required name='lastName' onChange={(e) => { setLastName(e.target.value) }} />
//             </div>

//             <div className="input-group-drivex mb-3">
//               <Mail className="input-icon" size={18} />
//               <input type="email" placeholder="Email Address" required name='email' onChange={(e) => { setEmail(e.target.value) }} />
//             </div>

//             <div className="input-group-drivex mb-4">
//               <Lock className="input-icon" size={18} />
//               <input type="password" placeholder="Create Password" required name='password' onChange={(e) => { setPassword(e.target.value) }} />
//             </div>

//             <button type="submit" className="btn-signup-primary w-100 mb-4">
//               Create Account <ArrowRight size={18} className="ms-2" />
//             </button>
//           </form>

//           <p className="text-center text-muted-gray small mb-0">
//             Already have an account?{' '}
//             <span className="text-primary-blue pointer fw-600">
//               <Link to="/signin" className="text-decoration-none">
//                 Sign In
//               </Link>
//             </span>
//           </p>
//         </div>

//         <style>{`
//         .signup-container {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #050505;
//           padding: 20px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .signup-glass-card {
//           width: 100%;
//           max-width: 450px;
//           background: rgba(255, 255, 255, 0.03);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(20px);
//           border-radius: 32px;
//           padding: 40px;
//           animation: fadeIn 0.8s ease-out;
//         }

//         .input-group-drivex {
//           position: relative;
//           display: flex;
//           align-items: center;
//         }

//         .input-icon {
//           position: absolute;
//           left: 18px;
//           color: #64748b;
//         }

//         .input-group-drivex input {
//           width: 100%;
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 16px;
//           padding: 14px 14px 14px 50px;
//           color: white;
//           outline: none;
//           transition: 0.3s;
//         }

//         .input-group-drivex input:focus {
//           border-color: #3b82f6;
//           background: rgba(59, 130, 246, 0.05);
//         }

//         .btn-signup-primary {
//           background: #3b82f6;
//           color: white;
//           border: none;
//           padding: 16px;
//           border-radius: 16px;
//           font-weight: 700;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: 0.3s;
//         }

//         .btn-signup-primary:hover {
//           background: #2563eb;
//           transform: translateY(-2px);
//         }

//         .btn-social-auth {
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           color: white;
//           padding: 12px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .divider-container {
//           display: flex;
//           align-items: center;
//           text-align: center;
//           color: #475569;
//           font-size: 12px;
//           text-transform: uppercase;
//         }

//         .divider-container::before, .divider-container::after {
//           content: '';
//           flex: 1;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .divider-container span { padding: 0 15px; }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .text-primary-blue { color: #3b82f6; }
//         .text-muted-gray { color: #64748b; }
//         .fw-800 { font-weight: 800; }
//         .fw-600 { font-weight: 600; }
//         .pointer { cursor: pointer; }
//       `}</style>
//       </div>
//     </>
//   )
// }


// export default Signup;