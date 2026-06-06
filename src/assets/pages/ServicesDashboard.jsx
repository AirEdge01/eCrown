import React, { useState, useEffect } from 'react'; 
import * as Lucide from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesDashboard = () => {
    const navigate = useNavigate(); 
  

  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    
    if (!storedUserData) {
      navigate('/error');
    }
  },
   [storedUserData, navigate]);

  
  if (!storedUserData) {
    return null;
  }

    // Array definition mapping updated eCrown core tech titles, icons, and dynamic target routes
    const ecrownServices = [
        {
            title: "A/v & Digital Signage",
            description: "High-end commercial audio systems, dynamic display array matrixes, video walls, and customized corporate media distribution networks.",
            icon: <Lucide.Tv size={24} />,
            tag: "Media Systems",
            path: "/digital"
        },
        {
            title: "CCTV Camera & IP Camera",
            description: "Advanced IP security camera systems, multi-node enterprise CCTV arrays, motion matrix software zoning, and central control monitoring setups.",
            icon: <Lucide.ShieldCheck size={24} />,
            tag: "Security",
            path: "/cctv"
        },
        {
            title: "Low-voltage Runs",
            description: "Precision low-voltage infrastructure pathways, conduit signaling arrangements, signaling runs, and local compliance wiring installations.",
            icon: <Lucide.Cpu size={24} />,
            tag: "Electrical Hardware",
            path: "/low"
        },
        {
            title: "Low-Voltage Structured Cabling",
            description: "High-performance data infrastructure layouts, fiber optic backbone terminations, category copper links, and flawless patch panel organization.",
            icon: <Lucide.Network size={24} />,
            tag: "Data Infrastructure",
            path: "/structure"
        },
        {
            title: "Point Of Sales",
            description: "Enterprise point-of-sale terminal configurations, register data integrations, receipt matrix loops, and local transaction node setups.",
            icon: <Lucide.ShoppingBag size={24} />,
            tag: "Retail Hardware",
            path: "/pos"
        },
        {
            title: "Self-Checkout",
            description: "Automated kiosk installation matrixes, integrated weighing scale units, biometric peripheral setups, and hardware diagnostics.",
            icon: <Lucide.Monitor size={24} />,
            tag: "Automation Kiosks",
            path: "/self"
        },
        {
            title: "Satellite Networking",
            description: "Robust remote commercial satellite downlink setups, terminal positioning infrastructure, high-altitude path engineering, and failover pathways.",
            icon: <Lucide.Orbit size={24} />,
            tag: "Aerospace Comms",
            path: "/lite"
        },
        {
            title: "Server & Storage",
            description: "Secure localized data center equipment racks, modular storage area arrays (SAN/NAS), failover recovery matrixes, and physical optimization.",
            icon: <Lucide.Server size={24} />,
            tag: "Data Storage",
            path: "/server"
        },
        {
            title: "Wireless Networking",
            description: "Broad-spectrum corporate Wi-Fi architectures, localized wireless controllers, signal propagation mappings, and high-density user load management.",
            icon: <Lucide.Wifi size={24} />,
            tag: "Network Comms",
            path: "/wireless"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="dashboard-layout-wrapper m-0 p-0">

                {/* --- Main Dashboard Panel Workspace --- */}
                <main className="main-content-panel p-4 p-md-5">
                    <div className="container">

                        {/* Header Context Bar */}
                        <header className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center pb-4 mb-4 border-bottom border-light">
                            <div>
                                <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill fw-bold mb-2 small tracking-wide">
                                    ENTERPRISE PORTAL
                                </span>
                                <h1 className="font-display fw-bold text-brand-dark mb-1">Service Management Portal</h1>
                            </div>
                        </header>

                        {/* --- Premium Hero Section --- */}
                        <div className="dashboard-hero-section card border-0 overflow-hidden mb-5">
                            <div className="card-body p-4 p-md-5 d-flex flex-column flex-xl-row justify-content-between align-items-xl-center relative-box position-relative">

                                {/* Hero Text Information */}
                                <div className="hero-text-container col-12 col-xl-8">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <span className="hero-pulse-dot"></span>
                                        <span className="text-white-50 extra-small fw-bold tracking-wider uppercase">CENTRAL ARCHITECTURE CONSOLE</span>
                                    </div>
                                    <h2 className="text-white fw-bold font-display mb-3 fs-3">
                                        Welcome to your Integrated Technology Infrastructure Command
                                    </h2>
                                    <p className="text-white-50 small hero-para mb-0">
                                        This workspace consolidates the **9 critical deployment pillars** of eCrown Technologies into a unified interface. Engineered as a centralized business intelligence layer, it allows administrators to orchestrate infrastructure requests, track procurement pipeline progress, evaluate operational configurations, and audit physical systems data—ensuring elite performance margins from structured data cabling down to green energy storage matrix arrays.
                                    </p>
                                </div>

                                {/* Hero Quick Stat Metrics Indicator */}
                                <div className="hero-metric-badge mt-4 mt-xl-0 d-flex align-items-center gap-3 p-3 rounded-4">
                                    <div className="metric-icon-box bg-white text-dark rounded-3 d-flex align-items-center justify-content-center">
                                        <Lucide.Boxes size={22} />
                                    </div>
                                    <div>
                                        <Link to="/order" className="text-decoration-none text-white-50 extra-small fw-medium d-flex align-items-center gap-1">
                                            <div className="text-white fs-4 fw-bold font-display leading-tight">09 / 09 Pillars</div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Subtle Background Radial Aura Accent */}
                                <div className="hero-radial-accent position-absolute"></div>
                            </div>
                        </div>

                        {/* --- Grid Layout Container for the 9 Updated Services --- */}
                        <div className="row g-4 mb-5" id="services-grid-anchor">
                            {ecrownServices.map((service, idx) => (
                                <div key={idx} className="col-12 col-md-6 col-xl-4">
                                    <div className="card service-glass-card border-0 h-100 p-4 transition-transform">
                                        <div className="card-body p-0 d-flex flex-column justify-content-between">

                                            <div>
                                                {/* Card Top Section: Icon and Tag Line */}
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div className="service-icon-frame d-flex align-items-center justify-content-center text-primary rounded-3">
                                                        {service.icon}
                                                    </div>
                                                    <span className="badge bg-light text-muted border px-2.5 py-1 rounded-pill extra-small fw-semibold">
                                                        {service.tag}
                                                    </span>
                                                </div>

                                                {/* Card Core Content Text */}
                                                <h4 className="fw-bold text-brand-dark mb-2 font-display fs-5">
                                                    {service.title}
                                                </h4>
                                                <p className="text-muted small-description mb-4">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Action Bar: Modernized View Link + Call for Installation Button Trigger */}
                                            <div className="pt-3 border-top border-light-soft d-flex align-items-center justify-content-between gap-2">
                                                <Link
                                                    to={service.path}
                                                    className="text-primary small fw-bold tracking-wide text-decoration-none d-inline-flex align-items-center gap-1 hover-gap-view"
                                                >
                                                    View Now <Lucide.ArrowRight size={14} className="arrow-icon" />
                                                </Link>

                                                <Link 
                                                    to="/install" 
                                                    className="btn btn-installation-action py-1.5 px-3 rounded-3 small fw-bold d-inline-flex align-items-center gap-1 text-decoration-none shadow-sm"
                                                >
                                                    <Lucide.PhoneCall size={13} /> Installation
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* --- Commercial Procurement & Field Installation Action Hub --- */}
                        <div className="procurement-cta-section card border-0 p-4 p-md-5 rounded-4 position-relative overflow-hidden mb-4">
                            <div className="row align-items-center relative-box position-relative z-1">
                                <div className="col-12 col-xl-7 mb-4 mb-xl-0">
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span className="badge bg-white text-primary border px-3 py-1.5 rounded-pill extra-small fw-bold tracking-wide shadow-sm">
                                            HARDWARE & DEPLOYMENT HUB
                                        </span>
                                    </div>
                                    <h3 className="fw-bold text-brand-dark font-display mb-2 fs-4">
                                        Ready to Source Hardware or Schedule Field Deployments?
                                    </h3>
                                    <p className="text-muted small mb-0 dynamic-cta-para">
                                        Access our certified B2B technology marketplace to purchase verified corporate systems hardware—ranging from optical link patch panels to terminal POS units. Need specialized setup? Instantly bridge the gap by scheduling our on-site infrastructure engineers for immediate field installations.
                                    </p>
                                </div>
                                <div className="col-12 col-xl-5 d-flex flex-column flex-sm-row justify-content-xl-end gap-3">
                                    <Link
                                        to="/order"
                                        className="btn btn-primary btn-procure py-3 px-4 rounded-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold shadow-sm text-decoration-none"
                                    >
                                        <Lucide.ShoppingBag size={18} /> Browse Products Store
                                    </Link>

                                    <Link
                                        to="/install"
                                        className="btn btn-outline-dark btn-field-call py-3 px-4 rounded-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold bg-white text-brand-dark border shadow-sm text-decoration-none"
                                    >
                                        <Lucide.PhoneCall size={17} /> Request Installation
                                    </Link>
                                </div>
                            </div>
                            {/* Background structural accent loops */}
                            <div className="cta-abstract-bg position-absolute"></div>
                        </div>

                    </div>
                </main>
            </div>

            {/* Custom Embedded Clean CSS Stylesheet */}
            <style>
                {`
                .dashboard-layout-wrapper {
                    background: #f8fafe;
                    min-height: 100vh;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .text-brand-dark { color: #0A1622; }
                .bg-primary-soft { background-color: rgba(13, 110, 253, 0.06); }
                .bg-light-soft { background-color: rgba(10, 22, 34, 0.02); }
                .border-light-soft { border-top: 1px solid rgba(10, 22, 34, 0.05) !important; }
                
                .extra-small { font-size: 11px; }
                .small-description {
                    font-size: 13.5px;
                    line-height: 1.6;
                    color: #64748b;
                    min-height: 65px;
                }

                /* --- Core Workspace Area --- */
                .main-content-panel {
                    background: #f8fafe;
                    width: 100%;
                }

                /* --- Premium Dashboard Hero Section CSS --- */
                .dashboard-hero-section {
                    background: linear-gradient(135deg, #0A1622 0%, #162a3d 100%);
                    border-radius: 24px !important;
                    box-shadow: 0 10px 30px rgba(10, 22, 34, 0.15);
                }
                .hero-para {
                    max-width: 740px;
                    line-height: 1.65;
                }
                .hero-pulse-dot {
                    width: 7px;
                    height: 7px;
                    background-color: #38bdf8;
                    border-radius: 50%;
                    display: inline-block;
                    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.3);
                }
                .hero-metric-badge {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    min-width: 210px;
                }
                .metric-icon-box {
                    width: 44px;
                    height: 44px;
                }
                .hero-radial-accent {
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, rgba(0,0,0,0) 70%);
                    top: -100px;
                    right: -50px;
                    pointer-events: none;
                }

                /* --- Modern Glassmorphic Premium Service Cards --- */
                .service-glass-card {
                    background: #ffffff;
                    border-radius: 20px !important;
                    box-shadow: 0 4px 18px rgba(10, 22, 34, 0.02);
                    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
                }
                
                .service-glass-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(10, 22, 34, 0.06);
                }

                .service-icon-frame {
                    width: 48px;
                    height: 48px;
                    background: rgba(13, 110, 253, 0.08);
                    color: #0D6EFD !important;
                }

                /* --- Micro-interactions and Actions Styles --- */
                .hover-gap-view {
                    transition: gap 0.2s ease;
                }
                .service-glass-card:hover .hover-gap-view {
                    gap: 6px !important;
                }
                .arrow-icon {
                    transition: transform 0.2s ease;
                }
                .service-glass-card:hover .arrow-icon {
                    transform: translateX(2px);
                }

                .btn-installation-action {
                    background: #0A1622;
                    color: #ffffff;
                    border: none;
                    font-size: 12.5px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }
                .btn-installation-action:hover {
                    background: #0D6EFD;
                    color: #ffffff;
                    transform: scale(1.02);
                }

                /* --- Brand New Section Styles --- */
                .procurement-cta-section {
                    background: #ffffff;
                    border: 1px solid rgba(13, 110, 253, 0.09) !important;
                    border-radius: 24px !important;
                    box-shadow: 0 12px 30px rgba(13, 110, 253, 0.02);
                }
                .dynamic-cta-para {
                    max-width: 680px;
                    line-height: 1.6;
                }
                .btn-procure {
                    font-size: 14.5px;
                    transition: all 0.25s ease;
                }
                .btn-procure:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(13, 110, 253, 0.25);
                }
                .btn-field-call {
                    font-size: 14.5px;
                    transition: all 0.25s ease;
                }
                .btn-field-call:hover {
                    background: rgba(10, 22, 34, 0.03) !important;
                    transform: translateY(-2px);
                }
                .cta-abstract-bg {
                    width: 250px;
                    height: 250px;
                    background: radial-gradient(circle, rgba(13, 110, 253, 0.04) 0%, rgba(0,0,0,0) 70%);
                    bottom: -80px;
                    right: -40px;
                    pointer-events: none;
                }
                `}
            </style>
            <Footer />
        </>
    );
};

export default ServicesDashboard;