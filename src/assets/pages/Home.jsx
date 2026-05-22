import React from 'react';
import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../ecrowN.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>

            <Navbar />
            <div className="landing-wrapper">
                {/* --- PREMIUM ENTERPRISE GLASS NAVBAR --- */}

                <main>
                    {/* --- SECTION 0: PREMIUM ENTERPRISE HERO --- */}
                    {/* <section className="premium-hero-static">
                        <div className="hero-overlay"></div>
                        <div className="container position-relative z-3 text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                            <div className="badge-premium mb-4">INTEGRATED INFRASTRUCTURE ARCHITECTURE</div>
                            <h1 className="hero-title fw-900 mb-3">
                                eCROWN TECHNOLOGIES O₂<br />
                                <span className="text-gradient-blue">...excellence at its peak.</span>
                            </h1>
                            <p className="hero-subtitle mb-5 opacity-90 max-w-2xl">
                                Engineering premium low-voltage structured cabling, enterprise surveillance setups, and high-performance network infrastructures for scalable operations.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <button className="btn-main-primary shadow-lg shimmer-effect d-flex align-items-center justify-content-center">
                                    Get Started Now <Lucide.ChevronRight size={24} className="ms-2" />
                                </button>

                            </div>
                        </div>
                    </section> */}

                    {/* --- SECTION 1: SYSTEM PERFORMANCE METRICS --- */}
                    {/* One Single, Unified Section Container */}
<div 
    id="heroBgCarousel" 
    className="carousel slide position-relative min-vh-100 overflow-hidden w-100" 
    data-bs-ride="carousel"
    data-bs-interval="3000"
    data-bs-pause="false"
    style={{ backgroundColor: '#0b0f19' }}
>
    <div className="carousel-inner h-100 min-vh-100">
        
        {/* Slide 1 */}
        <div className="carousel-item active position-relative min-vh-100 w-100" data-bs-interval="3000">
            {/* Background Image asset */}
            <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" 
                className="d-block w-100 h-100 position-absolute top-0 start-0 z-1 object-fit-cover min-vh-100" 
                alt="Enterprise Data Center Server Room" 
            />
            {/* Contrast Overlay layer */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-2" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.6) 100%)', backdropFilter: 'blur(1px)' }}></div>
            
            {/* Foreground Content moving with slide 1 */}
            <div className="container position-relative z-3 text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                <div className="badge-premium mb-4 px-3 py-2 rounded-pill fw-bold border border-white border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.08)', letterSpacing: '2px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    INTEGRATED INFRASTRUCTURE ARCHITECTURE
                </div>
                <h1 className="hero-title fw-900 mb-3 display-4" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.75)' }}>
                    eCROWN TECHNOLOGIES O₂<br />
                    <span className="text-gradient-blue fw-black">...excellence at its peak.</span>
                </h1>
                <p className="hero-subtitle mb-5 opacity-95 lead" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)', maxWidth: '750px' }}>
                    Engineering premium low-voltage structured cabling, enterprise surveillance setups, and high-performance network infrastructures for scalable operations.
                </p>
                <button className="btn-main-primary shadow-lg shimmer-effect d-flex align-items-center justify-content-center px-4 py-3 border-0 rounded">
                    Get Started Now <Lucide.ChevronRight size={24} className="ms-2" />
                </button>
            </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item position-relative min-vh-100 w-100" data-bs-interval="3000">
            {/* Background Image asset */}
            <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80" 
                className="d-block w-100 h-100 position-absolute top-0 start-0 z-1 object-fit-cover min-vh-100" 
                alt="Network Structured Cabling Infrastructure" 
            />
            {/* Contrast Overlay layer */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-2" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.6) 100%)', backdropFilter: 'blur(1px)' }}></div>
            
            {/* Foreground Content moving with slide 2 */}
            <div className="container position-relative z-3 text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                <div className="badge-premium mb-4 px-3 py-2 rounded-pill fw-bold border border-white border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.08)', letterSpacing: '2px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    LOW-VOLTAGE STRUCTURED CABLING
                </div>
                <h1 className="hero-title fw-900 mb-3 display-4" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.75)' }}>
                    eCROWN TECHNOLOGIES O₂<br />
                    <span className="text-gradient-blue fw-black">...excellence at its peak.</span>
                </h1>
                <p className="hero-subtitle mb-5 opacity-95 lead" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)', maxWidth: '750px' }}>
                    Engineering premium low-voltage structured cabling, enterprise surveillance setups, and high-performance network infrastructures for scalable operations.
                </p>
                <button className="btn-main-primary shadow-lg shimmer-effect d-flex align-items-center justify-content-center px-4 py-3 border-0 rounded">
                    Get Started Now <Lucide.ChevronRight size={24} className="ms-2" />
                </button>
            </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item position-relative min-vh-100 w-100" data-bs-interval="3000">
            {/* Background Image asset */}
            <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80" 
                className="d-block w-100 h-100 position-absolute top-0 start-0 z-1 object-fit-cover min-vh-100" 
                alt="Modern Security Surveillance Monitoring Setup" 
            />
            {/* Contrast Overlay layer */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-2" style={{ background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.6) 100%)', backdropFilter: 'blur(1px)' }}></div>
            
            {/* Foreground Content moving with slide 3 */}
            <div className="container position-relative z-3 text-white d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
                <div className="badge-premium mb-4 px-3 py-2 rounded-pill fw-bold border border-white border-opacity-10" style={{ background: 'rgba(255, 255, 255, 0.08)', letterSpacing: '2px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    ENTERPRISE SURVEILLANCE SETUPS
                </div>
                <h1 className="hero-title fw-900 mb-3 display-4" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.75)' }}>
                    eCROWN TECHNOLOGIES O₂<br />
                    <span className="text-gradient-blue fw-black">...excellence at its peak.</span>
                </h1>
                <p className="hero-subtitle mb-5 opacity-95 lead" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)', maxWidth: '750px' }}>
                    Engineering premium low-voltage structured cabling, enterprise surveillance setups, and high-performance network infrastructures for scalable operations.
                </p>
                <button className="btn-main-primary shadow-lg shimmer-effect d-flex align-items-center justify-content-center px-4 py-3 border-0 rounded">
                    Get Started Now <Lucide.ChevronRight size={24} className="ms-2" />
                </button>
            </div>
        </div>

    </div>
</div>

                    {/* --- SECTION 2: ARCHITECTURE HIGHLIGHT --- */}
                    <section className="py-5 bg-white">
                        <div className="container py-lg-5">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6">
                                    <h4 className="text-brand-blue fw-bold mb-1">Your Operational Blueprint.</h4>
                                    <h2 className="text-brand-dark display-6 fw-bold mb-4">We Handle Your Mission-Critical Hardware Infrastructure.</h2>
                                    <div className="text-muted mb-4 pe-lg-5">
                                        <p>When you partner with eCROWN TECHNOLOGIES O₂, you acquire premium low-voltage blueprints and structured frameworks designed to maximize data delivery, fortify facility protection, and sustain cross-platform efficiency.</p>
                                    </div>
                                    <Link to="/request" className="text-decoration-none">
                                        <button className="btn btn-brand-primary rounded-pill px-4 py-2 fw-bold">Schedule On-Site Inspection</button>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row g-2">
                                        <div className="col-4">
                                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600" className="w-100 h-100 d-block object-fit-cover rounded shadow-sm minimal-image" alt="Server Infrastructure" />
                                        </div>
                                        <div className="col-4">
                                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" className="w-100 h-100 d-block object-fit-cover rounded shadow-sm minimal-image" alt="Data Network Nodes" />
                                        </div>
                                        <div className="col-4">
                                            <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600" className="w-100 h-100 d-block object-fit-cover rounded shadow-sm minimal-image" alt="CCTV System Array" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 3: CORE ATTRIBUTES GRID --- */}
                    <section className="one-partner-section py-5">
                        <div className="container py-lg-5">
                            <div className="row align-items-center text-white">
                                <div className="col-lg-7">
                                    <div className="row g-5 text-center">
                                        <div className="col-6">
                                            <div className="partner-icon-box mb-3 mx-auto"><Lucide.Server size={48} className="text-info-light" /></div>
                                            <div className="small fw-bold">TIA/EIA Compliant <br /> Structured Cabling</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="partner-icon-box mb-3 mx-auto"><Lucide.Shield size={48} className="text-info-light" /></div>
                                            <div className="small fw-bold">Commercial CCTV & <br /> AI-Powered Analytics</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="partner-icon-box mb-3 mx-auto"><Lucide.Radio size={48} className="text-info-light" /></div>
                                            <div className="small fw-bold">Unified Routing & <br /> Switching Topologies</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="partner-icon-box mb-3 mx-auto"><Lucide.Activity size={48} className="text-info-light" /></div>
                                            <div className="small fw-bold">Precision Smart System <br /> Automation Control</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 ps-lg-5 mt-5 mt-lg-0">
                                    <h2 className="fw-bold mb-3 h1">End-to-End</h2>
                                    <h2 className="fw-bold mb-3 h1">Unified Delivery</h2>
                                    <h2 className="fw-bold h1 text-info-cyan">One Definitive Engineering Group.</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 4: DEPLOYMENT SECTORS --- */}
                    <section className="py-5 bg-white">
                        <div className="container py-lg-5">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-3">
                                    <h2 className="text-brand-dark fw-bold display-6">Sectors <span className="text-brand-blue">We Transform</span></h2>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-3">
                                        {[
                                            { title: "Corporate Facilities", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" },
                                            { title: "Logistics Hubs", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600" },
                                            { title: "Medical Centers", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600" },
                                            { title: "Data Command Labs", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600" }
                                        ].map((industry, i) => (
                                            <div key={i} className="col-md-3 col-6">
                                                <div className="industry-card position-relative overflow-hidden rounded mb-3 shadow-sm" style={{ height: '280px' }}>
                                                    <img src={industry.img} alt={industry.title} className="w-100 h-100 object-fit-cover transition-all" />
                                                </div>
                                                <h6 className="fw-bold text-brand-dark text-center text-md-start">{industry.title}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* --- SECTION 7: LIFECYCLE INFOGRAPHIC --- */}
                    <section className="lifecycle-process-section py-5 text-white">
                        <div className="container py-lg-5">
                            <div className="text-center mb-5 pb-4">
                                <h2 className="fw-bold h1">The Infrastructure Lifecycle Blueprint</h2>
                                <p className="text-info-light lead">Rigorous engineering milestones from discovery to complete structural execution.</p>
                            </div>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <div className="lifecycle-infographic mx-auto shadow-lg">
                                        <div className="center-orb"><Lucide.Lightbulb size={40} className="text-white" /></div>
                                        <div className="orbit-item pos-top"><Lucide.Search size={24} /><span>Analyze & Map</span></div>
                                        <div className="orbit-item pos-right"><Lucide.Package size={24} /><span>Procure & Stage</span></div>
                                        <div className="orbit-item pos-bottom-right"><Lucide.MapPin size={24} /><span>Implement Array</span></div>
                                        <div className="orbit-item pos-bottom-left"><Lucide.Headphones size={24} /><span>Certify Drops</span></div>
                                        <div className="orbit-item pos-left"><Lucide.RotateCcw size={24} /><span>Sustain & Evolve</span></div>
                                        <div className="inner-circle-border"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="mb-4"><h5 className="fw-bold text-info-light">1. Analyze & Map</h5><p className="small opacity-75">Comprehensive structural assessments and CAD wire diagram blueprints.</p></div>
                                            <div className="mb-4"><h5 className="fw-bold text-info-light">2. Procure & Stage</h5><p className="small opacity-75">Sourcing verified solid copper Cat6/Cat6A, fiber lines, and server racks.</p></div>
                                            <div><h5 className="fw-bold text-info-light">3. Implement Array</h5><p className="small opacity-75">Professional structural drop installation, ceiling pathways, and rack termination.</p></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4"><h5 className="fw-bold text-info-light">4. Certify Drops</h5><p className="small opacity-75">Rigorous signal verification and hardware attenuation testing to ensure max data delivery.</p></div>
                                            <div><h5 className="fw-bold text-info-light">5. Sustain & Evolve</h5><p className="small opacity-75">Proactive infrastructure expansion management and lifecycle component modifications.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 8: FINAL CTA --- */}
                    <section className="py-5 bg-white">
                        <div className="container py-5 text-center">
                            <h2 className="text-brand-dark fw-bold display-6 mb-3">Build an Unshakable Technological Base Today.</h2>
                            <p className="text-muted lead mb-5">Partner with eCROWN TECHNOLOGIES O₂ to anchor your physical network assets cleanly.</p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">

                                <Link to="/request" className="text-decoration-none">
                                    <button className="btn btn-brand-primary px-5 py-3 fw-bold rounded-pill shadow">Request Systems Consultation</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />

                <style>{`
                 @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
                
                .landing-wrapper { 
                    font-family: 'Plus Jakarta Sans', sans-serif; 
                    overflow-x: hidden; 
                    width: 100%; 
                    color: #0A1622;
                }
                
                /* --- PREMIUM ENTERPRISE GLASS NAVBAR STYLING --- */
                .premium-glass-navbar {
                    background: rgba(255, 255, 255, 0.9) !important;
                    border-bottom: 1px solid rgba(10, 22, 34, 0.06) !important;
                    box-shadow: 0 8px 32px rgba(10, 22, 34, 0.04);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    backdrop-filter: blur(12px) !important;
                }
                
                .text-brand-dark { color: #0A1622 !important; }
                .text-brand-blue { color: #0D6EFD !important; }

                .nav-menu-rounded { margin-left: auto; gap: 0.25rem; }
                @media (min-width: 992px) {
                    .nav-menu-rounded {
                        background: #ffffff;
                        border-radius: 32px;
                        padding: 0.35rem 0.9rem;
                        box-shadow: 0 10px 30px rgba(10, 22, 34, 0.05);
                    }
                }

                .premium-nav-item .nav-link {
                    font-weight: 600;
                    font-size: 14px;
                    color: #0A1622 !important;
                    transition: all 0.25s ease;
                    padding: 0.5rem 0.85rem !important;
                    border-radius: 999px;
                }
                .premium-nav-item:hover .nav-link {
                    color: #0D6EFD !important;
                    background: rgba(13, 110, 253, 0.06);
                }
                
                .dropdown-arrow-icon { transition: transform 0.3s ease; }
                .premium-nav-item:hover .dropdown-arrow-icon { transform: rotate(180deg); color: #0D6EFD; }

                .premium-dropdown {
                    background: #ffffff !important;
                    border: 1px solid rgba(10, 22, 34, 0.06) !important;
                    border-radius: 12px !important;
                    padding: 10px;
                    box-shadow: 0 12px 36px rgba(10, 22, 34, 0.1) !important;
                }
                .premium-dropdown .dropdown-item {
                    font-weight: 500;
                    font-size: 14px;
                    color: #0A1622;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .premium-dropdown .dropdown-item:hover {
                    background-color: rgba(13, 110, 253, 0.06) !important;
                    color: #0D6EFD !important;
                    transform: translateX(4px);
                }

                .btn-nav-outline {
                    border: 1.5px solid #0A1622;
                    color: #0A1622;
                    background: transparent;
                    border-radius: 24px !important;
                    transition: all 0.3s ease;
                }
                .btn-nav-outline:hover {
                    background: rgba(10, 22, 34, 0.05);
                }
                .btn-nav-primary {
                    background-color: #0A1622;
                    color: white;
                    border: 1.5px solid #0A1622;
                    border-radius: 24px !important;
                    transition: all 0.3s ease;
                }
                .btn-nav-primary:hover {
                    background-color: #0D6EFD;
                    border-color: #0D6EFD;
                    box-shadow: 0 4px 14px rgba(13, 110, 253, 0.25);
                }

                @media (min-width: 992px) {
                    .nav-item.dropdown:hover .dropdown-menu {
                        display: block;
                        margin-top: 8px;
                        opacity: 1;
                        visibility: visible;
                    }
                    .dropdown-menu {
                        display: block;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        transform: translateY(10px);
                    }
                    .nav-item.dropdown:hover .dropdown-menu { transform: translateY(0); }
                }

                .animate-fade-in { animation: fadeIn 0.2s ease-in; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

                /* --- HERO & SURFACE COMPONENT STYLING --- */
                .premium-hero-static { 
                    position: relative; 
                    min-height: 100vh; 
                    background-image: url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    display: flex;
                    align-items: center;
                }
                .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(5,15,26,0.95) 0%, rgba(10,22,34,0.75) 100%); z-index: 1; }
                .hero-title { font-size: clamp(2.2rem, 7vw, 4rem); letter-spacing: -1.5px; line-height: 1.15; }
                .text-gradient-blue { background: linear-gradient(to right, #0D6EFD, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .badge-premium { background: rgba(13, 110, 253, 0.12); border: 1px solid #0D6EFD; color: #00d4ff; padding: 6px 18px; border-radius: 50px; font-weight: 700; font-size: 11px; letter-spacing: 1.5px; }

                .stats-bar { background: linear-gradient(90deg, #061321 0%, #0A1622 100%); border-bottom: 1px solid rgba(255,255,255,0.05); }
                .one-partner-section { background: radial-gradient(circle at center, #0a2440 0%, #050d14 100%); }
                .partner-icon-box { width: 76px; height: 76px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; background: rgba(255,255,255,0.02); }
                
                .oem-dark-logo { max-height: 30px; width: auto !important; object-fit: contain; filter: grayscale(1) brightness(0.3); opacity: 0.5; transition: all 0.3s ease; }
                .oem-dark-logo:hover { filter: grayscale(0) brightness(1); opacity: 1; }

                .industry-card { background: #0A1622; }
                .industry-card img { filter: brightness(0.85); transition: transform 0.5s ease; }
                .industry-card:hover img { transform: scale(1.06); filter: brightness(1); }

                /* --- COMPLEX PROCESS LIFECYCLE MAP --- */
                .lifecycle-process-section { background: radial-gradient(circle at 10% 50%, #061524 0%, #030a12 100%); }
                .lifecycle-infographic { 
                    width: 380px; 
                    height: 380px; 
                    position: relative; 
                    border-radius: 50%; 
                    border: 1px solid rgba(13, 110, 253, 0.15); 
                    background: rgba(255,255,255,0.01); 
                    max-width: 100%;
                }
                .center-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px; height: 90px; background: #0D6EFD; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 32px rgba(13, 110, 253, 0.4); z-index: 5; }
                .orbit-item { position: absolute; width: 54px; height: 54px; background: #0A1622; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translate(-50%, -50%); border: 1px solid rgba(255,255,255,0.1); }
                .orbit-item span { position: absolute; width: 130px; font-size: 11px; font-weight: 600; text-align: center; top: 60px; color: #ffffff; }
                .pos-top { top: 0%; left: 50%; } .pos-right { top: 35%; left: 100%; } .pos-bottom-right { top: 85%; left: 85%; } .pos-bottom-left { top: 85%; left: 15%; } .pos-left { top: 35%; left: 0%; }
                .inner-circle-border { position: absolute; inset: 15%; border: 1.5px dashed rgba(13, 110, 253, 0.1); border-radius: 50%; }

                .footer-extended { background-color: #050d14; color: white; }
                .social-icon-circle { width: 28px; height: 28px; background: rgba(255,255,255,0.06); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; }
                .btn-secondary-gray { background-color: #f1f2f4; color: #0A1622; border: none; }
                .btn-secondary-gray:hover { background-color: #e2e4e8; }
                .btn-brand-primary { background-color: #0A1622; color: white; border: none; }
                .btn-brand-primary:hover { background-color: #0D6EFD; color: white; }
                
                .btn-main-primary { background: #0D6EFD; color: white; border: none; padding: 16px 40px; border-radius: 8px; font-weight: 700; position: relative; overflow: hidden; transition: all 0.25s; }
                .btn-main-primary:hover { background: #0b5ed7; transform: translateY(-2px); }
                .btn-outline-white { border: 1.5px solid white; color: white; padding: 16px 40px; border-radius: 8px; background: transparent; font-weight: 600; transition: all 0.25s; }
                .btn-outline-white:hover { background: white; color: #0A1622; }
                
                .btn-info-cyan-outline { border: 1px solid #00d4ff; color: #00d4ff; background: transparent; transition: all 0.25s; }
                .btn-info-cyan-outline:hover { background: #00d4ff; color: #050d14; }
                .text-info-light { color: #00d4ff !important; }
                .text-info-cyan { color: #00d4ff !important; }
                .letter-spacing-2 { letter-spacing: 2px; }
                .z-3 { z-index: 3; } .z-1 { z-index: 1; }
                
                .minimal-image { filter: grayscale(0.2); transition: all 0.4s ease; }
                .minimal-image:hover { filter: grayscale(0); transform: translateY(-4px); }

                .shimmer-effect::after { content: ''; position: absolute; inset: -50%; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.25), transparent); transform: rotate(45deg); animation: shm 3.5s infinite; }
                @keyframes shm { 0% { transform: translateX(-100%) rotate(45deg); } 100% { transform: translateX(100%) rotate(45deg); } }
            `}</style>
            </div>

        </>

    );
};

export default Home;