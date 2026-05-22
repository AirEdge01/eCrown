import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cctv = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-light text-dark min-vh-screen d-flex flex-column" style={{ fontFamily: 'sans-serif' }}>
      
     

      {/* Main content wrapper */}
      <div className="flex-grow-1">
        
        {/* 2. HERO SECTION (Premium Glassmorphism Deep Layout) */}
        <section className="position-relative text-white py-5 px-4 overflow-hidden bg-deep-slate" 
                 style={{ background: 'linear-gradient(135deg, #090d16 0%, #1e3a8a 100%)', minHeight: '60vh', dFlex: 'align-items-center' }}>
          
          {/* Ambient High-Tech Glow Effects */}
          <div className="position-absolute rounded-circle opacity-20" style={{ top: '-20%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
          
          <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7 text-center text-lg-start">
                <span className="badge px-3 py-2 text-uppercase fw-bold tracking-wider mb-3" 
                      style={{ backgroundColor: 'rgba(37, 99, 235, 0.25)', border: '1px solid rgba(147, 197, 253, 0.3)', color: '#60a5fa' }}>
                  🛡️ Enterprise Security Solutions
                </span>
                <h2 className="display-4 fw-bold mt-2 mb-3 tracking-tight text-white" style={{ lineHeight: '1.15' }}>
                  CCTV & Smart IP Camera <br />
                  <span className="text-gradient-hero">Surveillance Topologies</span>
                </h2>
                <p className="lead text-slate-300 mb-4 mx-auto mx-lg-0" style={{ opacity: 0.85, maxWidth: '620px', color: '#cbd5e1' }}>
                  State-of-the-art closed circuit and internet-protocol hardware deployment. We engineer uncompressed environmental coverage, continuous data-rack logging, and real-time security management.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <Link to="/request" className="text-decoration-none">
                  <a href="#quote-form" className="btn btn-hero-primary px-4 py-2.5 fw-bold rounded-3 shadow-lg text-decoration-none">
                    Request Security Architecture
                  </a>
                  </Link>
                </div>
              </div>
              
              <div className="col-lg-5 d-none d-lg-block">
                <div className="position-relative hero-img-wrapper">
                  <div className="position-absolute bg-primary opacity-10 rounded-4 custom-frame-deco" style={{ top: '15px', left: '15px', width: '100%', height: '100%', zIndex: 1 }}></div>
                  <div className="position-relative overflow-hidden rounded-4 shadow-2xl border border-white border-opacity-10" style={{ zIndex: 2 }}>
                    <img 
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" 
                      className="w-100 object-fit-cover transition-img" 
                      style={{ height: '360px' }}
                      alt="Industrial High Definition Security Node Matrix"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES DATA GRID */}
        <main className="container position-relative" style={{ marginTop: '-40px', zIndex: 3 }}>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 p-4 bg-white custom-product-card">
                <div className="h3 mb-2 text-primary">📹</div>
                <h6 className="fw-bold text-dark mb-2">High-Def IP Networks</h6>
                <p className="text-muted small mb-0">Crystal-clear digital streams with optical Power-over-Ethernet system maps.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 p-4 bg-white custom-product-card">
                <div className="h3 mb-2 text-primary">💾</div>
                <h6 className="fw-bold text-dark mb-2">Storage Integrations</h6>
                <p className="text-muted small mb-0">Robust NVR/DVR builds backed by localized server backup mirroring layouts.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 p-4 bg-white custom-product-card">
                <div className="h3 mb-2 text-primary">🌐</div>
                <h6 className="fw-bold text-dark mb-2">Wireless Access Links</h6>
                <p className="text-muted small mb-0">Secure remote networking protocols enabling mobile global stream viewing.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 p-4 bg-white custom-product-card">
                <div className="h3 mb-2 text-primary">🔌</div>
                <h6 className="fw-bold text-dark mb-2">Structured Cabling</h6>
                <p className="text-muted small mb-0">Clean low-voltage pathways built inside protective weatherproof housing.</p>
              </div>
            </div>
          </div>
        </main>

        {/* 4. INDUSTRIAL SYSTEM VALUE & ADVANCED TELEMETRY */}
        <section className="container my-5 pt-5">
          <div className="p-4 p-md-5 rounded-4 border bg-white shadow-lg bg-light-blue-strip" style={{ borderColor: '#bfdbfe' }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7 order-2 order-lg-1">
                <span className="badge bg-primary text-uppercase px-3 py-2 mb-3 tracking-wide text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                  Operational Scope
                </span>
                <h3 className="fw-bold text-dark display-6 mb-3">
                  Complete Real-Time Environmental Domination
                </h3>
                <p className="text-secondary fs-6 mb-3" style={{ lineHeight: '1.7' }}>
                  Our integrated video networks execute round-the-clock environmental defense. We eliminate blind spots by running industrial low-voltage trunks down structural frames, mounting active anti-vandal observation nodes precisely calculated to monitor massive commercial floors, processing centers, and high-liability pathways.
                </p>
                <div className="row g-3 mt-2">
                  <div className="col-sm-6 d-flex align-items-start gap-2">
                    <span className="text-primary fw-bold">✓</span>
                    <p className="small text-muted mb-0"><strong>Live Environment Tracking:</strong> Instant continuous feeds mapping sensitive zones asset by asset.</p>
                  </div>
                  <div className="col-sm-6 d-flex align-items-start gap-2">
                    <span className="text-primary fw-bold">✓</span>
                    <p className="small text-muted mb-0"><strong>Shielded Business Continuity:</strong> Drastically mitigates internal inventory leakage and commercial liabilities.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 text-center">
                <div className="img-hover-container border-0 rounded-4 shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                    alt="Industrial commercial property tracking camera array" 
                    className="img-fluid object-fit-cover w-100 custom-section-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. REAL-TIME SMARTPHONE REMOTE SYNCHRONIZATION */}
        <section className="container my-5 py-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center">
              <div className="img-hover-container border-0 rounded-4 shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
                  alt="Smartphone running mobile remote security applications" 
                  className="img-fluid object-fit-cover w-100 custom-section-img"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="text-primary fw-bold tracking-wider text-uppercase small"> SMART ACCESS PROTOCOLS</span>
              <h3 className="fw-bold text-dark display-6 mt-1 mb-3">Global Stream Matrix on Personal Smart Devices</h3>
              <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                Distance is no longer a vulnerability. Our network division configures secure, authenticated cloud-access links allowing property stakeholders to view high-fidelity stream groupings live from anywhere across the globe.
              </p>
              <p className="text-secondary small" style={{ lineHeight: '1.7' }}>
                Whether logging in through a laptop console or a mobile smartphone interface, administrators receive instantaneous pushes during motion threshold violations. The underlying video pipelines use end-to-end cryptographic streams to prevent external packet intercepts.
              </p>
              <div className="p-3 bg-white border rounded-3 shadow-sm d-flex align-items-center gap-3 mt-3">
                <div className="h3 mb-0 text-warning">📱</div>
                <div>
                  <h6 className="fw-bold text-dark mb-0">Instant Mobile Sync</h6>
                  <p className="small text-muted mb-0">Receive high-priority frame captures the millisecond an entry lock line is crossed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VISUAL EXPLANATION: CAMERA HARDWARE & PHYSICS SPREAD */}
        <section className="container my-5 pt-4">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bold text-dark display-6">Camera Mechanics & Technology Overview</h2>
            <p className="text-muted">We deploy application-specific hardware form factors depending on your structural environmental limits.</p>
          </div>

          <div className="row align-items-center g-5 mb-5">
            <div className="col-md-6">
              <span className="text-primary fw-bold tracking-wider text-uppercase small">Form Factors Explained</span>
              <h3 className="fw-bold text-dark mt-1 mb-3">Dome Cameras vs. Bullet Security Arrays</h3>
              <p className="text-muted small" style={{ lineHeight: '1.7' }}>
                <strong>Dome Form Factors</strong> feature an impact-resistant, low-profile outer vandal shield. These are highly optimized for indoor common spaces, close-proximity retail counters, and office lobbies because their optical target tracking path is covertly masked.
              </p>
              <p className="text-muted small" style={{ lineHeight: '1.7' }}>
                <strong>Bullet Form Factors</strong> deliver robust, long-range directional zoom mechanics. Equipped with extended weatherproof sun-shields, these are engineered for exterior fence lines, long entry driveways, and specialized license-plate capture zones.
              </p>
            </div>
            <div className="col-md-6">
              <div className="img-hover-container rounded-4 shadow">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                  className="img-fluid w-100" 
                  style={{ height: '320px', objectFit: 'cover' }} 
                  alt="Security surveillance optics breakdown"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center g-5 pt-4">
            <div className="col-md-6 order-md-2">
              <span className="text-primary fw-bold tracking-wider text-uppercase small">Network Protocols</span>
              <h3 className="fw-bold text-dark mt-1 mb-3">Traditional Coaxial Analog vs. Modern Digital IP</h3>
              <p className="text-muted small" style={{ lineHeight: '1.7' }}>
                Our setups focus entirely on modern digital transition pathways. Traditional <strong>CCTV Analog Systems</strong> downscale incoming feeds via old coaxial physical pipelines. Conversely, <strong>Digital IP (Internet Protocol) Systems</strong> process compression algorithms inside the digital camera frame itself, pushing uncompressed high-definition data packets across integrated Category 6 lines.
              </p>
              
              <div className="table-responsive mt-4">
                <table className="table table-sm table-bordered bg-white text-muted small mb-0 shadow-sm align-middle">
                  <thead>
                    <tr className="bg-dark text-white">
                      <th className="p-2">Metric Check</th>
                      <th className="p-2">Analog Systems</th>
                      <th className="p-2">eCROWN IP Systems</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 fw-bold">Image Definition</td><td className="p-2">Static 1080p Interlaced</td><td className="p-2 text-primary fw-bold">4K Ultra-HD Crisp Progressions</td></tr>
                    <tr><td className="p-2 fw-bold">Line Infrastructure</td><td className="p-2">Separate Data & Power Pipes</td><td className="p-2 text-primary fw-bold">Single Ethernet PoE Cord Delivery</td></tr>
                    <tr><td className="p-2 fw-bold">Security Shielding</td><td className="p-2">Vulnerable Analog Signals</td><td className="p-2 text-primary fw-bold">End-to-End Cryptographic Streams</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="img-hover-container rounded-4 shadow">
                <img 
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80" 
                  className="img-fluid w-100" 
                  style={{ height: '350px', objectFit: 'cover' }} 
                  alt="Electronic infrastructure networking diagnostics"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. SYSTEM ARCHITECTURE FLOW MATRIX */}
        <section className="bg-white py-5 border-top border-bottom my-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <span className="badge bg-primary px-3 py-1.5 text-uppercase mb-2 text-white">Network Topology</span>
                <h3 className="fw-bold text-dark">Data Storage & Power Routing Schemes</h3>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.7' }}>
                  Our infrastructure designs isolate your secure data tracking streams on closed sub-networks. Camera endpoints feed uncompressed imagery matrices directly into dedicated high-capacity localized Network Video Recorders (NVRs). 
                </p>
                <p className="text-muted small" style={{ lineHeight: '1.7' }}>
                  This internal loop keeps running even during external internet service blackouts, safely backing up and synchronizing file records with remote mirror nodes once the connection recovers.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="img-hover-container rounded-4 shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=900&q=80" 
                    className="img-fluid w-100" 
                    style={{ height: '340px', objectFit: 'cover' }} 
                    alt="System connectivity schematic visualization"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. RECENT SITE INSTALLATIONS GALLERY */}
        <section className="container my-5">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-dark display-6 mb-1">Operational Visual Deployments</h3>
            <p className="text-muted small">Real monitoring nodes managed by eCROWN tech frameworks.</p>
          </div>

          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="card border-0 shadow-lg overflow-hidden h-100 bg-white custom-product-card">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top" 
                  style={{ height: '220px', objectFit: 'cover' }} 
                  alt="Industrial structural surveillance deployment" 
                />
                <div className="card-body p-4">
                  <span className="badge bg-light text-primary mb-2 px-2.5 py-1.5 font-weight-bold">Logistics Hub</span>
                  <h6 className="card-title fw-bold text-dark mb-2">Multi-Angle Dome Array</h6>
                  <p className="card-text text-muted small mb-0">Full perimeter industrial area protection paired with PoE server layouts.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card border-0 shadow-lg overflow-hidden h-100 bg-white custom-product-card">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top" 
                  style={{ height: '220px', objectFit: 'cover' }} 
                  alt="Modern corporate property monitoring perimeter" 
                />
                <div className="card-body p-4">
                  <span className="badge bg-light text-primary mb-2 px-2.5 py-1.5 font-weight-bold">Corporate Spaces</span>
                  <h6 className="card-title fw-bold text-dark mb-2">4K Bullet Intelligence Systems</h6>
                  <p className="card-text text-muted small mb-0">High-precision outdoor lenses tracking entryways with integrated AI motion alarms.</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card border-0 shadow-lg overflow-hidden h-100 bg-white custom-product-card">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top" 
                  style={{ height: '220px', objectFit: 'cover' }} 
                  alt="Main data rack system storage" 
                />
                <div className="card-body p-4">
                  <span className="badge bg-light text-primary mb-2 px-2.5 py-1.5 font-weight-bold">Data Storage Vaults</span>
                  <h6 className="card-title fw-bold text-dark mb-2">NVR Storage Server Cluster</h6>
                  <p className="card-text text-muted small mb-0">High-capacity disk drive assemblies configured for multi-week video history retention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. TRUSTED CORPORATE IMPLEMENTATIONS (AUTOMATED INTERACTION SLIDER) */}
        <section className="bg-light py-5 my-5 border-top border-bottom position-relative overflow-hidden">
          <div className="position-absolute right-0 bottom-0 top-0 w-50 h-100 bg-white opacity-50" 
               style={{ transform: 'translateX(15%) skewX(-12deg)', zIndex: 1, pointerEvents: 'none' }}></div>

          <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-lg-8 mb-4 text-center text-lg-start">
                <span className="badge px-3 py-2 text-uppercase fw-bold tracking-wider mb-3" 
                      style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', border: '1px solid rgba(13, 110, 253, 0.25)', color: '#0d6efd' }}>
                  Enterprise Case Studies
                </span>
                <h2 className="display-5 fw-bold text-dark mt-2 mb-3">
                  Trusted Corporate Implementations
                </h2>
                <p className="lead text-muted fs-6" style={{ maxWidth: '700px' }}>
                  Surveillance infrastructure architectures deployed across premier commercial sectors. Our systems defend high-liability pipelines, financial cores, and sprawling fulfillment networks.
                </p>
              </div>
            </div>
          </div>

          {/* AUTOMATED BOOTSTRAP SLIDER STRUCTURE WITH ENRICHED ENTERPRISE DATA NODES */}
          <div className="container mt-2 position-relative" style={{ zIndex: 2 }}>
            <div id="corporateSurveillanceCarousel" className="carousel slide carousel-fade shadow-2xl rounded-4 overflow-hidden" 
                 data-bs-ride="carousel" data-bs-interval="3000" style={{ minHeight: '440px' }}>
              
              {/* Indicators Navigation dots */}
              <div className="carousel-indicators" style={{ zIndex: 5 }}>
                <button type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide-to="3"></button>
              </div>

              {/* Slider Active Nodes */}
              <div className="carousel-inner h-100">
                
                {/* Slide 1 */}
                <div className="carousel-item active position-relative ecrown-carousel-height">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Financial Headquarter Area" />
                  <div className="ecrown-carousel-overlay">
                    <div className="text-center px-4">
                      <h3 className="fw-bold text-white mb-2">Financial Central Headquarters</h3>
                      <span className="badge bg-primary px-3 py-1.5 text-uppercase text-white">Enterprise Network Isolation</span>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item position-relative ecrown-carousel-height">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Logistics Center Fulfillment Map" />
                  <div className="ecrown-carousel-overlay">
                    <div className="text-center px-4">
                      <h3 className="fw-bold text-white mb-2">Logistics & Supply Fulfillment Centers</h3>
                      <span className="badge bg-success px-3 py-1.5 text-uppercase text-white">Multi-Tier Loading Bay Grid</span>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item position-relative ecrown-carousel-height">
                  <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Data Core Infrastructure Server Vault" />
                  <div className="ecrown-carousel-overlay">
                    <div className="text-center px-4">
                      <h3 className="fw-bold text-white mb-2">Data Server Core Vault Infrastructure</h3>
                      <span className="badge bg-warning text-dark px-3 py-1.5 text-uppercase">Biometric Entry Perimeter Scans</span>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="carousel-item position-relative ecrown-carousel-height">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 h-100 object-fit-cover" alt="Industrial Complex Labs" />
                  <div className="ecrown-carousel-overlay">
                    <div className="text-center px-4">
                      <h3 className="fw-bold text-white mb-2">Industrial Engineering Complexes</h3>
                      <span className="badge bg-info text-dark px-3 py-1.5 text-uppercase">High-Temperature Thermal Analytics</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Manual Shift Vectors */}
              <button className="carousel-control-prev" type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#corporateSurveillanceCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>
        </section>

        {/* 10. LIFECYCLE COMPLIANCE & MAINTENANCE CONTRACTS (SLA) */}
        <section className="container my-5">
          <div className="p-4 p-md-5 rounded-4 shadow-lg text-white bg-deep-slate" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #090d16 100%)' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h4 className="fw-bold text-warning mb-3">Proactive System Maintenance & Service Level Agreements</h4>
                <p className="small text-light opacity-75 mb-0" style={{ lineHeight: '1.7' }}>
                  Surveillance arrays degrade due to lens dust buildup, storage drive exhaustion, or environmental weathering. eCROWN protects your system's uptime through automated health scanning, periodic physical cleaning, camera angle re-calibration, and critical firmware updates.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="p-4 rounded-3 border border-secondary text-start text-light small" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1) !important' }}>
                  <strong className="d-block mb-2 text-warning">Support Options Available:</strong>
                  <div className="mt-1 text-muted-custom">• Quarterly Lens Maintenance Checks</div>
                  <div className="text-muted-custom">• NVR Hard Drive Lifetime Scans</div>
                  <div className="text-muted-custom">• 24/7 Urgent Field Tech Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 11. FLOATING FIXED STABLE ACTION BUTTON (FAB) - CENTERED */}
      {/* Positioned at the exact horizontal center of the viewport screen */}
      <div className="position-fixed bottom-0 start-50 translate-middle-x pb-4 text-center w-auto px-3" style={{ zIndex: 1090 }}>
        <a 
          href="mailto:Info@ecrowntechnologies.net" 
          className="btn btn-primary rounded-pill shadow-2xl px-4 py-3 fw-bold tracking-wide d-flex align-items-center gap-2 border border-white border-opacity-20 hover-scale-up text-decoration-none text-white transition-all"
          style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap'
          }}
        >
          <span className="fs-5">📋</span> Request Architecture Quote
        </a>
      </div>

      

      {/* Integrated Style Sheet Block */}
      <style>{`
        .text-gradient-hero {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-deep-slate {
          background-color: #090d16 !important;
        }
        .bg-light-blue-strip {
          background-color: #eff6ff !important;
        }
        .text-muted-custom {
          color: #94a3b8;
        }
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .btn-hero-primary {
          background: #2563eb;
          color: #ffffff;
          border: 1px solid #2563eb;
          transition: all 0.3s ease;
        }
        .btn-hero-primary:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }
        .custom-frame-deco {
          border-radius: 16px;
          transform: translate(8px, 8px);
          background: linear-gradient(135deg, #2563eb, transparent) !important;
        }
        .img-hover-container {
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .custom-section-img {
          height: 350px;
          object-fit: cover;
        }
        .custom-product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0 !important;
        }
        .custom-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1) !important;
        }
        .ecrown-carousel-height {
          height: 440px;
        }
        @media (max-width: 768px) {
          .ecrown-carousel-height {
            height: 320px;
          }
        }
        .ecrown-carousel-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          background: linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0.3) 70%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ecrown-carousel-overlay h3 {
          font-size: 1.8rem;
          text-shadow: 0 2px 8px rgba(0,0,0,0.7);
        }
        .transition-link:hover {
          text-decoration: underline !important;
        }
        .hover-scale-up {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-scale-up:hover {
          transform: translateX(-50%) scale(1.04) !important; /* Preserves Bootstrap's centering math while scaling up */
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4) !important;
          color: #ffffff !important;
        }
        .transition-all {
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </div>
    <Footer/>
    </>

  );
}

export default Cctv;