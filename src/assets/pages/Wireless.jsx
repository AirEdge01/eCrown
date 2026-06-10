import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Dash from '../components/Dash';

const Wireless = () => {
  return (
    <>
      <style>{`
        .wireless-viewport {
          background: #f8fafc;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #0f172a;
          overflow-x: hidden;
        }
        .ambient-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(160px);
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }
        .wireless-cyber-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .wireless-hero {
          position: relative;
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(239,246,255,0.88) 100%),
                      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          padding: 60px 0;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
        }
        .premium-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-card:hover {
          transform: translateY(-5px);
          background: #ffffff;
          border-color: rgba(37, 99, 235, 0.2);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.08);
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid rgba(37, 99, 235, 0.15);
          color: #1e40af;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 8px 20px;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.04);
        }
        .pulse-beacon {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: beaconGlow 2s infinite;
        }
        @keyframes beaconGlow {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          70% { transform: scale(1.2); box-shadow: 0 0 0 8px rgba(16,185,129,0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }
        .action-link-btn {
          background: #003399;
          color: #ffffff;
          padding: 14px 36px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .action-link-btn:hover {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
          transform: translateY(-1px);
        }
        .section-headline { font-size: 2.1rem; font-weight: 800; color: #0f172a; }
        .section-tagline { color: #2563eb; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; display: block; margin-bottom: 6px; }
        .telemetry-table th { color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 12px; }
        .telemetry-table td { background: rgba(255, 255, 255, 0.6); border-top: 1px solid #f1f5f9; padding: 14px; font-size: 14px; color: #334155; }
        .telemetry-badge { background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); color: #065f46; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 6px; }
      `}</style>

      <div className="wireless-viewport">
        <Navbar />
        <Dash />

        <div className="ambient-glow" style={{ top: '-5%', left: '-5%', background: '#dbeafe' }}></div>
        <div className="ambient-glow" style={{ bottom: '20%', right: '-5%', background: '#eff6ff' }}></div>

        {/* ── 1. HERO SECTION ── */}
        <section className="wireless-hero">
          <div className="wireless-cyber-grid"></div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row justify-content-center">
              <div className="col-lg-9 glass-panel text-center">
                <div className="status-pill mb-4"><span className="pulse-beacon"></span> NEXT-GEN INFRASTRUCTURE</div>
                <h1 className="display-4 fw-extrabold text-slate-900 mb-2">Wireless Networking</h1>
                <p className="fs-6 text-primary fw-bold mb-4 tracking-wider">...EXCELLENCE AT ITS PEAK</p>
                <p className="mx-auto text-secondary mb-4 max-w-2xl" style={{ color: '#475569', maxWidth: '680px', lineHeight: '1.7' }}>
                  We transform your corporate connectivity with high-speed, secure, and seamless wireless topologies built to process mission-critical enterprise workflows over multi-tier environments.
                </p>
                <a href="#services" className="action-link-btn d-inline-block">Explore Enterprise Frameworks</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. INTRODUCTION SECTION ── */}
        <section className="container my-5 py-4" id="services">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <span className="section-tagline">PRODUCT SPECIFICATION</span>
              <h2 className="section-headline mb-3">What is Wireless Networking?</h2>
              <p className="text-stretch" style={{ color: '#475569', lineHeight: '1.75' }}>
                Wireless networking refers to technologies that allow hardware and digital endpoints to communicate without restrictive physical cable runs. At <strong>eCROWN Technologies O₂</strong>, we map, configure, and isolate complex radio frequency infrastructures tailored to your structural layout, utilizing adaptive active scaling.
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" alt="Backbone" className="img-fluid rounded-4 shadow mt-3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* ── 3. EXPERT INSTALLATION SERVICES ── */}
        <section className="py-5 bg-white-50" style={{ background: 'rgba(255,255,255,0.4)', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-tagline">DEPLOYMENT MATRICES</span>
              <h2 className="section-headline">Expert Installation Services</h2>
            </div>
            <div className="row g-4">
              {[
                { title: "Wired/Wireless AP Setup", desc: "Multi-cluster localized point deployment with smart handoff logic.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
                { title: "Router Configuration", desc: "Core pathway load distribution tuning and traffic structural slicing.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" },
                { title: "Network Security", desc: "Cryptographic layer locks, rogue terminal protection, and containment.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
                { title: "Site Surveys", desc: "Radio frequency spectrum evaluation, obstruction calculation, and mapping.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" }
              ].map((item, i) => (
                <div key={i} className="col-md-3">
                  <div className="card h-100 premium-card border-0 p-3">
                    <img src={item.img} className="img-fluid rounded-4 shadow mt-3" alt={item.title} style={{ height: '150px', width: '100%', objectFit: 'cover' }} />
                    <div className="card-body px-1 pt-3 pb-1">
                      <h5 className="fw-bold text-dark mb-2 fs-6">{item.title}</h5>
                      <p className="text-muted small m-0" style={{ lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. REAL-WORLD IMPACT ── */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-6">
                <span className="section-tagline">OPERATIONAL CAPACITY</span>
                <h2 className="section-headline mb-3">Real-World Impact</h2>
                <p className="fs-6 text-muted mb-4" style={{ color: '#475569', lineHeight: '1.7' }}>
                  From complex high-density corporate enterprise environments to high-tier hospitality layouts, our wireless systems guarantee uncompromised, latency-free connectivity metrics designed specifically to cross structural architectural blockades.
                </p>
              </div>
              <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Workspace" className="img-fluid rounded-4 shadow mt-3" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CORE FOCUS AREAS ── */}
        <section className="container my-4 py-4 text-center">
          <span className="section-tagline">INFRASTRUCTURE PILLARS</span>
          <h2 className="section-headline mb-5">Core Focus Areas</h2>
          <div className="row g-4">
            {[
              { area: "Technology Infrastructure", img: "https://images.bannerbear.com/direct/4mGpW3zwpg0ZK0AxQw/requests/000/103/448/673/nyLXxdvaNQgPn8EMY9wePZm1E/c4f1fde8296af386ccdca0a25f5ac55903d1cc0b.jpg" },
              { area: "Security Systems", img: "https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/7916661a-40c3-4d65-8ea8-6785dfe41ab8/GettyImages-1303567646.jpg" },
              { area: "Business Automation", img: "https://ppcng.com/wp-content/uploads/2025/05/Business-Automation.png" },
              { area: "Digital Communication", img: "https://online.unt.edu/images/digital-communication-analytics-hero.jpg" }
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="card p-3 premium-card h-100 border-0 text-start d-flex flex-column justify-content-between">
                  <h5 className="mt-1 text-dark fw-bold fs-6 px-1">{item.area}</h5>
                  <img src={item.img} className="img-fluid rounded-4 shadow mt-3" alt={item.area} style={{ height: '140px', width: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. ADVANCED SERVICES ── */}
        <section className="py-5" style={{ background: 'rgba(255,255,255,0.4)', borderTop: '1px solid #e2e8f0' }}>
          <div className="container">
            <div className="text-center mb-5"><span className="section-tagline">TACTICAL NETWORKING</span><h2 className="section-headline">Advanced Services</h2></div>
            <div className="row g-4">
              {[
                { title: "Point-to-Point (P2P)", desc: "High-throughput building long-range microwave bridging.", img: "https://www.andrew.com/globalassets/digizuite/1033681-valuline-500x281.jpg" },
                { title: "Satellite Networking", desc: "Remote high-speed aerospace downlinks deployed for isolated sites.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
                { title: "IoT Connectivity", desc: "Low-power dense terminal grids configured for machinery sync.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" }
              ].map((srv, i) => (
                <div key={i} className="col-md-4">
                  <div className="card p-3 h-100 premium-card border-0">
                    <img src={srv.img} className="img-fluid rounded-4 shadow mt-3" alt={srv.title} style={{ height: '180px', width: '100%', objectFit: 'cover' }} />
                    <div className="card-body px-1 pt-3 pb-1">
                      <h5 className="fw-bold text-dark mb-1 fs-6">{srv.title}</h5>
                      <p className="text-muted small m-0">{srv.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. PORTFOLIO GRID ── */}
        <section className="container my-5 py-4">
          <div className="text-center mb-5"><span className="section-tagline">FIELD PRODUCTIONS</span><h2 className="section-headline">Our Network Portfolio</h2></div>
          <div className="row g-4">
            {["photo-1562408590-e32931084e23", "photo-1544197150-b99a580bb7a8", "photo-1518770660439-4636190af475", ].map((id, idx) => (
              <div key={idx} className="col-md-4">
                <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`} className="img-fluid rounded-4 shadow mt-3" alt="Portfolio" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. TESTIMONIALS ── */}
        <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
          <div className="container">
            <div className="text-center mb-5"><span className="section-tagline">VERIFIED VALIDATIONS</span><h2 className="section-headline">Customer Testimonials</h2></div>
            <div className="row g-4">
              {[1, 2, 3].map(n => (
                <div key={n} className="col-md-4">
                  <div className="card p-4 premium-card border-0 h-100 d-flex flex-column justify-content-between">
                    <p className="fs-6 style-italic m-0" style={{ color: '#475569', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6' }}>
                      "eCROWN Technologies provided professional, completely reliable wireless topology mapping for our corporate workspace layout."
                    </p>
                    <div className="mt-3 pt-2" style={{ borderTop: '1px solid #f1f5f9' }}>
                      <small className="fw-bold text-primary"> Enterprise Client {n}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <Button />
    </>
  );
};

export default Wireless;