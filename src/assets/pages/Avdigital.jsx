import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Avdigital = () => {
  return (
    <>
      <Navbar />  
      <div className="bg-light text-dark min-vh-screen" style={{ fontFamily: 'sans-serif' }}>

        {/* 1. HERO SECTION (Premium Glassmorphism & High-Impact Visual Layout) */}
        <section className="bg-deep-slate text-white position-relative overflow-hidden py-5 d-flex align-items-center" style={{ minHeight: '85vh' }}>

          {/* Ambient High-Tech Glow Effects */}
          <div
            className="position-absolute rounded-circle opacity-30"
            style={{ top: '-10%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }}
          ></div>
          <div
            className="position-absolute rounded-circle opacity-20"
            style={{ bottom: '-5%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none' }}
          ></div>

          <div className="container position-relative py-5" style={{ zIndex: 10 }}>
            <div className="row align-items-center g-5">

              {/* Left Column: Glassmorphism Text & CTA Box */}
              <div className="col-lg-6 text-center text-lg-start">
                <div className="hero-glass-card p-4 p-md-5 rounded-4 border border-white border-opacity-10 shadow-lg backdrop-blur">
                  <span
                    className="badge mb-3 px-3 py-2 border text-uppercase fw-bold animate-pulse"
                    style={{ backgroundColor: 'rgba(37, 99, 235, 0.25)', color: '#60a5fa', borderColor: 'rgba(147, 197, 253, 0.3)', letterSpacing: '0.15em', fontSize: '0.75rem' }}
                  >
                    ⚡ Premium Installation Systems
                  </span>
                  <h1 className="display-3 mb-3 text-white tracking-tight" style={{ fontWeight: 800, lineHeight: 1.1 }}>
                    Next-Gen A/V & <br />
                    <span className="text-gradient-hero">Digital Signage</span>
                  </h1>
                  <p className="mb-4 text-slate-300" style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#cbd5e1' }}>
                    Transforming commercial environments with crisp multi-screen display matrices, smart dynamic signage, and acoustic sound distribution tailored precisely to your workspace architecture.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                    <Link to="/contact" className="text-decoration-none">
                    <a className="btn btn-hero-primary px-4 py-3 fw-bold rounded-3 shadow-lg">
                      Request Consultation
                    </a>
                    </Link>

                    <Link to="/" className="text-decoration-none">
                    <a href="" className="btn btn-hero-outline px-4 py-3 fw-bold rounded-3">
                      Explore Services
                    </a>
                    
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Geometric Image Showcase */}
              <div className="col-lg-6">
                <div className="position-relative hero-img-wrapper ps-lg-4">
                  {/* Decorative Backing Frame */}
                  <div className="position-absolute translate-middle-x bg-primary opacity-10 rounded-4 custom-frame-deco" style={{ top: '20px', left: '50%', width: '90%', height: '100%', zIndex: 1 }}></div>

                  {/* Main Display Image */}
                  <div className="position-relative overflow-hidden rounded-5 shadow-2xl border border-white border-opacity-10 style-hero-frame" style={{ zIndex: 2 }}>
                    <img
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                      alt="Bright, modern Supermarket Interior Display Environment"
                      className="w-100 object-fit-cover transition-img hero-main-img"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient-hero-card text-start">
                      <div className="d-flex align-items-center gap-2">
                        <span className="hero-indicator-dot"></span>
                        <p className="text-white-50 small mb-0 fw-bold tracking-wider text-uppercase" style={{ fontSize: '10px' }}>Active Retail Deployment Environment</p>
                      </div>
                      <h4 className="fw-bold text-white mb-0 mt-1" style={{ fontSize: '1.25rem' }}>High-Impact Commercial Spatial Systems</h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CORE PILLARS TICKER */}
        <div
          className="text-center py-3 text-uppercase fw-bold text-white tracking-widest border-bottom border-white border-opacity-10"
          style={{ backgroundColor: '#090d16', fontSize: '0.85rem', letterSpacing: '0.3em' }}
        >
          Technology <span className="mx-3 text-primary opacity-50">|</span> Innovation <span className="mx-3 text-primary opacity-50">|</span> Excellence
        </div>

        {/* 2. CORE EXPLANATORY SECTION */}
        <section id="explainers" className="container py-5 my-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
            <span className="text-primary text-uppercase fw-bold tracking-wider small d-block mb-1">// TECHNICAL CORE</span>
            <h2 className="fw-bold text-dark display-5">Understanding the Technology</h2>
            <p className="text-muted lead fs-6">We don't just hang screens; we craft communication experiences. Here is exactly what these setups do for your enterprise.</p>
          </div>

          {/* Audio/Visual Block */}
          <div className="row align-items-center gy-5 mb-5 pb-5">
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary" style={{ width: '52px', height: '52px', backgroundColor: '#dbeafe' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                  <path d="M11.536 14.01A8.47 8.47 0 0 0 14 10.246a8.47 8.47 0 0 0-2.464-3.764.5.5 0 0 0-.708.708 7.48 7.48 0 0 1 2.172 3.056 7.48 7.48 0 0 1-2.172 3.056.5.5 0 0 0 .708.708m-2.122-2.122A5.47 5.47 0 0 0 11 10.246c0-1.348-.485-2.58-1.29-3.536a.5.5 0 0 0-.768.641 4.47 4.47 0 0 1 1.058 2.895c0 1.133-.42 2.168-1.058 2.895a.5.5 0 0 0 .768.641m-2.122-2.122A3.5 3.5 0 0 0 8 10.245c0-.775-.247-1.49-.665-2.075a.5.5 0 0 0-.813.583c.307.43.478.956.478 1.492s-.17 1.062-.478 1.492a.5.5 0 0 0 .813.583M10.025 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3l4 4V0L7 4z" />
                </svg>
              </div>
              <h3 className="fw-bold text-dark mb-3">What is Audio/Visual (A/V)?</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                Audio/Visual technology encompasses all synchronized sound and display hardware engineered to deliver pristine video playback, perfect speech amplification, and intelligent multimedia presentations.
              </p>
              <ul className="list-unstyled mt-3 fw-medium text-secondary">
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Crystal-clear multi-zone sound distribution frameworks</li>
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Smart boardroom video-conferencing matrices</li>
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Automated acoustic signal matrices and hardware</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="img-hover-container">
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional A/V Conference Room Integration Setup"
                  className="img-fluid custom-img-height"
                />
              </div>
            </div>
          </div>

          {/* Digital Signage Block */}
          <div className="row align-items-center gy-5 mt-2">
            <div className="col-md-6 order-2 order-md-1">
              <div className="img-hover-container">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Commercial Digital Signage System Array"
                  className="img-fluid custom-img-height"
                />
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary" style={{ width: '52px', height: '52px', backgroundColor: '#dbeafe' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                </svg>
              </div>
              <h3 className="fw-bold text-dark mb-3">What is Digital Signage?</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                Digital Signage utilizes premium electronic display architecture to broadcast dynamic menus, critical company alerts, and targeted marketing assets instantly across a network of screens.
              </p>
              <ul className="list-unstyled mt-3 fw-medium text-secondary">
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Dynamic enterprise bulletins and scheduled content loops</li>
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Interactive wayfinding directories and digital product boards</li>
                <li className="mb-2"><span className="d-inline-block rounded-circle bg-primary me-2" style={{ width: '8px', height: '8px' }}></span> Cloud-managed display layout tools deployed remotely</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. TARGET WORKSPACE DEPLOYMENTS SECTION (High-Contrast Large Layout) */}
        <section className="container py-5 my-4 border-top">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
            <span className="text-primary text-uppercase fw-bold tracking-wide small d-block mb-1">// FIELD EXPERTISE</span>
            <h2 className="fw-bold text-dark display-5">Target Workspace Deployments</h2>
            <p className="text-muted lead fs-6">We engineer professional visual and audio communication architecture precisely configured for distinct institutional environments.</p>
          </div>

          <div className="d-flex flex-column gap-5">

            {/* Deployment 1: Church */}
            <div className="row align-items-center gy-4 bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
              <div className="col-lg-6">
                <div className="img-hover-container shadow">
                  <img
                    src="https://images.unsplash.com/photo-1548625361-155defe219fa?auto=format&fit=crop&w=1200&q=80"
                    alt="Worship Center Large Display Installation"
                    className="img-fluid custom-workspace-big-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 px-lg-4">
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary bg-blue-50" style={{ width: '56px', height: '56px' }}>
                  <span className="fs-3">⛪</span>
                </div>
                <h3 className="fw-bold text-dark mb-3">Churches & Worship Sanctuaries</h3>
                <p className="text-secondary fw-normal fs-6" style={{ lineHeight: '1.7' }}>
                  We set up structural screens across worship sanctuaries, tabernacles, and overflow centers. Installations are paired with high-clarity comfort displays for speakers, secondary side halls, and integrated delay matrices to align sound perfectly with massive visual loops.
                </p>
              </div>
            </div>

            {/* Deployment 2: School */}
            <div className="row align-items-center gy-4 bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="img-hover-container shadow">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                    alt="Educational Lecture Hall Display System"
                    className="img-fluid custom-workspace-big-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1 px-lg-4">
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary bg-blue-50" style={{ width: '56px', height: '56px' }}>
                  <span className="fs-3">🏫</span>
                </div>
                <h3 className="fw-bold text-dark mb-3">Schools & Lecture Halls</h3>
                <p className="text-secondary fw-normal fs-6" style={{ lineHeight: '1.7' }}>
                  Our team deploys collaborative interactive short-throw smart screens, large-format multi-row projection assemblies, and structured overhead microphone matrices in auditoriums to support dynamic remote learning protocols and effortless on-campus announcements.
                </p>
              </div>
            </div>

            {/* Deployment 3: Hotel */}
            <div className="row align-items-center gy-4 bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
              <div className="col-lg-6">
                <div className="img-hover-container shadow">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                    alt="Hotel Reception Digital Signage Architecture"
                    className="img-fluid custom-workspace-big-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 px-lg-4">
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary bg-blue-50" style={{ width: '56px', height: '56px' }}>
                  <span className="fs-3">🏨</span>
                </div>
                <h3 className="fw-bold text-dark mb-3">Hotels & Hospitality Hubs</h3>
                <p className="text-secondary fw-normal fs-6" style={{ lineHeight: '1.7' }}>
                  Elevate guest reception spaces with smart multi-zone background acoustics, architectural ultra-slim wall screens, and cloud-synchronized concierge wayfinding panels designed to manage conference listings and amenities schedules in real time.
                </p>
              </div>
            </div>

            {/* Deployment 4: Corporate Office */}
            <div className="row align-items-center gy-4 bg-white p-4 p-lg-5 rounded-4 border shadow-sm">
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="img-hover-container shadow">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                    alt="Corporate Office Unified Boardroom Setup"
                    className="img-fluid custom-workspace-big-img"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-1 px-lg-4">
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-primary bg-blue-50" style={{ width: '56px', height: '56px' }}>
                  <span className="fs-3">🏢</span>
                </div>
                <h3 className="fw-bold text-dark mb-3">Office Boardrooms & Workspaces</h3>
                <p className="text-secondary fw-normal fs-6" style={{ lineHeight: '1.7' }}>
                  Streamline corporate workflow with crystal-clear web-conferencing arrays, hardware automation hubs, directional audio matrices, and digital check-in screens mounted at conference entries to maximize scheduling efficiency.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. PREMIUM HARDWARE SHOWCASE GRID */}
        <section className="bg-white py-5 border-top border-bottom">
          <div className="container py-4">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
              <span className="text-primary text-uppercase fw-bold tracking-wide small d-block mb-1">// CORE DEPLOYMENT TARGETS</span>
              <h2 className="fw-bold text-dark display-6">Premium Hardware Integration</h2>
              <p className="text-muted">From ultra-bright panels to fine-tuned acoustic components, we mount and program industrial hardware tailored to your space parameters.</p>
            </div>

            <div className="row g-4">
              {/* Product 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80" alt="Commercial Display Screen Installation" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Continuous Commercial TVs</h5>
                    <p className="small text-muted mb-0">Engineered for constant 24/7 runtimes with integrated internal cooling shields and polarized anti-glare filters.</p>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Seamless LED Walls" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Seamless Fine-Pitch LED Screens</h5>
                    <p className="small text-muted mb-0">High-luminosity modular display components built to maintain extreme color accuracy under sunlight fields.</p>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" alt="High-Lumen Projectors" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">High-Lumen Laser Projectors</h5>
                    <p className="small text-muted mb-0">Advanced heavy-duty projection configurations complete with automated ambient light rejection surfaces for massive halls.</p>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80" alt="Acoustic Speakers" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Multi-Zone Array Speakers</h5>
                    <p className="small text-muted mb-0">High-fidelity column sound reinforcers and ceiling arrays calibrated precisely to minimize echo artifacts across high-ceiling architecture.</p>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Interactive Display Boards" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Interactive Display Boards</h5>
                    <p className="small text-muted mb-0">Smart touch-responsive panels built to elevate cooperative spaces, allowing live updates and remote content deployments.</p>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="col-lg-4 col-md-12">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Centralized Hardware Matrix Hub" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Centralized Hardware Matrix Hubs</h5>
                    <p className="small text-muted mb-0">Advanced systemic splitters linking streaming equipment sources to physical visual panels across your network infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VIDEO GALLERY SHOWCASE */}
        <section className="bg-dark-navy text-white py-5">
          <div className="container py-4">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
              <span className="text-primary text-uppercase fw-bold tracking-wide small d-block mb-2">Visual Showcase</span>
              <h2 className="fw-bold display-6 text-white">See Our Hardware In Action</h2>
              <p className="text-secondary" style={{ color: '#94a3b8' }}>Explore operational video configurations showcasing our active architectural layouts inside target properties.</p>
            </div>

            <div className="row g-4">
              {/* Video 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="custom-video-card h-100 shadow">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video Wall Setup" allowFullScreen></iframe>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-white mb-2">Commercial Video Walls</h5>
                    <p className="small mb-0" style={{ color: '#94a3b8' }}>Seamless multi-screen arrays configured flawlessly for shopping centers, control stations, and customer greeting zones.</p>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="custom-video-card h-100 shadow">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Smart Corporate Space" allowFullScreen></iframe>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-white mb-2">Smart Conference Rooms</h5>
                    <p className="small mb-0" style={{ color: '#94a3b8' }}>High-fidelity directional voice pickup matched with auto-focus camera installations for clean corporate streaming.</p>
                  </div>
                </div>
              </div>

              {/* Video 3 */}
              <div className="col-lg-4 col-md-12">
                <div className="custom-video-card h-100 shadow">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Interactive Touch Kiosk" allowFullScreen></iframe>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-white mb-2">Interactive Kiosks</h5>
                    <p className="small mb-0" style={{ color: '#94a3b8' }}>Capacitive touchscreen structures calibrated perfectly for consumer maps, shopping centers, and airport hubs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. INSTANT CUSTOMER INFLUENCE VIA SUPERMARKET DIGITAL PROMOTIONS */}
        <section className="container py-5 my-4">
          <div className="p-4 p-md-5 rounded-4 border bg-white shadow-lg bg-light-blue-strip" style={{ borderColor: '#bfdbfe' }}>
            <div className="row align-items-center g-5">

              {/* Left Column: Text Content */}
              <div className="col-lg-7 order-2 order-lg-1">
                <span className="badge bg-primary text-uppercase px-3 py-2 mb-3 tracking-wide text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                  Real-World Scenario Focus
                </span>
                <h3 className="fw-bold text-dark display-6 mb-3">
                  Instant Customer Influence via Supermarket Digital Promotions
                </h3>
                <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                  Imagine a customer walking down your retail supermarket aisles. We display promotions on large screens directly at their decision points. Instead of interacting with static or fading print paper, shoppers face an ultra-bright, synchronized matrix of <strong>digital signage screens and promotional display boards</strong>.
                </p>
                <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                  This network empowers administrators to distribute instant store flash updates, point-of-sale grocery product coupons, dynamic stock clearance tickers, or crisp third-party vendor advertisements remotely. Our digital distribution ecosystems shift shelf-level customer engagement metrics instantly.
                </p>
                <div className="p-3 rounded border border-primary border-opacity-20 d-inline-block bg-white shadow-sm">
                  <span className="text-primary fw-bold" style={{ fontSize: '0.95rem' }}>
                    🎯 Replaces print logistics completely while boosting targeted commercial item notice metrics.
                  </span>
                </div>
              </div>

              {/* Right Column: Big Supermarket Display Image */}
              <div className="col-lg-5 order-1 order-lg-2 text-center">
                <div className="img-hover-container border-0 rounded-4 shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80"
                    alt="Active retail promotional display board running inside modern supermarket environment"
                    className="img-fluid object-fit-cover w-100 custom-supermarket-promo-img"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. VALUE PROPOSITION */}
        <section className="container py-5 my-2">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bold text-dark">Why Partner With eCROWN?</h2>
            <p className="text-muted">We execute your system development start to finish—from initial line drops to custom hardware integrations.</p>
          </div>

          <div className="row g-4">
            <div className="col-xl-3 col-sm-6">
              <div className="custom-value-card p-4 h-100 shadow-sm">
                <div className="fw-bold text-primary mb-2">01 / Certified Crew</div>
                <h5 className="fw-bold text-dark mb-2">Engineering Focus</h5>
                <p className="small text-muted mb-0">Structural technicians calculate precise structural weights so heavy equipment maps and drops mount securely.</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="custom-value-card p-4 h-100 shadow-sm">
                <div className="fw-bold text-primary mb-2">02 / Unified Networks</div>
                <h5 className="fw-bold text-dark mb-2">Flawless Continuity</h5>
                <p className="small text-muted mb-0">We integrate all newly deployed terminal equipment directly into your localized networks and secure data systems.</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="custom-value-card p-4 h-100 shadow-sm">
                <div className="fw-bold text-primary mb-2">03 / Turnkey Logistics</div>
                <h5 className="fw-bold text-dark mb-2">End-to-End Delivery</h5>
                <p className="small text-muted mb-0">We run low-voltage lines down, configure target switch boxes, and thoroughly train your on-site administration teams.</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="custom-value-card p-4 h-100 shadow-sm">
                <div className="fw-bold text-primary mb-2">04 / Lifecycle Support</div>
                <h5 className="fw-bold text-dark mb-2">Ongoing Assurance</h5>
                <p className="small text-muted mb-0">Prompt long-term firmware checks and on-site support lines to optimize continuous media broadcast speeds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT & REQUEST CALLBACK FORM */}
        <section id="contact" className="bg-light-blue-strip py-5 border-top">
          <div className="container">
            <div className="mx-auto shadow-lg rounded-4 overflow-hidden bg-white" style={{ maxWidth: '900px' }}>
              <div className="row g-0">

                {/* Information Accent Banner */}
                <div className="col-md-5 bg-deep-slate p-5 text-white d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="fw-bold mb-3 text-white">Ready to Start?</h3>
                    <p className="small mb-0" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                      Connect with our engineering lead to map out infrastructure layouts or system distribution requirements.
                    </p>
                  </div>
                  <div className="mt-5 small" style={{ color: '#94a3b8' }}>
                    <p className="mb-1"><strong className="text-white">Scope:</strong> Commercial Digital Signage Integration</p>
                    <p className="mb-0"><strong className="text-white">Quality:</strong> Excellence at its peak</p>
                  </div>
                </div>

                {/* Form Input Elements */}
                <div className="col-md-7 p-5">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <h4 className="fw-bold text-dark mb-4">Technical Request Form</h4>
                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.75rem' }}>Your Name</label>
                        <input type="text" placeholder="e.g. John Doe" className="form-control py-2 text-sm" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.75rem' }}>Company</label>
                        <input type="text" placeholder="Acme Corporation" className="form-control py-2 text-sm" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.75rem' }}>Email Address</label>
                      <input type="email" placeholder="dev@company.com" className="form-control py-2 text-sm" required />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.75rem' }}>Project Space Specifications</label>
                      <textarea rows="3" placeholder="Provide layout context (e.g., number of screens, audio requirements, property style...)" className="form-control py-2 text-sm"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2.5 fw-bold shadow-sm" style={{ backgroundColor: '#2563eb', border: 'none' }}>
                      Submit Project Specifications
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

        
      </div>

      {/* Embedded High-Contrast UI Layout CSS Styles */}
      <style>{`
        .text-gradient-hero {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient {
          background: linear-gradient(90deg, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-dark-navy {
          background-color: #0b0f19 !important;
        }
        .bg-deep-slate {
          background-color: #090d16 !important;
        }
        .bg-light-blue-strip {
          background-color: #eff6ff !important;
        }
        .bg-blue-50 {
          background-color: #f0f9ff !important;
        }
        
        /* Premium Hero UI Layout Component Elements */
        .hero-glass-card {
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .style-hero-frame {
          border-radius: 24px 80px 24px 24px !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        .hero-main-img {
          height: 480px;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-img-wrapper:hover .hero-main-img {
          transform: scale(1.04);
        }
        .custom-frame-deco {
          border-radius: 24px 80px 24px 24px;
          transform: scale(1.02) translate(8px, 12px);
          background: linear-gradient(135deg, #2563eb, transparent) !important;
        }
        .bg-gradient-hero-card {
          background: linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0.4) 75%, transparent 100%);
        }
        .hero-indicator-dot {
          width: 8px;
          height: 8px;
          background-color: #34d399;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #34d399;
        }
        
        /* Hero Buttons UI Focus */
        .btn-hero-primary {
          background: #2563eb;
          color: #ffffff;
          border: 1px solid #2563eb;
          transition: all 0.3s ease;
        }
        .btn-hero-primary:hover {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }
        .btn-hero-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        .btn-hero-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #ffffff;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .custom-img-height {
          height: 360px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .img-hover-container {
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }
        .img-hover-container:hover img {
          transform: scale(1.03);
        }
        .custom-video-card {
          background-color: #1e293b;
          border: 1px solid #334155;
          border-radius: 12px;
          overflow: hidden;
        }
        .custom-value-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .custom-value-card:hover {
          border-color: #2563eb;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
        }
        .custom-product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0 !important;
        }
        .custom-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06) !important;
        }
        .transition-img {
          transition: transform 0.5s ease;
        }
        .custom-product-card:hover .transition-img {
          transform: scale(1.06);
        }
        
        .custom-workspace-big-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-supermarket-promo-img {
          height: 420px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Footer Link Animations */
        .footer-contact-link {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .footer-contact-link:hover {
          transform: translateX(4px);
        }
        .footer-contact-link:hover span {
          color: #3b82f6;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-pulse {
          animation: pulse 3s infinite;
        }
      `}</style>
      <Footer/>
    </>
  );
};


export default Avdigital;