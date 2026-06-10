import React, { useState } from 'react';
import * as Lucide from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();




    const handleSubmit = (e) => {
        e.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();
        const storedUserData = JSON.parse(localStorage.getItem('userData') || 'null');

        if (
            storedUserData &&
            storedUserData.email === normalizedEmail &&
            storedUserData.password === password
        ) {
            const userToStore = {
                ...storedUserData,
                token: storedUserData.token || `token_${Date.now()}`,
            };
            localStorage.setItem('userData', JSON.stringify(userToStore));
            localStorage.setItem(
                'authSession',
                JSON.stringify({ email: userToStore.email, token: userToStore.token, loggedIn: true })
            );

            alert('Login successful! WELCOME TO eCROWN TECHNOLOGIES.');
            navigate('/dashboard');
            return;
        }

        localStorage.removeItem('authSession');
        alert('Invalid credentials. Please verify details and try again.');
        return;
    };


    return (
        <>
            <Navbar />
            <div className="signin-page-wrapper d-flex justify-content-center m-0 p-0">
                <div className="container pt-0 pb-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6 col-xl-5">
                            <div className="card signin-card border-0 p-4 p-sm-5">
                                <div className="card-body">

                                    <div className="text-center mb-4">
                                        <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill fw-bold mb-3 small tracking-wide">
                                            SECURE ENTERPRISE GATEWAY
                                        </span>
                                        <h2 className="font-display fw-bold text-brand-dark mb-2">
                                            Account Login
                                        </h2>
                                        <p className="text-muted small mb-0">
                                            Access your network deployment dashboards and secure procurement tools.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        {/* Email Input */}
                                        <div className="mb-3">
                                            <label className="form-label small fw-semibold text-brand-dark">Enter Your Email</label>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <Lucide.Mail size={18} />
                                                </span>
                                                <input
                                                    type="email"
                                                    className="custom-input w-100 p-2"
                                                    placeholder="name@company.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Password Input */}
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <label className="form-label small fw-semibold text-brand-dark mb-0">Password</label>
                                                <a href="#forgot" className="text-decoration-none text-primary small fw-medium">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="input-group-custom d-flex align-items-center">
                                                <span className="input-icon-box text-muted ps-3">
                                                    <Lucide.Lock size={18} />
                                                </span>
                                                <input
                                                    type="password"
                                                    className="custom-input w-100 p-2"
                                                    placeholder="••••••••"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-submit-action w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2 mt-4 mb-4"
                                        >
                                            Secure Sign In <Lucide.LogIn size={18} />
                                        </button>
                                    </form>

                                    <div className="text-center pt-2 border-top border-light">
                                        <p className="small text-muted mb-0">
                                            New to the platform?{' '}
                                            <Link to="/signup" className="text-decoration-none text-primary fw-bold hover-underline">
                                                Create an Account
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                .signin-page-wrapper {
                    background: #f8fafe;
                    min-height: auto;
                    padding-top: 0px !important;
                    margin-top: 0px !important;
                    font-family: 'Inter', system-ui, sans-serif;
                }
                .text-brand-dark { color: #0A1622; }
                .bg-primary-soft { background-color: rgba(13, 110, 253, 0.08); }
                .signin-card {
                    background: #ffffff;
                    border-radius: 24px !important;
                    box-shadow: 0 15px 35px rgba(10, 22, 34, 0.04);
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
                .btn-submit-action {
                    background: #0A1622;
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    font-size: 14px;
                    transition: all 0.25s ease;
                }
                .btn-submit-action:hover {
                    background: #0D6EFD;
                    color: #ffffff;
                    box-shadow: 0 5px 15px rgba(13, 110, 253, 0.25);
                    transform: translateY(-1px);
                }
                .hover-underline:hover { text-decoration: underline !important; }
                `}
            </style>
            <Footer />
        </>
    );
};

export default SignInPage;