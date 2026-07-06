import React, { useState, useEffect } from 'react';
// FIXED: Destructured imports to stop the silent "undefined" component crash
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUpPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!firstName || !lastName || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        // FIXED: Explicitly naming payload keys as firstName and lastName 
        // to match your backend's NodeMailer destructuring expectations.
        const newUser = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            password: password.trim(),
        };

        setLoading(true);
        try {
            // UPDATED: Changed 'localhost' to '127.0.0.1' to avoid IPv6/IPv4 address resolution blocks
            const res = await axios.post(
                "https://ecrownode-1.onrender.com/user/signup",
                
                newUser
            );
            
            // FIXED ALERT: Safely uses the active local hook states to 
            // ensure the user's name is NEVER blank or undefined.
            alert(`Successfully Registered! Welcome, ${firstName} ${lastName}.`);
            
            navigate("/signin"); 
        } catch (err) {
            console.error("Signup error:", err.response || err);
            setError(err.response?.data?.message || "Signup failed, try again");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="signup-page-wrapper d-flex justify-content-center m-0 p-0">
                <div className="container pt-0 pb-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6 col-xl-5">
                            <div className="card signup-card border-0 p-4 p-sm-5">
                                <div className="card-body">

                                    {/* Header Section */}
                                    <div className="text-center mb-4">
                                        <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill fw-bold mb-3 small tracking-wide">
                                            GET STARTED
                                        </span>
                                        <h2 className="font-display fw-bold text-brand-dark mb-2">
                                            Create Your Account
                                        </h2>
                                        <p className="text-muted small mb-0">
                                            Gain access to smart deployment management tools and rapid RFP procurement tracking.
                                        </p>
                                    </div>

                                    {/* Error Notification Alert Banner */}
                                    {error && (
                                        <div className="alert alert-danger small py-2 px-3 border-0 mb-4" style={{ borderRadius: '12px', background: 'rgba(220, 53, 69, 0.08)', color: '#dc3545' }}>
                                            {error}
                                        </div>
                                    )}

                                    {/* Action Form */}
                                    <form onSubmit={handleSubmit}>

                                        {/* First Name Input */}
                                        <div className="mb-3">
                                            <label className="form-label small fw-semibold text-brand-dark">First Name</label>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <User size={18} />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    required
                                                    className="w-100 custom-input py-2 px-1"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Last Name Input */}
                                        <div className="mb-3">
                                            <label className="form-label small fw-semibold text-brand-dark">Last Name</label>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <User size={18} />
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    required
                                                    className="w-100 custom-input py-2 px-1"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Email Address Input */}
                                        <div className="mb-3">
                                            <label className="form-label small fw-semibold text-brand-dark">Corporate Email</label>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <Mail size={18} />
                                                </span>
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    required
                                                    className="w-100 custom-input py-2 px-1"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Password Input */}
                                        <div className="mb-3">
                                            <label className="form-label small fw-semibold text-brand-dark">Password</label>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <Lock size={18} />
                                                </span>
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    className="w-100 custom-input py-2 px-1"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Terms Agreement Checkbox */}
                                        <div className="form-check mb-4 mt-3">
                                            <input
                                                className="form-check-input custom-checkbox"
                                                type="checkbox"
                                                id="termsCheck"
                                                required
                                            />
                                            <label className="form-check-label small text-muted ms-1" htmlFor="termsCheck">
                                                I agree to the <a href="#terms" className="text-decoration-none text-primary fw-medium">Terms of Service</a> and <a href="#privacy" className="text-decoration-none text-primary fw-medium">Privacy Policy</a>.
                                            </label>
                                        </div>

                                        {/* Submit Action Button */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn btn-submit-action w-100 py-2.5 fw-bold d-flex align-items-center justify-content-center gap-2 mb-4"
                                        >
                                            {loading ? 'Processing Registration...' : 'Register Account'} <UserPlus size={18} />
                                        </button>

                                    </form>

                                    {/* Redirect Link Block */}
                                    <div className="text-center pt-2 border-top border-light">
                                        <p className="small text-muted mb-0">
                                            Already registered?{' '}
                                            <Link to="/signin" className="text-decoration-none text-primary fw-bold hover-underline">
                                                Sign In Here
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Premium Styling Scope */}
            <style>
                {`
                .signup-page-wrapper {
                    background: #f8fafe;
                    min-height: auto; 
                    padding-top: 0px !important;
                    margin-top: 0px !important;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .text-brand-dark { color: #0A1622; }

                .bg-primary-soft {
                    background-color: rgba(13, 110, 253, 0.08);
                }

                .signup-card {
                    background: #ffffff;
                    border-radius: 24px !important;
                    box-shadow: 0 15px 35px rgba(10, 22, 34, 0.04);
                    margin-top: 0px !important;
                }

                .input-group-custom {
                    position: relative;
                    background: #fdfdfd;
                    border: 1px solid rgba(10, 22, 34, 0.12);
                    border-radius: 12px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .input-group-custom:focus-within {
                    border-color: #0D6EFD;
                    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
                }
                
                .input-icon-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .custom-input {
                    background: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    padding-left: 10px !important;
                    color: #0A1622 !important;
                    font-size: 14px;
                    font-weight: 500;
                    outline: none;
                }
                .custom-input::placeholder {
                    color: #a0aec0;
                }

                .custom-checkbox {
                    cursor: pointer;
                    border-radius: 4px !important;
                    border-color: rgba(10, 22, 34, 0.2);
                }
                .custom-checkbox:checked {
                    background-color: #0D6EFD;
                    border-color: #0D6EFD;
                }

                .btn-submit-action {
                    background: #0A1622;
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    font-size: 14px;
                    transition: all 0.25s ease;
                }
                .btn-submit-action:hover:not(:disabled) {
                    background: #0D6EFD;
                    color: #ffffff;
                    box-shadow: 0 5px 15px rgba(13, 110, 253, 0.25);
                    transform: translateY(-1px);
                }
                .btn-submit-action:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .hover-underline:hover {
                    text-decoration: underline !important;
                }
                `}
            </style>
            <Footer />
        </>
    );
};

export default SignUpPage;