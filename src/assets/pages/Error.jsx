import React from 'react';
import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div className="error-page-wrapper">
            <Navbar />
            <div className="error-glass-card text-center">
                {/* Icon Header */}
                <div className="icon-container mb-4">
                    <Lucide.ShieldAlert size={64} className="text-danger-glow" />
                </div>

                {/* Main Heading */}
                <h1 className="display-6 fw-800 text-white mb-3">Access Denied</h1>
                
                {/* Explanatory Body Copy */}
                <p className="text-muted-gray mb-5 small">
                    You need to be securely signed in to access the deployment dashboards, fleet infrastructure, and procurement metrics. Please authenticate your platform credentials to proceed.
                </p>

                {/* Action Buttons */}
                <div className="d-grid gap-3">
                    <button className="btn-error-primary">
                         <Link to="/signin" className="text-decoration-none text-white d-flex align-items-center justify-content-center gap-2">
                        <Lucide.LogIn size={20} className="me-2" /> Secure Sign In
                                </Link>
                    </button>

                    <div className="d-flex gap-2">
                        <button className="btn-error-outline flex-grow-1">
                                <Link to="/signup" className="text-decoration-none text-white d-flex align-items-center gap-1">
                            <Lucide.UserPlus size={18} className="me-2" /> Register Account
                            </Link>
                        </button>

                        <button className="btn-error-outline flex-grow-1">
                                <Link to="/" className="text-decoration-none text-white d-flex align-items-center gap-1">
                            <Lucide.ArrowLeft size={18} className="me-2" /> Home
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Component-Scoped Styles */}
            <style>{`
                .error-page-wrapper {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #05070A;
                    padding: 24px;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .error-glass-card {
                    width: 100%;
                    max-width: 440px;
                    background: rgba(10, 22, 34, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(24px);
                    -webkit-backdrop-filter: blur(24px);
                    border-radius: 28px;
                    padding: 45px 35px;
                    box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7);
                }

                .text-danger-glow {
                    color: #ef4444;
                    filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.45));
                }

                .btn-error-primary {
                    background: #0D6EFD;
                    color: #ffffff;
                    border: none;
                    padding: 14px;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.25s ease;
                    cursor: pointer;
                }

                .btn-error-primary:hover {
                    background: #0b5ed7;
                    transform: translateY(-1px);
                    box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
                }

                .btn-error-outline {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: #f8fafc;
                    padding: 12px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.25s ease;
                    cursor: pointer;
                }

                .btn-error-outline:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.15);
                    color: #ffffff;
                }

                .text-muted-gray { 
                    color: #94a3b8; 
                    line-height: 1.6; 
                    font-weight: 400;
                }
                
                .fw-800 { font-weight: 800; }
            `}</style>
        </div>
    );
};

export default Error;