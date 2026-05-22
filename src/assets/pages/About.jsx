import React from 'react';
import * as Lucide from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const About = () => {
    return (
        <>
        <Navbar />
       


        <div className="about-wrapper">
            {/* --- SECTION 1: PREMIUM HERO BANNER --- */}
            <section className="about-hero position-relative d-flex align-items-center text-white">
                <div className="hero-overlay"></div>
                <div className="container position-relative z-3 text-center py-5">
                    <div className="badge-premium mb-3">INSTALLATION SERVICES</div>
                    <h1 className="display-4 fw-bold mb-2">
                        Who We Are at <span className="text-gradient-blue">eCROWN TECHNOLOGIES O₂</span>
                    </h1>

                    {/* Core Brand Pillars Sub-Banner matched exactly to the flyer's footer spacing */}
                    <div className="brand-pillars-ticker mb-4 d-flex justify-content-center align-items-center gap-2 gap-sm-4 text-uppercase fw-bold tracking-widest">
                        <span className="pillar-item">Technology</span>
                        <span className="pillar-divider">|</span>
                        <span className="pillar-item">Innovation</span>
                        <span className="pillar-divider">|</span>
                        <span className="pillar-item">Excellence</span>
                    </div>

                    <p className="lead max-w-2xl mx-auto opacity-90">
                        Setting pristine architectural benchmarks in structural low-voltage cabling configurations, industrial networking grids, and enterprise physical property automation layers.
                    </p>
                </div>
            </section>

            {/* --- SECTION 2: IDENTITY, MISSION & OPERATING PRINCIPLE --- */}
            <section className="py-5 bg-white">
                <div className="container py-lg-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <span className="text-brand-blue fw-bold text-uppercase tracking-wider small d-block mb-2">Our Manifesto</span>
                                <h2 className="text-brand-dark d-flex flex-column gap-1 fw-bold mb-4">
                                    <span>Architecting Infrastructure</span>
                                    <span className="h4 text-muted fw-normal">For Decades of Scalable Operations</span>
                                </h2> 

                                {/* Company Mission Block */}
                                <div className="mb-4 shadow-sm border rounded p-4 bg-light-surface">
                                    <h5 className="text-brand-dark fw-bold d-flex align-items-center gap-2 mb-2">
                                        <Lucide.Target size={20} className="text-brand-blue" /> Corporate Mission
                                    </h5>
                                    <p className="text-muted mb-0 small-fluid">
                                        To construct fault-tolerant, premium-grade physical-layer connectivity solutions that anchor critical data pathways, empower robust digital signage and point-of-sale systems, and continuously drive operational continuity.
                                    </p>
                                </div>

                                <p className="text-muted small-fluid">
                                    At eCROWN TECHNOLOGIES O₂, we recognize that robust physical network layouts are the baseline of corporate agility. We don't just clear paths; we engineer certified structural backbones customized to support multi-gigabit throughput demands, precise IP surveillance arrays, and seamless automated operations.
                                </p>

                                {/* Peak Excellence Trust Statement matching the flyer slogan */}
                                <div className="p-4 mt-4 premium-quote-box rounded border-start border-4 border-primary shadow-sm">
                                    <div className="badge bg-primary bg-opacity-10 text-brand-blue fw-bold px-3 py-1 rounded-pill small mb-2">
                                        Core Directive
                                    </div>
                                    <span className="fw-bold text-brand-dark h4 d-block mb-1">"...excellence at its peak."</span>
                                    <small className="text-muted d-block lh-sm">
                                        This statement represents our strict absolute design baseline metric. If a low-voltage route or device node layout is not perfectly organized, balanced, accurately mapped, and fully documented, it does not leave our deployment queue.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* Visual framework representation echoing the sweeping clean geometric curve from the flyer layout */}
                            <div className="position-relative overflow-hidden rounded shadow-lg visual-curve-container" style={{ height: '480px' }}>
                                <div className="flyer-abstract-curve"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800"
                                    className="w-100 h-100 object-fit-cover minimal-image position-relative z-1"
                                    alt="Engineering Infrastructure Diagram"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: OFFICIAL CORE INSTALLATION ROSTER (IMAGES TOP & BOLDED) --- */}
            <section className="py-5 bg-light-blueprint position-relative overflow-hidden">
                <div className="container py-lg-4 position-relative z-3">
                    <div className="text-center max-w-2xl mx-auto mb-5">
                        <span className="text-brand-blue fw-bold text-uppercase tracking-wider small d-block mb-2">Operational Scope</span>
                        <h2 className="text-brand-dark fw-bold display-6 mb-3">Official Core Installation Roster</h2>
                        <p className="text-muted">
                            Our standardized architectural deployment menu. Every vertical represents an official certified capability engineered to elite baseline metric tolerances.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                icon: <Lucide.Tv size={24} />,
                                title: "A/V & Digital Signage",
                                desc: "High-definition distribution layers and synchronized multi-display matrices for corporate visibility.",
                                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600"
                            },
                            {
                                icon: <Lucide.Cctv size={24} />,
                                title: "CCTV Camera & IP Camera",
                                desc: "Enterprise physical property security arrays utilizing ultra-low latency intelligent surveillance links.",
                                image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600"
                            },
                            {
                                icon: <Lucide.TrendingUp size={24} />,
                                title: "Low Voltage Runs",
                                desc: "Precision structural pathway configurations optimized for pristine data pathways and zero signal deterioration.",
                                image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=600"
                            },
                            {
                                icon: <Lucide.Network size={24} />,
                                title: "Low Voltage Structured Cabling",
                                desc: "High-density multi-gigabit throughput backbones mapped seamlessly to structural specifications.",
                                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600"
                            },
                            {
                                icon: <Lucide.CreditCard size={24} />,
                                title: "Point of Sale",
                                desc: "Secure physical-layer configurations optimized for flawless transaction system continuity.",
                                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600"
                            },
                            {
                                icon: <Lucide.ScanBarcode size={24} />,
                                title: "Self-Checkout",
                                desc: "Automated kiosk network integration blueprints designed for optimal localized interface latency.",
                                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600"
                            },
                            {
                                icon: <Lucide.Radio size={24} />,
                                title: "Satellite Networking",
                                desc: "Remote receiver configurations and terminal alignment layouts ensuring uninterrupted workspace uplinks.",
                                image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=600"
                            },
                            {
                                icon: <Lucide.Server size={24} />,
                                title: "Server/Storage",
                                desc: "Mainframe rack infrastructure configuration, load-balanced topologies, and server data arrays.",
                                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600"
                            },
                            {
                                icon: <Lucide.Wifi size={24} />,
                                title: "Wireless Networking",
                                desc: "High-density enterprise access point configurations delivering uniform multi-node saturation grids.",
                                image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=600"
                            }
                        ].map((rosterItem, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="roster-card-premium h-100 rounded bg-white shadow-sm border border-light overflow-hidden d-flex flex-column justify-content-between">
                                    <div>
                                        {/* IMAGE AT THE TOP - Height increased to 240px & rich contrast filters applied */}
                                        <div className="roster-image-top-container position-relative overflow-hidden" style={{ height: '240px' }}>
                                            <div className="bold-image-overlay"></div>
                                            <img 
                                                src={rosterItem.image} 
                                                alt={rosterItem.title} 
                                                className="w-100 h-100 object-fit-cover roster-img-layer-premium"
                                            />
                                            {/* Centered large prominent floating badge */}
                                            <div className="roster-icon-premium-badge d-flex align-items-center justify-content-center rounded-circle bg-white text-brand-blue shadow">
                                                {rosterItem.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Card Text Area */}
                                        <div className="p-4 pt-5 text-center">
                                            <h4 className="fw-black text-brand-dark mb-3 tracking-tight roster-title-heavy">
                                                {rosterItem.title}
                                            </h4>
                                            <p className="text-muted small lh-base px-1">{rosterItem.desc}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Card Footer Status Indicator */}
                                    <div className="px-4 pb-4">
                                        <div className="pt-3 border-top border-light d-flex align-items-center justify-content-center gap-2 text-brand-blue fw-bold tracking-wider small text-uppercase">
                                            <Lucide.ShieldCheck size={16} /> Verified Deployment
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: SAFETY, PROTOCOL & COMPLIANCE (TRUST BUILDER) --- */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container py-lg-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <span className="text-danger fw-bold text-uppercase tracking-wider small d-block mb-2">Risk Mitigation</span>
                            <h2 className="text-brand-dark fw-bold display-6 mb-3">Safety Enforced.<br />Compliance Certified.</h2>
                            <p className="text-muted">
                                Low-voltage structured runs demand uncompromising attention to protocol matrices. We completely eliminate service degradation, signal attenuation, and environmental safety issues by holding our installers to pristine operational standards.
                            </p>
                            <div className="mt-4 p-3 border rounded border-warning bg-warning bg-opacity-5 d-flex gap-3 align-items-start">
                                <Lucide.ShieldAlert className="text-warning flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h6 className="fw-bold text-brand-dark mb-1">Zero-Deficiency Mandate</h6>
                                    <p className="small text-muted mb-0">Our structural pathways conform seamlessly to building fire-stop regulations, server room load rules, and specific plenum-space routing guidelines.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                {[
                                    {
                                        icon: <Lucide.HardHat size={28} className="text-brand-blue" />,
                                        title: "Pragmatic Site Operations",
                                        desc: "All deployment personnel operate within structural guidelines and site-safety criteria to protect property value and maximize workspace integration."
                                    },
                                    {
                                        icon: <Lucide.FileCheck size={28} className="text-brand-blue" />,
                                        title: "ANSI/TIA/EIA-568 Integration",
                                        desc: "We rigorously verify structured cabling configurations to remain in compliance with strict operational parameters, dynamic telecom codes, and system standards."
                                    },
                                    {
                                        icon: <Lucide.ShieldCheck size={28} className="text-brand-blue" />,
                                        title: "Precision System Validation",
                                        desc: "No installation setup goes unverified. Systems pass verification checks to confirm structural link drop capacities, ensuring stable throughput and long-term continuity."
                                    }
                                ].map((spec, i) => (
                                    <div key={i} className="col-12">
                                        <div className="d-flex gap-3 bg-white p-4 rounded shadow-sm border border-light">
                                            <div className="compliance-icon-wrapper p-3 rounded bg-light flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                                                {spec.icon}
                                            </div>
                                            <div>
                                                <h5 className="fw-bold text-brand-dark h6 mb-1">{spec.title}</h5>
                                                <p className="text-muted small mb-0">{spec.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: TARGETED CORE VALUES GRID --- */}
            <section className="values-section py-5 text-white">
                <div className="container py-lg-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold h1">Architectural Directives</h2>
                        <p className="text-info-light">The fundamental anchors that sync our engineering units to your project requirements.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                icon: <Lucide.Cpu size={32} className="text-info-cyan" />,
                                title: "Technology",
                                desc: "Utilizing advanced equipment architectures, high-efficiency distribution setups, and complex networking frameworks to maintain optimal performance levels."
                            },
                            {
                                icon: <Lucide.Workflow size={32} className="text-info-cyan" />,
                                title: "Innovation",
                                desc: "Adapting modern surveillance designs, intelligent system setups, and flexible topology maps optimized to align with future corporate expansion needs."
                            },
                            {
                                icon: <Lucide.CheckCircle size={32} className="text-info-cyan" />,
                                title: "Excellence",
                                desc: "Every drop is carefully routed, labeled, and validated to hit enterprise parameters with zero deviation, matching '...excellence at its peak.'"
                            }
                        ].map((item, index) => (
                            <div key={index} className="col-md-4">
                                <div className="value-card h-100 p-4 rounded border border-secondary border-opacity-10 shadow-sm">
                                    <div className="mb-3">{item.icon}</div>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="small opacity-75 mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: FINAL ENGAGEMENT CTA --- */}
            <section className="cta-banner py-5 text-center text-white position-relative overflow-hidden">
                <div className="flyer-bottom-sweep-overlay"></div>
                <div className="container position-relative z-3 py-4">
                    <h2 className="fw-bold h1 mb-3">Ready to Deploy Your Core Structural Layouts?</h2>
                    <p className="opacity-90 max-w-2xl mx-auto mb-4">
                        Contact an eCROWN technologies O<sub>2</sub> systems planning specialist today to arrange technical reviews, site topology mapping, or architecture validation.
                    </p>
                    <button className="btn btn-light-shimmer px-5 py-3 fw-bold rounded-pill shadow-lg d-inline-flex align-items-center gap-2">
                        Initiate Systems Review <Lucide.ArrowRight size={18} />
                    </button>
                </div>
            </section>

             <Footer/>
             <Button/>



            <style>{`
            .about-wrapper {
                color: #0A1622;
                overflow-x: hidden;
            }
            
            /* --- BANNER AREA --- */
            .about-hero {
                background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                padding: 120px 0;
            }
            .hero-overlay { 
                position: absolute; 
                inset: 0; 
                background: linear-gradient(135deg, rgba(6, 19, 33, 0.96) 0%, rgba(10, 22, 34, 0.85) 100%); 
                z-index: 1; 
            }
            
            .badge-premium { 
                background: rgba(13, 110, 253, 0.12); 
                border: 1px solid #0D6EFD; 
                color: #00d4ff; 
                padding: 6px 18px; 
                border-radius: 50px; 
                font-weight: 700; 
                font-size: 11px; 
                letter-spacing: 1.5px;
                display: inline-block;
            }
            .brand-pillars-ticker {
                font-size: clamp(11px, 3vw, 14px);
                color: #00d4ff;
            }
            .pillar-item {
                letter-spacing: 3px;
                opacity: 0.95;
            }
            .pillar-divider {
                color: rgba(13, 110, 253, 0.6);
                font-weight: 300;
            }
            .tracking-widest { letter-spacing: 2px; }
            .text-gradient-blue { 
                background: linear-gradient(to right, #0D6EFD, #00d4ff); 
                -webkit-background-clip: text; 
                -webkit-text-fill-color: transparent; 
            }
            .max-w-2xl { max-width: 42rem; }

            /* --- MANIFESTO STYLINGS --- */
            .bg-light-surface {
                background-color: #fdfdfe;
                border-color: rgba(10, 22, 34, 0.06) !important;
            }
            .premium-quote-box {
                background: rgba(13, 110, 253, 0.03);
                border-color: #0D6EFD !important;
            }
            .text-brand-dark { color: #0A1622 !important; }
            .text-brand-blue { color: #0D6EFD !important; }
            .tracking-wider { letter-spacing: 1.5px; }
            .small-fluid { font-size: 15px; line-height: 1.6; }

            /* --- NEW ROSTER CARD MECHANICS (IMAGES AT TOP & BOLD/INTENSE STYLE) --- */
            .bg-light-blueprint {
                background-color: #f4f7fa;
                background-image: radial-gradient(rgba(13, 110, 253, 0.03) 1px, transparent 0);
                background-size: 24px 24px;
            }
            .roster-card-premium {
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                border-radius: 12px !important;
            }
            .roster-card-premium:hover {
                transform: translateY(-8px);
                box-shadow: 0 2rem 4rem rgba(6, 19, 33, 0.16) !important;
                border-color: rgba(13, 110, 253, 0.4) !important;
            }
            
            /* Bolder image presentations with slight color grading pop */
            .roster-img-layer-premium {
                transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                filter: brightness(0.9) contrast(1.15); /* Makes images punchier/bolder */
            }
            .roster-card-premium:hover .roster-img-layer-premium {
                transform: scale(1.08);
                filter: brightness(1) contrast(1.2);
            }
            
            /* Clean subtle overlay sheet on the image layer for extra contrast depth */
            .bold-image-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to bottom, rgba(10,22,34,0.1), rgba(10,22,34,0.4));
                z-index: 2;
                pointer-events: none;
            }
            
            /* Floating action icon badge positioned dynamically at the lower border of top image */
            .roster-icon-premium-badge {
                position: absolute;
                bottom: -24px;
                left: 50%;
                transform: translateX(-50%);
                width: 52px;
                height: 52px;
                z-index: 4;
                border: 3px solid #ffffff;
                background-color: #ffffff !important;
            }
            
            /* Heavy Bold Headings mimicking premium graphic text */
            .fw-black { font-weight: 800 !important; }
            .roster-title-heavy {
                font-size: 20px;
                letter-spacing: -0.3px;
                color: #061321;
            }
            .tracking-tight { letter-spacing: -0.5px; }

            /* --- INTERACTIVE GRID STYLINGS --- */
            .values-section { 
                background: radial-gradient(circle at center, #0a2440 0%, #050d14 100%); 
            }
            .value-card {
                background: rgba(255, 255, 255, 0.02);
                border-color: rgba(255, 255, 255, 0.08) !important;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .value-card:hover {
                transform: translateY(-4px);
                background: rgba(255, 255, 255, 0.04);
                border-color: rgba(0, 212, 255, 0.2) !important;
            }
            .text-info-light, .text-info-cyan { color: #00d4ff !important; }

            /* --- VISUAL ELEMENTS --- */
            .visual-curve-container {
                background: #061321;
            }
            .flyer-abstract-curve {
                position: absolute;
                inset: 0;
                background: radial-gradient(circle at bottom right, #0D6EFD 0%, transparent 65%);
                z-index: 2;
                pointer-events: none;
                opacity: 0.65;
            }
            .minimal-image { 
                filter: grayscale(0.12); 
                transition: all 0.4s ease; 
            }
            .minimal-image:hover { 
                filter: grayscale(0); 
                transform: scale(1.01);
            }

            /* --- FINAL CTA BANNER SWEEP --- */
            .cta-banner {
                background-color: #061321 !important;
            }
            .flyer-bottom-sweep-overlay {
                position: absolute;
                top: 0;
                right: -10%;
                bottom: 0;
                width: 55%;
                background: linear-gradient(120deg, transparent 20%, #0D6EFD 100%);
                opacity: 0.45;
                transform: skewX(-20deg);
                z-index: 1;
            }
            .btn-light-shimmer {
                background: #ffffff;
                color: #0A1622;
                border: none;
                transition: all 0.25s ease;
            }
            .btn-light-shimmer:hover {
                background: #0D6EFD;
                color: #ffffff;
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(13, 110, 253, 0.35) !important;
            }
            .z-3 { z-index: 3; }
            .z-1 { z-index: 1; }
        `}</style>
        </div>
        </>
    );
}

export default About;