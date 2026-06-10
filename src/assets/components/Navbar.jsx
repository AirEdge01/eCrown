import React from 'react';
import * as Lucide from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../ecrowN.png';

const Navbar = () => {
    const navigate = useNavigate();

    const isAuthenticated = () => {
        const sessionRaw = localStorage.getItem('authSession');
        if (!sessionRaw) return false;

        try {
            const session = JSON.parse(sessionRaw);
            return session && session.loggedIn === true && typeof session.token === 'string' && session.token.length > 0;
        } catch {
            localStorage.removeItem('authSession');
            return false;
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top premium-glass-navbar py-3" id="main-nav">
                <div className="container">
                    <Link to="/" className="navbar-brand font-display fw-bold text-brand-dark d-flex align-items-center gap-2 text-decoration-none" style={{ position: 'relative', overflow: 'visible' }}>
                        {/* Applied 'logo-responsive' class here */}
                        <img src={logo} alt="eCROWN logo" className="img-fluid logo-responsive" />
                    </Link>

                    <button className="navbar-toggler border-0 shadow-none text-brand-dark" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav">
                        <Lucide.Menu size={24} />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="basic-navbar-nav">
                        <ul className="navbar-nav nav-menu-rounded align-items-center">
                            <li className="nav-item premium-nav-item">
                                <Link to="/" className="nav-link px-3">HOME</Link>
                            </li>

                            <li className="nav-item premium-nav-item">
                                <Link to="/about" className="nav-link px-3">ABOUT</Link>
                            </li>

                            <li className="nav-item dropdown premium-nav-item">
                                <button className="nav-link px-3 d-flex align-items-center gap-1 btn btn-link p-0" type="button" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services Hub<Lucide.ChevronDown size={14} className="dropdown-arrow-icon" />
                                </button>
                                <ul className="dropdown-menu premium-dropdown border-0 shadow-lg animate-fade-in" aria-labelledby="servicesDropdown">
                                    <li><Link to="/digital" className="dropdown-item py-2">A/V & Digital Signage</Link></li>
                                    <li><Link to="/cctv" className="dropdown-item py-2">CCTV Camera & IP Camera</Link></li>
                                    <li><Link to="/low" className="dropdown-item py-2">Low-Voltage Runs</Link></li>
                                    <li><Link to="/structure" className="dropdown-item py-2">Low-voltage Structured Cabling</Link></li>
                                    <li><Link to="/pos" className="dropdown-item py-2">Point Of Sales</Link></li>
                                    <li><Link to="/self" className="dropdown-item py-2">Self-checkout</Link></li>
                                    <li><Link to="/lite" className="dropdown-item py-2">Satellite Networking</Link></li>
                                    <li><Link to="/server" className="dropdown-item py-2">Server/Storage</Link></li>
                                    <li><Link to="/wireless" className="dropdown-item py-2">Wireless Networking</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item premium-nav-item">
                                <Link to="/contact" className="nav-link px-3">CONTACT</Link>
                            </li>

                            {/* ── ACTION INTERACTIVE CALL BLOCK ── */}
                            <li className="nav-item ms-lg-4 mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-2 w-100 w-lg-auto align-items-center">
                                {/* Admin Product Inventory Portal */}
                                <Link to="/order" className="text-decoration-none w-100 w-lg-auto">
                                    <button className="btn btn-nav-solid d-flex align-items-center justify-content-center gap-2 px-3 py-2 fw-semibold small w-100">
                                        <Lucide.ShoppingBag size={14} /> Browse Products
                                    </button>
                                </Link>

                                {/* Structural Installation Request */}
                                <Link to="/install" className="text-decoration-none w-100 w-lg-auto">
                                    <button className="btn btn-nav-outline d-flex align-items-center justify-content-center px-3 py-2 fw-semibold small w-100">
                                        Request Service
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <style>
                {`
        /* --- Logo Responsiveness --- */
        .navbar-brand { overflow: visible !important; }
        .logo-responsive {
            height: 61px;
            width: 32px;
            object-fit: contain;
            transform: scale(8);
            transform-origin: left center;
            transition: transform 0.3s ease;
            display: block;
        }

        /* Slightly smaller logo on narrow screens */
        @media (max-width: 992px) {
            .logo-responsive { transform: scale(6); }
        }

        /* --- Existing Styles --- */
        .premium-glass-navbar {
            background: rgba(255, 255, 255, 0.95) !important;
            border-bottom: 1px solid rgba(10, 22, 34, 0.06) !important;
            box-shadow: 0 8px 32px rgba(10, 22, 34, 0.04);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(12px) !important;
            z-index: 1030;
        }
        
        .nav-menu-rounded { margin-left: auto; gap: 0.25rem; }
        @media (min-width: 992px) {
            .nav-menu-rounded {
                background: #ffffff;
                border-radius: 32px;
                padding: 0.35rem 0.9rem;
                box-shadow: 0 10px 30px rgba(10, 22, 34, 0.05);
            }
        }
        .premium-nav-item .nav-link { font-weight: 600; font-size: 14px; color: #0A1622 !important; transition: all 0.25s ease; padding: 0.5rem 0.85rem !important; border-radius: 999px; }
        .premium-nav-item:hover .nav-link { color: #0D6EFD !important; background: rgba(13, 110, 253, 0.06); }
        .dropdown-arrow-icon { transition: transform 0.3s ease; }
        .premium-nav-item:hover .dropdown-arrow-icon { transform: rotate(180deg); color: #0D6EFD; }
        .premium-dropdown { background: #ffffff !important; border: 1px solid rgba(10, 22, 34, 0.06) !important; border-radius: 12px !important; padding: 10px; box-shadow: 0 12px 36px rgba(10, 22, 34, 0.1) !important; }
        .premium-dropdown .dropdown-item { font-weight: 500; font-size: 14px; color: #0A1622; border-radius: 8px; transition: all 0.2s ease; }
        .premium-dropdown .dropdown-item:hover { background-color: rgba(13, 110, 253, 0.06) !important; color: #0D6EFD !important; transform: translateX(4px); }
        
        /* --- Premium Dual Buttons System --- */
        .btn-nav-outline { 
            border: 1.5px solid #0A1622; 
            color: #0A1622; 
            background: transparent; 
            border-radius: 24px !important; 
            transition: all 0.3s ease; 
            white-space: nowrap;
        }
        .btn-nav-outline:hover { 
            background: rgba(10, 22, 34, 0.05); 
        }

        .btn-nav-solid {
            background: #0A1622;
            color: #ffffff;
            border: 1.5px solid #0A1622;
            border-radius: 24px !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            white-space: nowrap;
        }
        .btn-nav-solid:hover {
            background: #0D6EFD;
            border-color: #0D6EFD;
            color: #ffffff;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
        }

        @media (min-width: 992px) {
            .nav-item.dropdown:hover .dropdown-menu { display: block; margin-top: 8px; opacity: 1; visibility: visible; }
            .dropdown-menu { display: block; opacity: 0; visibility: hidden; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); transform: translateY(10px); }
            .nav-item.dropdown:hover .dropdown-menu { transform: translateY(0); }
        }

        .navbar-collapse { position: relative; }
        .navbar-collapse.show { z-index: 1040; }
        `}
            </style>
        </>
    );
}

export default Navbar;