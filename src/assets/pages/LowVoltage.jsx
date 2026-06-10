import React from 'react';
import Footer from "../components/Footer";
import Button from "../components/Button";
import Navbar from '../components/Navbar';
import Dash from '../components/Dash';

const stats = [
  { val: "500+", label: "DEPLOYED SITES" },
  { val: "99.9%", label: "NETWORK UPTIME" },
  { val: "15+", label: "YEARS EXP" },
  { val: "24/7", label: "NOC OPERATIONS" }
];

const LowVoltage = () => {
  return (
    <>
      
      <Navbar/>
      <div className="viewport-root">
        <Dash/>
        {/* Flyer Themed Backdrops */}
        <div className="ambient-glow" style={{ top: '-10%', left: '-5%', background: '#003399' }}></div>
        <div className="ambient-glow" style={{ bottom: '15%', right: '-5%', background: '#2563eb' }}></div>

        {/* ── HERO SECTION ── */}
        <section className="hero-wrap">
          <div className="cyber-grid"></div>
          <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: '900px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div className="flyer-badge-pill">
              <span className="pulse-dot"></span> INSTALLATION SERVICES
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.5px' }}>
              Low Voltage Runs & <br/>
              <span className="text-brand-gradient">Structured Infrastructure</span>
            </h1>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', marginBottom: '40px', lineHeight: 1.7, maxWidth: '720px' }}>
              eCROWN Technologies O₂ delivers precision low-voltage pathways and enterprise cabling runs engineered for maximum structural durability. Excellence at its peak.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#low-voltage-specs" className="btn-flyer-primary">Initialize Infrastructure Deployment</a>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Bar */}
        <section style={{ background: '#020617', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: '700', letterSpacing: '4px' }}>
            <span>TECHNOLOGY</span> • <span>INNOVATION</span> • <span>EXCELLENCE</span>
          </div>
        </section>

        {/* Metrics Bar */}
        <section style={{ background: 'rgba(255, 255, 255, 0.01)', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', padding: '50px 0' }}>
          <div className="stats-strip">
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '20px', borderRight: i < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#2563eb' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '2px', fontWeight: '700', marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── LOW VOLTAGE RUNS SHOWCASE SECTION ── */}
        <section id="low-voltage-specs" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <span style={{ color: '#2563eb', fontSize: '11px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>TECHNICAL SHOWCASE</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, marginTop: '8px' }}>Low Voltage Run Engineering</h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '15px' }}>
              How eCROWN Technologies O₂ designs, distributes, and isolates high-performance cabling paths across complex commercial landscapes.
            </p>
          </div>

          {/* Block 1: Pathway & Drop Architecture */}
          <div className="showcase-row">
            <div className="showcase-text-block">
              <span className="showcase-tag">01 / PATHWAY ROUTING</span>
              <h3 className="showcase-title">Precision Backbone Drops & Containment</h3>
              <p className="showcase-desc">
                Every low voltage run follows structured pathways mapped out to minimize interference and structural stress. We deploy heavy-duty J-hook configurations, custom data trays, and secure conduit routing that guarantees clean line segregation away from high-voltage electrical lines.
              </p>
              <ul className="showcase-spec-list">
                <li>Independent ceiling-support grid suspensions</li>
                <li>Strategic bend radius calculation to eliminate data loss</li>
                <li>Fire-stop penetration sealing across all wall drops</li>
              </ul>
            </div>
            <div className="showcase-image-block">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" 
                alt="Structured network data lines neatly bundled on ceiling cable trays" 
                className="showcase-img"
              />
            </div>
          </div>

          {/* Block 2: High-Density Trunk Deployments */}
          <div className="showcase-row reverse" style={{ direction: 'rtl' }}>
            <div className="showcase-text-block" style={{ direction: 'ltr' }}>
              <span className="showcase-tag">02 / CORE MEDIA BRIDGING</span>
              <h3 className="showcase-title">Copper Trunk & Fiber Optic Engineering</h3>
              <p className="showcase-desc">
                We handle the high-throughput links that feed your enterprise hardware. From flawless Category 6 and 6A terminations powering point-of-sale systems and terminal gates, to multi-mode OM3/OM4 fiber optic channels provisioning server storage racks over infinite distances.
              </p>
              <ul className="showcase-spec-list">
                <li>Certified CAT6 & CAT6A high-density performance runs</li>
                <li>Multi-mode and single-mode optical fiber trunk paths</li>
                <li>Zero-sag bundling with specialized hook-and-loop wraps</li>
              </ul>
            </div>
            <div className="showcase-image-block">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                alt="Enterprise patch panel showing clean fiber optical connections with glowing indicator lights" 
                className="showcase-img"
              />
            </div>
          </div>

          {/* Block 3: Verification & Compliance */}
          <div className="showcase-row">
            <div className="showcase-text-block">
              <span className="showcase-tag">03 / PERFORMANCE TESTING</span>
              <h3 className="showcase-title">End-to-End Node Diagnostic Validation</h3>
              <p className="showcase-desc">
                A cable run is only as good as its tested performance. Our certified infrastructure engineers run comprehensive diagnostic validation checks across all terminal paths to guarantee optimal bandwidth delivery and zero signal attenuation before final system handover.
              </p>
              <ul className="showcase-spec-list">
                <li>Fluke DSX-8000 cross-talk and frequency certification</li>
                <li>Clean alphanumeric designation on all faceplates and closets</li>
                <li>As-built topology matrix mapping generated for IT desk teams</li>
              </ul>
            </div>
            <div className="showcase-image-block">
              <img 
                src="https://bestusatools.com/wp-content/uploads/2025/12/Punch-Tool-Uses-in-Structured-Cabling-Installations-Guide.jpg" 
                alt="Close up of technician verifying data patch bay connections using network diagnostic tool hardware" 
                className="showcase-img"
              />
            </div>
          </div>
        </section>

        {/* ── CENTRAL COMMAND NETWORK MATRIX ── */}
        <section id="matrix" style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="sla-matrix-banner">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>
                    Central Command Network Matrix
                  </h3>
                </div>
                <div style={{ fontSize: '11px', color: '#00ff7f', fontWeight: '800', letterSpacing: '1.5px', marginBottom: '20px' }}>
                  CAM_01 to CAM_64 // TERMINATION OK
                </div>
                
                <div style={{ borderLeft: '2px solid #2563eb', paddingLeft: '16px', marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '11px', color: '#2563eb', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 4px 0' }}>
                    CCTV Termination Diagram
                  </h4>
                  <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                    Field Application Example
                  </h5>
                </div>

                <h6 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>
                  Real-world Project Implementation
                </h6>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                  Consider a complete structural deployment across a modern high-rise workspace: our engineers deploy a fully cohesive setup, connecting smart AI-monitored CCTV cameras through concealed low-voltage lines across every section of the building directly into a single centralized operational command console.
                </p>
                
                <div style={{ background: 'rgba(0, 255, 127, 0.03)', border: '1px solid rgba(0, 255, 127, 0.15)', padding: '16px', borderRadius: '8px', color: '#00ff7f', fontSize: '13.5px', lineHeight: 1.5, fontWeight: '500' }}>
                  Guarantees zero exposed cabling, optimal aesthetic integration, and safe hardware execution.
                </div>
              </div>

              <div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern dark operational control room tracking system data metrics" 
                  className="matrix-image-frame"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERT ASSISTANCE SECTION ── */}
        <section style={{ padding: '0 24px 120px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(2, 6, 23, 0.7) 100%)', border: '1px solid rgba(37, 99, 235, 0.25)', borderRadius: '20px', padding: '60px 40px', textAlign: 'center' }}>
            <span style={{ color: '#2563eb', fontSize: '11px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>
              EXPERT INFRASTRUCTURE ASSISTANCE
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '12px', marginBottom: '16px' }}>
              Ready to Engineer Your Structured Pathway Plan?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 36px auto', fontSize: '15px', lineHeight: 1.6 }}>
              Connect directly with our engineering technical desk to receive structural pathway reviews, precise load evaluations, and end-to-end framework calculations.
            </p>
            <a href="mailto:support@ecrown.com" className="btn-flyer-primary" style={{ display: 'inline-block' }}>
              Contact System Architecture Desk
            </a>
          </div>
        </section>

        <style>{`
        .viewport-root {
          background-color: #030712;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #ffffff;
          overflow-x: hidden;
        }

        /* Ambient Flows using Flyer Brand Palette */
        .ambient-glow {
          position: fixed;
          width: 600px; 
          height: 600px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.14;
          pointer-events: none;
          z-index: 0;
        }

        /* Hero Layout - Centered Engineering */
        .hero-wrap {
          position: relative;
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(155deg, rgba(3,7,18,0.96) 0%, rgba(0,51,153,0.15) 50%, rgba(3,7,18,0.98) 100%), 
                      url('https://high-techprojectmanagement.com/wp-content/uploads/2025/04/Blog-Thumbnail-19-1024x669.png') center/cover no-repeat;
        }
        
        .cyber-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(37, 99, 235, 0.04) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(37, 99, 235, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .flyer-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 51, 153, 0.15);
          border: 1.5px solid #2563eb;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 8px 20px;
          border-radius: 50px;
          margin: 0 auto 28px auto;
          text-transform: uppercase;
        }

        .text-brand-gradient {
          background: linear-gradient(135deg, #ffffff 30%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pulse-dot {
          width: 8px; 
          height: 8px;
          background: #00ff7f;
          border-radius: 50%;
          display: inline-block;
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(0,255,127,0.6); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(0,255,127,0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(0,255,127,0); }
        }

        .btn-flyer-primary {
          background: #003399;
          color: #ffffff;
          padding: 16px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.25s ease;
        }
        .btn-flyer-primary:hover {
          background: #2563eb;
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.45);
          transform: translateY(-1px);
        }

        .sla-matrix-banner {
          background: linear-gradient(135deg, rgba(0, 51, 153, 0.12) 0%, rgba(3, 7, 18, 0.6) 100%);
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 20px;
          padding: 50px 45px;
        }

        /* Showcase Layout Classes */
        .showcase-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
        }
        @media (max-width: 768px) {
          .showcase-row {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 60px;
          }
          .showcase-row.reverse {
            direction: ltr;
          }
          .showcase-row.reverse .showcase-text-block {
            order: 2;
          }
          .showcase-row.reverse .showcase-image-block {
            order: 1;
          }
        }

        .showcase-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          transition: border-color 0.3s ease;
        }
        .showcase-img:hover {
          border-color: #2563eb;
        }

        .showcase-tag {
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .showcase-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #ffffff;
        }

        .showcase-desc {
          color: #94a3b8;
          font-size: 14.5px;
          line-height: 1.7;
          margin: 0 0 20px 0;
        }

        .showcase-spec-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .showcase-spec-list li {
          font-size: 13.5px;
          color: #cbd5e1;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .showcase-spec-list li::before {
          content: "—";
          color: #2563eb;
          font-weight: bold;
        }

        .matrix-image-frame {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.25);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.4);
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>

        <Footer />
        <Button />
      </div>


    </>
  );
};

export default LowVoltage;