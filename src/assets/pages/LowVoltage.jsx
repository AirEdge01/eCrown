import React from 'react';
import { Mail, MapPin, ShieldCheck, Cpu, Wifi, Video, Bell, PhoneCall, Layers, CheckCircle2, FileText, Calendar, Eye, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const LowVoltageService = () => {
  return (
    <>
    <Navbar />  
    <div className="modern-low-voltage-viewport min-vh-100 position-relative pb-5">
      
      {/* Premium Dark Ambient Light Radiance */}
      <div className="ambient-blur-glow top-left-light"></div>
      <div className="ambient-blur-glow bottom-right-light"></div>
      
      {/* 1. BRANDING HEADER */}
      

      {/* 2. HERO IMMERSIVE BACKBONE BLOCK */}
      <section className="position-relative text-white py-4 py-md-5 px-3 px-md-4 overflow-hidden d-flex align-items-center hero-sub-layer">
        <div className="cyber-grid-pattern"></div>
        <div className="container py-4 py-md-5 position-relative z-index-2">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge-modern-pill mb-3 d-inline-block text-uppercase">
                ⚡ Integrated Infrastructure Architecture
              </span>
              
              <h2 className="display-5 display-4-md fw-black mt-2 mb-1 tracking-tight text-white leading-tight">
                eCROWN Low-Voltage <br />
                <span className="text-gradient-cyan">Structured Runs</span>
              </h2>
              <h3 className="h6 h5-md fw-bold text-info tracking-wider text-uppercase mb-4">
                ...excellence at its peak.
              </h3>
              
              <p className="text-high-contrast lead mb-4 mb-md-5 fw-medium">
                Engineering premium low-voltage structured cabling, fiber backbones, and secure inter-closet networks for scalable, high-performance operations.
              </p>

              <div>
                <Link>
                <a href="" className="btn btn-premium-cyan px-4 px-md-5 py-3 rounded-pill fw-bold text-uppercase shadow-lg d-inline-flex align-items-center gap-2 text-wrap-none">
                  <Calendar size={18} /> Request Free Consultation
                </a>
                </Link>
              </div>
            </div>

            {/* SYSTEM HARDWARE TELEMETRY LIVE SECTION */}
            <div className="col-lg-5">
              <div className="video-card-wrapper p-2 rounded-4 border border-white border-opacity-10 shadow-2xl position-relative">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden telemetry-live-fallback d-flex flex-column justify-content-center align-items-center p-3 text-center">
                  <div className="telemetry-grid-overlay"></div>
                  <Cpu size={40} className="text-info mb-2 pulse-animation position-relative z-1" />
                  <div className="text-white fw-bold tracking-wide position-relative z-1 low-voltage-txt-shadow mb-1">HARDWARE NODE ACTIVE</div>
                  <div className="text-info small tracking-widest font-monospace position-relative z-1" style={{ fontSize: '11px' }}>ERR_LOSS: 0.002dB  SIG_STR: 99.8%</div>
                </div>
                <div className="video-status-overlay d-flex align-items-center gap-2 px-3 py-1.5 rounded-pill position-absolute top-3 start-3">
                  <span className="live-pulse-dot"></span>
                  <span className="text-uppercase fw-bold text-white tracking-widest" style={{ fontSize: '9px' }}>SYSTEM HARDWARE TELEMETRY LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FIELD TECHNICAL SERVICES */}
      <section className="container my-4 my-md-5 pt-3 position-relative z-index-3">
        <div className="bg-glass-card rounded-4 p-3 p-md-5 border border-white border-opacity-10 shadow-xl">
          <div className="row g-4 align-items-center">
            
            <div className="col-lg-6">
              <span className="text-info text-uppercase fw-bold small tracking-wider mb-2 d-block"> HARDWARE SUBSYSTEM ARCHITECTURE</span>
              <h3 className="fw-black text-white h2 mb-3 tracking-tight">Low Voltage Runs</h3>
              
              <div className="alert-concept-box p-3 rounded-3 mb-4 border-start border-3 border-info">
                <p className="text-high-contrast small mb-0 fw-medium">
                  This architecture involves running special distribution cables engineered to transmit high-density data signals using ultra-low, completely safe electrical power levels.
                </p>
              </div>
              
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3 p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 grid-item-hover h-100">
                    <Layers size={20} className="text-info mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="text-white fw-bold mb-1">Concealed Engineering</h6>
                      <p className="small text-high-contrast mb-0">Cables are completely hidden and neatly routed inside structural wall framing or overhead drop ceilings.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3 p-3 rounded bg-white bg-opacity-5 border border-white border-opacity-10 grid-item-hover h-100">
                    <CheckCircle2 size={20} className="text-success mt-1 flex-shrink-0" />
                    <div>
                      <h6 className="text-white fw-bold mb-1">Operational Safety</h6>
                      <p className="small text-high-contrast mb-0">Low electrical power configurations systematically lower energy hazards and cross-talk interference.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-3 p-md-4 rounded-3 border border-white border-opacity-10 bg-deep-slate-panel shadow-inner">
                <h5 className="text-white fw-bold mb-4 tracking-tight d-flex align-items-center gap-2">
                  <Cpu size={18} className="text-info" /> Systems Deployed & Configured:
                </h5>
                <div className="d-flex flex-column gap-3">
                  
                  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between p-3 rounded bg-dark bg-opacity-60 border-start border-3 border-info row-hover-transition gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-wrapper bg-info bg-opacity-20 text-info shadow-sm"><Wifi size={16} /></div>
                      <span className="text-white small fw-bold">High-Speed Networking Systems & Internet</span>
                    </div>
                    <span className="badge bg-info text-dark text-uppercase px-2 py-1" style={{ fontSize: '9px', fontWeight: '800' }}>LAN CORE</span>
                  </div>
                  
                  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between p-3 rounded bg-dark bg-opacity-60 border-start border-3 border-primary row-hover-transition gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-wrapper bg-primary bg-opacity-20 text-primary shadow-sm"><Video size={16} /></div>
                      <span className="text-white small fw-bold">Smart Surveillance Cameras & Closed-Circuit TV</span>
                    </div>
                    <span className="badge bg-primary text-white text-uppercase px-2 py-1" style={{ fontSize: '9px', fontWeight: '800' }}>CCTV HUB</span>
                  </div>

                  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between p-3 rounded bg-dark bg-opacity-60 border-start border-3 border-warning gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-wrapper bg-warning bg-opacity-20 text-warning shadow-sm"><Bell size={16} /></div>
                      <span className="text-white small fw-bold">Intelligent Hazard Alarms & Signal Triggers</span>
                    </div>
                    <span className="badge bg-warning text-dark text-uppercase px-2 py-1" style={{ fontSize: '9px', fontWeight: '800' }}>SAFETY SYS</span>
                  </div>

                  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between p-3 rounded bg-dark bg-opacity-60 border-start border-3 border-success gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-wrapper bg-success bg-opacity-20 text-success shadow-sm"><PhoneCall size={16} /></div>
                      <span className="text-white small fw-bold">Corporate Telephones & Intercom Routing Networks</span>
                    </div>
                    <span className="badge bg-success text-white text-uppercase px-2 py-1" style={{ fontSize: '9px', fontWeight: '800' }}>VOIP COMM</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATIONS BREAKDOWN GRID */}
      <main className="container-fluid px-3 px-md-4 position-relative z-index-3 mt-5">
        <div className="text-center mb-4 mb-md-5">
          <span className="text-info text-uppercase fw-bold small tracking-widest"> DEPLOYMENT SPECIFICATIONS MATRIX</span>
          <h3 className="fw-black text-white h2 mt-2 tracking-tight">Technical Implementation Parameters</h3>
        </div>
        
        <div className="row g-4">
          {/* Card Module 1 */}
          <div className="col-sm-6 col-xl-3">
            <div className="card h-100 border-0 bg-glass-card rounded-4 overflow-hidden shadow-sm">
              <div className="card-img-wrapper position-relative">
                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '170px' }} alt="Category 6A Cables" />
                <div className="card-img-overlay-shade"></div>
              </div>
              <div className="card-body p-3 p-md-4 text-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-2 tracking-tight text-info h6-mobile-fix">Category 6A / 7 Distribution</h5>
                  <p className="text-high-contrast-body small mb-4">
                    Structured copper drop runs terminated inside protective closet pathways. Handled with precision twist-ratio controls to isolate internal high-gigabit workstation endpoints.
                  </p>
                </div>
                <div className="table-responsive w-100 m-0 p-0">
                  <table className="table table-sm table-borderless table-dark-matrix small mb-0 rounded-3 overflow-hidden w-100">
                    <thead>
                      <tr><th className="p-2">Service Type</th><th className="p-2 text-end">Scope</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2">New Infra</td><td className="p-2 text-end text-cyan-solid fw-bold">300-500 Drops</td></tr>
                      <tr><td className="p-2">Upgrades</td><td className="p-2 text-end text-cyan-solid fw-bold">100-300 Drops</td></tr>
                      <tr><td className="p-2">SLA Cert</td><td className="p-2 text-end text-cyan-solid fw-bold">Full Audit</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Card Module 2 */}
          <div className="col-sm-6 col-xl-3">
            <div className="card h-100 border-0 bg-glass-card rounded-4 overflow-hidden shadow-sm">
              <div className="card-img-wrapper position-relative">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '170px' }} alt="Optical Closets" />
                <div className="card-img-overlay-shade"></div>
              </div>
              <div className="card-body p-3 p-md-4 text-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-2 tracking-tight text-info h6-mobile-fix">Multi-Floor Optical Trunks</h5>
                  <p className="text-high-contrast-body small mb-4">
                    High-speed multi-mode and single-mode optical fiber infrastructures. Links Main Closets (MDF) to Intermediate Closets (IDF) across campus sectors with zero signal drop-off.
                  </p>
                </div>
                <div className="table-responsive w-100 m-0 p-0">
                  <table className="table table-sm table-borderless table-dark-matrix small mb-0 rounded-3 overflow-hidden w-100">
                    <thead>
                      <tr><th className="p-2">Service Type</th><th className="p-2 text-end">Scope</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2">New Infra</td><td className="p-2 text-end text-cyan-solid fw-bold">Multi-Core</td></tr>
                      <tr><td className="p-2">Upgrades</td><td className="p-2 text-end text-cyan-solid fw-bold">Backbone Relays</td></tr>
                      <tr><td className="p-2">SLA Cert</td><td className="p-2 text-end text-cyan-solid fw-bold">0.02dB Loss</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Card Module 3 */}
          <div className="col-sm-6 col-xl-3">
            <div className="card h-100 border-0 bg-glass-card rounded-4 overflow-hidden shadow-sm">
              <div className="card-img-wrapper position-relative">
                <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '170px' }} alt="Fusion Splicing" />
                <div className="card-img-overlay-shade"></div>
              </div>
              <div className="card-body p-3 p-md-4 text-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-2 tracking-tight text-info h6-mobile-fix">Fusion Splicing & Assembly</h5>
                  <p className="text-high-contrast-body small mb-4">
                    Precision core-alignment electric arc splicing. Eradicates reflection interference across glass connections and seals fiber joints inside protective multi-port dome enclosures.
                  </p>
                </div>
                <div className="table-responsive w-100 m-0 p-0">
                  <table className="table table-sm table-borderless table-dark-matrix small mb-0 rounded-3 overflow-hidden w-100">
                    <thead>
                      <tr><th className="p-2">Service Type</th><th className="p-2 text-end">Scope</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2">New Splicing</td><td className="p-2 text-end text-cyan-solid fw-bold">Core Align</td></tr>
                      <tr><td className="p-2">Maintenance</td><td className="p-2 text-end text-cyan-solid fw-bold">OTDR Break</td></tr>
                      <tr><td className="p-2">Enclosures</td><td className="p-2 text-end text-cyan-solid fw-bold">Pigtail Assembly</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Card Module 4 */}
          <div className="col-sm-6 col-xl-3">
            <div className="card h-100 border-0 bg-glass-card rounded-4 overflow-hidden shadow-sm">
              <div className="card-img-wrapper position-relative">
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '170px' }} alt="Pathways Hooks" />
                <div className="card-img-overlay-shade"></div>
              </div>
              <div className="card-body p-3 p-md-4 text-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-2 tracking-tight text-info h6-mobile-fix">Pathways & J-Hooks</h5>
                  <p className="text-high-contrast-body small mb-4">
                    Heavy-duty systematic grid pathways layout. Cables are neatly supported via structural steel loops and wire baskets, keeping low-voltage runs isolated from noise power lines.
                  </p>
                </div>
                <div className="table-responsive w-100 m-0 p-0">
                  <table className="table table-sm table-borderless table-dark-matrix small mb-0 rounded-3 overflow-hidden w-100">
                    <thead>
                      <tr><th className="p-2">Service Type</th><th className="p-2 text-end">Scope</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2">Basket Run</td><td className="p-2 text-end text-cyan-solid fw-bold">Metallic Tray</td></tr>
                      <tr><td className="p-2">J-Hook Dist</td><td className="p-2 text-end text-cyan-solid fw-bold">Fire-Rated Brk</td></tr>
                      <tr><td className="p-2">Penetration</td><td className="p-2 text-end text-cyan-solid fw-bold">UL Firestop</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. CCTV TERMINATION DIAGRAM SECTION */}
      <section className="container my-5 pt-4 position-relative z-index-3">
        <div className="bg-glass-card rounded-4 p-3 p-md-5 border border-white border-opacity-10 shadow-xl">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="video-card-wrapper p-2 rounded-4 border border-white border-opacity-10 shadow-2xl position-relative">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden cctv-termination-fallback d-flex flex-column justify-content-center align-items-center p-3 text-center">
                  <div className="cctv-grid-overlay"></div>
                  <Video size={42} className="text-primary mb-2 pulse-animation position-relative z-1" />
                  <div className="text-white fw-black tracking-wide position-relative z-1 low-voltage-txt-shadow mb-1" style={{ letterSpacing: '0.5px' }}>Central Command Network Matrix</div>
                  <div className="text-primary small tracking-widest font-monospace position-relative z-1 fw-bold" style={{ fontSize: '11px' }}>CAM_01 to CAM_64 // TERMINATION OK</div>
                </div>
                <div className="video-status-overlay d-flex align-items-center gap-2 px-3 py-1.5 rounded-pill position-absolute bottom-3 end-3">
                  <span className="live-pulse-dot bg-info"></span>
                  <span className="text-uppercase fw-bold text-white tracking-widest" style={{ fontSize: '9px' }}>CCTV TERMINATION DIAGRAM</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 text-white">
              <span className="text-info text-uppercase fw-bold small tracking-wider mb-2 d-block"> FIELD APPLICATION EXAMPLE</span>
              <h4 className="fw-black text-white h3 mb-3 tracking-tight">Real-world Project Implementation</h4>
              <p className="text-high-contrast mb-4">
                Consider a complete structural deployment across a modern high-rise workspace: our engineers deploy a fully cohesive setup, connecting smart AI-monitored CCTV cameras through concealed low-voltage lines across every section of the building directly into a single centralized operational command console.
              </p>
              <div className="p-3 rounded bg-dark bg-opacity-40 border border-white border-opacity-5 d-flex align-items-center gap-3">
                <Eye size={24} className="text-info flex-shrink-0" />
                <span className="small fw-bold text-white">Guarantees zero exposed cabling, optimal aesthetic integration, and safe hardware execution.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEPLOYMENT TOPOLOGY DIAGRAM MATRIX */}
      <section className="container my-5 pt-3">
        <div className="text-center mb-4 mb-md-5">
          <span className="text-info text-uppercase fw-bold small tracking-widest">// ARCHITECTURE SYSTEMS</span>
          <h2 className="fw-black text-white mt-2 tracking-tight">Deployment Topology</h2>
          <p className="text-high-contrast mx-auto small text-center max-w-xl">
            Low-voltage plant layouts linking station drop cabling, fiber backbones, and inter-closet networks for scalable, high-performance operations.
          </p>
        </div>

        <div className="row align-items-center bg-glass-card rounded-4 border border-white border-opacity-10 p-3 p-md-4 mx-1 g-4">
          <div className="col-md-4 text-center border-md-end-custom">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80" className="img-fluid rounded-3 mb-3 border border-white border-opacity-10 shadow" style={{ maxHeight: '180px', width: '100%', objectFit: 'cover' }} alt="Data Racks Network" />
            <h6 className="fw-bold text-white mb-1">MDF Frame Hub</h6>
            <p className="text-high-contrast small px-2 mb-0">Centralized server core panel array that handles core incoming data feeds and distributes structured connections to local closets.</p>
          </div>
          
          <div className="col-md-4 text-center border-md-end-custom">
            <div className="p-3 my-2 border border-white border-opacity-10 rounded bg-dark bg-opacity-40 small mx-auto text-start" style={{ maxWidth: '280px' }}>
              <div className="fw-bold text-info mb-2 text-center text-uppercase tracking-wider small">Low-Voltage Key Benefits</div>
              <div className="mb-1 text-white fw-bold">✔️ Reduced Signal Attenuation</div>
              <div className="mb-1 text-white fw-bold">✔️ Certified Fluke Performance Tests</div>
              <div className="mb-1 text-white fw-bold">✔️ Neat, Combed Cable Dressings</div>
              <div className="mb-0 text-white fw-bold">✔️ Full NEC Code Compliance</div>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="table-responsive">
              <table className="table table-sm table-borderless small mb-0 table-dark-matrix rounded-3 overflow-hidden">
                <thead>
                  <tr>
                    <th className="p-2">Media Parameter</th>
                    <th className="p-2">Cat6A Copper</th>
                    <th className="p-2">OS2 Fiber Core</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2">Bandwidth Speed</td><td className="p-2 text-info fw-bold">10 Gbps Limit</td><td className="p-2 text-info fw-bold">100+ Gbps</td></tr>
                  <tr><td className="p-2">Distance Run</td><td className="p-2 text-info fw-bold">90 Meters Max</td><td className="p-2 text-info fw-bold">Multi-Km Run</td></tr>
                  <tr><td className="p-2">EMI Noise Reject</td><td className="p-2 text-info fw-bold">Twisted Shield</td><td className="p-2 text-info fw-bold">Total Light Iso</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED CORPORATE IMPLEMENTATIONS */}
      <section className="py-5 my-5 bg-glass-card border-top border-bottom border-white border-opacity-10">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-black text-white mb-1 tracking-tight">Trusted Corporate Implementations</h3>
            <p className="text-high-contrast small text-center">Low-voltage infrastructure installations deployed across premier commercial environments.</p>
          </div>

          <div id="carouselExampleSlidesOnly" className="carousel slide shadow-2xl rounded-4 overflow-hidden position-relative border border-white border-opacity-10" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner">
              
              <div className="carousel-item active position-relative ecrown-img-frame-height">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Corporate Office Architecture" />
                <div className="ecrown-carousel-dark-mask">
                  <div className="text-center px-3">
                    <h4 className="fw-bold text-white mb-2 h5-mobile-fix">Finance Central Headquarters</h4>
                    <span className="badge-modern-pill border-info text-info fw-bold">Cat6A Base Station Dropping</span>
                  </div>
                </div>
              </div>

              <div className="carousel-item position-relative ecrown-img-frame-height">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Industrial Warehouse Facilities" />
                <div className="ecrown-carousel-dark-mask">
                  <div className="text-center px-3">
                    <h4 className="fw-bold text-white mb-2 h5-mobile-fix">Industrial Fulfillment Centers</h4>
                    <span className="badge-modern-pill border-info text-info fw-bold">Overhead Support Basket Trays</span>
                  </div>
                </div>
              </div>

              <div className="carousel-item position-relative ecrown-img-frame-height">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Data Center Ecosystems" />
                <div className="ecrown-carousel-dark-mask">
                  <div className="text-center px-3">
                    <h4 className="fw-bold text-white mb-2 h5-mobile-fix">High-Security Data Vaults</h4>
                    <span className="badge-modern-pill border-info text-info fw-bold">Multi-Mode Fiber Backbone Runs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION INTEREST FORM */}
      <section id="consultation-form" className="container my-5 position-relative z-index-3">
        <div className="bg-glass-card text-white p-3 p-md-5 rounded-4 border border-white border-opacity-10 shadow-2xl">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="text-info text-uppercase fw-bold small tracking-wider mb-2 d-block"> EXPERT INFRASTRUCTURE ASSISTANCE</span>
              <h3 className="fw-black text-gradient-cyan mb-3 tracking-tight display-6">Ready to Engineer Your Structured Pathway Plan?</h3>
              <p className="text-high-contrast small mb-0 fw-medium">
                Avoid performance lag, messy cables, and cross-talk interference. Contact our technical team today to request an on-site evaluation, detailed pathway diagrams, and an enterprise low-voltage installation estimate customized for your property layout.
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="bg-white text-dark p-3 p-md-4 rounded-3 shadow">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="small fw-bold text-muted mb-1">Company Representative Name</label>
                    <input type="text" className="form-control" placeholder="e.g. John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label className="small fw-bold text-muted mb-1">Corporate Email Address</label>
                    <input type="email" className="form-control" placeholder="name@company.com" required />
                  </div>
                  <div className="mb-4">
                    <label className="small fw-bold text-muted mb-1">Primary Infrastructure Scope</label>
                    <select className="form-select text-muted small">
                      <option>Category 6A / 7 Copper Station Drop Runs</option>
                      <option>Multi-Floor Optical Fiber Core Backbones</option>
                      <option>MDF / IDF Server Room Rack Remodeling</option>
                      <option>On-Site System Fluke Certification Auditing</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-dark w-100 text-uppercase fw-bold py-2.5 small tracking-wider btn-hover-effect">
                    Submit Request Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PREMIUM SERVICE MAINTENANCE SLA BLOCK */}
      <section className="container my-5 position-relative z-index-3">
        <div className="bg-premium-sla-card rounded-4 p-4 border border-white border-opacity-10 shadow-2xl">
          <div className="row g-4 align-items-center">
            
            <div className="col-xl-8 col-lg-7">
              <div className="d-flex flex-column flex-sm-row align-items-start gap-3">
                <div className="sla-badge-shield d-flex align-items-center gap-2 px-3 py-2 rounded-3 bg-info bg-opacity-10 border border-info border-opacity-20 flex-shrink-0">
                  <ShieldCheck size={20} className="text-info pulse-animation" />
                  <span className="small fw-black text-info tracking-wider text-uppercase">100% Certified</span>
                </div>
                <div>
                  <h4 className="text-white h6 fw-bold mb-2 tracking-tight d-flex align-items-center gap-2">
                    System Verification Standard
                  </h4>
                  <p className="text-high-contrast-body small mb-0">
                    All low-voltage cable plants deployed by <span className="text-info fw-bold">eCROWN Technologies</span> undergo strict validation routing. Every lifecycle deployment is completed alongside comprehensive Fluke performance analytical mapping sheets charting exact return loss parameters and path layout fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 text-lg-end">
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-premium-cyan fw-bold px-4 py-3 rounded-3 text-uppercase small tracking-wider d-inline-flex align-items-center justify-content-center gap-2 w-100 transition-all shadow-sm">
                  <FileText size={16} /> Sync Infrastructure Ledger
                </button>
                <div className="text-center text-lg-end px-2">
                  <span className="font-monospace text-muted tracking-normal" style={{ fontSize: '10px' }}>SECURE ACCESS CORE // PORT: 443</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10.

      {/* Embedded CSS Module Engine */}
      <style>{`
        .modern-low-voltage-viewport {
          background-color: #040810;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow-x: hidden;
        }

        /* Ambient Lighting Components */
        .ambient-blur-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.12;
          pointer-events: none;
        }
        @media(min-width: 768px) {
          .ambient-blur-glow { width: 500px; height: 500px; filter: blur(140px); }
        }
        .top-left-light { top: -10%; left: -5%; background-color: #0d6efd; }
        .bottom-right-light { bottom: 15%; right: -5%; background-color: #00ff7f; }

        /* Structural Design Classes */
        .bg-header-glass {
          background: rgba(4, 8, 16, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 1060;
        }
        .backdrop-blur {
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .bg-glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        .bg-premium-sla-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 240, 255, 0.12) !important;
        }

        .bg-deep-slate-panel {
          background: rgba(6, 12, 24, 0.85);
        }

        .fw-black { font-weight: 900; }
        .fw-extrabold { font-weight: 800; }

        .brand-logo-sphere {
          width: 38px;
          height: 38px;
          font-size: 18px;
        }
        @media(min-width: 768px) {
          .brand-logo-sphere { width: 45px; height: 45px; font-size: 22px; }
        }
        .brand-tagline {
          font-size: 10px;
          margin-top: -2px;
        }

        .text-gradient-cyan {
          background: linear-gradient(135deg, #00ffff 0%, #0d6efd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge-modern-pill {
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          color: #00ffff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 6px 12px;
          border-radius: 30px;
        }

        /* Pure White High Contrast Text Engine */
        .text-high-contrast {
          color: #ffffff !important;
          line-height: 1.65;
          opacity: 0.95;
        }
        .text-high-contrast-body {
          color: #ffffff !important;
          line-height: 1.5;
          opacity: 0.9;
        }
        .text-cyan-solid {
          color: #00ffff !important;
        }
        .text-high-contrast-tag {
          font-size: 11px;
          color: #00ffff;
          letter-spacing: 3px;
        }
        .low-voltage-txt-shadow {
          text-shadow: 0px 2px 8px rgba(0,0,0,0.9);
        }

        .hero-sub-layer {
          background: linear-gradient(145deg, #040810 0%, #091a36 100%);
          min-height: 60vh;
        }

        .cyber-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Native Fallback Media Interfaces */
        .telemetry-live-fallback {
          background: linear-gradient(135deg, #07152e 0%, #0b0f19 100%);
          border: 1px dashed rgba(0, 240, 255, 0.25);
          min-height: 200px;
          position: relative;
        }
        .cctv-termination-fallback {
          background: linear-gradient(135deg, #05203a 0%, #050b14 100%);
          border: 1px dashed rgba(13, 110, 253, 0.3);
          min-height: 200px;
          position: relative;
        }
        .telemetry-grid-overlay, .cctv-grid-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(18, 53, 114, 0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(18, 53, 114, 0.1) 50%, transparent 50%);
          background-size: 10px 10px;
        }

        /* Pulse Telemetry Engine */
        .live-pulse-dot {
          width: 7px;
          height: 7px;
          background-color: #00ff7f;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(0, 255, 127, 0.5);
          animation: criticalPulse 2s infinite;
        }
        .video-status-overlay {
          background: rgba(4, 8, 16, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 5;
        }

        @keyframes criticalPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 127, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 255, 127, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 127, 0); }
        }

        .pulse-animation {
          animation: iconGlowPulse 2.5s infinite ease-in-out;
        }
        @keyframes iconGlowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); filter: drop-shadow(0 0 8px rgba(0,240,255,0.6)); }
        }

        .icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .alert-concept-box {
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.15);
        }

        .card-img-wrapper { overflow: hidden; }
        .card-img-overlay-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, #040810 100%);
        }

        /* Table Styling Modules */
        .table-dark-matrix {
          background: rgba(4, 8, 16, 0.85) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
        }
        .table-dark-matrix th {
          background: rgba(0, 240, 255, 0.15) !important;
          color: #00ffff !important;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        /* FIX: Changed table rows from white to high-contrast metallic slate gray */
        .table-dark-matrix td {
          color: #cbd5e1 !important;
          font-weight: 500;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          font-size: 11px;
        }

        /* Premium Buttons Engine */
        .btn-premium-cyan {
          background: #0284c7;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.25s ease;
        }
        .btn-premium-cyan:hover {
          background: #00ffff;
          color: #040810;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 255, 255, 0.3);
        }

        .btn-hover-effect { transition: all 0.25s ease; }
        .btn-hover-effect:hover {
          background-color: #0284c7 !important;
          border-color: #0284c7 !important;
          color: #ffffff !important;
        }

        /* Micro Interactive Animations */
        .grid-item-hover { transition: all 0.25s ease; }
        .grid-item-hover:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(0, 240, 255, 0.2) !important;
        }

        .row-hover-transition { transition: all 0.2s ease; }
        .row-hover-transition:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          transform: translateX(2px);
        }

        @media (min-width: 768px) {
          .border-md-end-custom {
            border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .h4-md { font-size: 1.5rem; }
          .display-4-md { font-size: 3.5rem; }
          .h5-md { font-size: 1.25rem; }
        }

        @media (max-width: 576px) {
          .h6-mobile-fix { font-size: 1.1rem !important; }
          .text-wrap-break {
            font-size: 9px !important;
            letter-spacing: 1.5px !important;
          }
        }

        .ecrown-img-frame-height { height: 320px; }
        @media (min-width: 768px) { .ecrown-img-frame-height { height: 400px; } }

        .ecrown-carousel-dark-mask {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4, 8, 16, 0.95) 0%, rgba(4, 8, 16, 0.4) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-wrap-none { white-space: nowrap; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); }
        .z-index-2 { z-index: 2; }
        .z-index-3 { z-index: 3; }
      `}</style>
    </div>
    <Footer/>
    <Button/>
    </>
  );
}

export default LowVoltageService;