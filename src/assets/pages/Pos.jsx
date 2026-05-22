import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Pos = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-vh-100 position-relative pb-5" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#0f172a', overflowX: 'hidden' }}>




        {/* SECTION 2: HERO SOLUTION INTRODUCTION */}
        <section className="position-relative text-white py-5 px-4 overflow-hidden d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #020617 0%, #1e3a8a 50%, #2563eb 100%)', minHeight: '75vh' }}>
          <div className="position-absolute" style={{ right: '-10%', bottom: '-20%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0 text-center text-lg-left">

                <h2 className="display-4 font-weight-bold tracking-tight mt-2 mb-3 animate-slide-in-right" style={{ fontWeight: '800', lineHeight: '1.15' }}>
                  Enterprise Point of Sale (POS) Systems
                </h2>
                <p className="lead text-light opacity-90 mb-4 animate-fade-in" style={{ fontSize: '1.2rem', lineHeight: '1.65' }}>
                  These are payment and sales systems used in businesses. We engineer modern, secure transaction architectures optimized for fast-paced commercial spaces, ensuring efficiency direct to your checkout lanes. We deploy the critical hardware and sync the software that drives your revenue generation. Excellence at its peak.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <a href="#consultation-hub" className="btn btn-light btn-lg px-4 py-3 font-weight-bold text-uppercase mr-3 mb-2 shadow-sm" style={{ color: '#1e3a8a', borderRadius: '8px', fontSize: '13px', letterSpacing: '0.5px' }}>
                    Deploy My POS System
                  </a>
                  <a href="#capabilities" className="btn btn-outline-light btn-lg px-4 py-3 font-weight-bold text-uppercase mb-2" style={{ borderRadius: '8px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
                    Explore Capabilities ↓
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="position-relative p-2 bg-white rounded-xl shadow-2xl hover-lift animate-slide-in-up" style={{ borderRadius: '20px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
                    className="img-fluid rounded-lg shadow-sm w-100"
                    alt="Active Commercial Retail Point of Sale Terminal"
                    style={{ borderRadius: '14px', objectFit: 'cover', minHeight: '350px' }}
                  />
                  <div className="position-absolute bottom-0 left-0 right-0 p-3 m-3 rounded text-white text-center" style={{ background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(4px)', borderRadius: '10px' }}>
                    <span className="small font-weight-bold text-uppercase tracking-wider text-info">Unified Sales Point Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE CAPABILITIES MATRIX ("What They Do") */}
        <section id="capabilities" className="container my-5 py-5">
          <div className="text-center mb-5 animate-fade-in">
            <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
              OPERATIONAL VALUE
            </span>
            <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>What They Do</h3>
            <p className="text-muted mx-auto max-w-xl" style={{ opacity: 0.85 }}>Our engineering team manages the deployment loop end-to-end, taking care of essential system components:</p>
          </div>

          <div className="row g-4 match-height">
            {[
              {
                title: 'Install POS Machines',
                desc: 'We mount and secure state-of-the-art POS machines at your cashier counters, arranging physical hardware, wiring loops, and terminal placement for quick customer checkout pipelines.',
                icon: '💳',
                img: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Setup Billing Systems',
                desc: 'We install corporate billing software modules that map inventory prices, apply automated discount logics, calculate tax requirements, and ensure clean record-keeping.',
                icon: '📈',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Connect Sales Software & Printers',
                desc: 'Our engineers securely link your sales database with high-speed thermal receipt printers and peripheral barcode guns to give customers immediate physical payment statements.',
                icon: '🖨️',
                img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Help Businesses Manage Transactions',
                desc: 'We map highly encrypted transaction gateway pipelines that help store management analyze daily sales graphs, track profits, and securely log electronic funds transfers.',
                icon: '🛡️',
                img: 'https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=400&q=80'
              }
            ].map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4 animate-fade-in" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="card h-100 border-0 shadow-sm p-4 rounded-xl bg-white custom-hover-card" style={{ borderRadius: '18px', border: '1px solid #f1f5f9', transition: 'all 0.3s ease' }}>
                  <div className="d-flex align-items-center justify-content-center bg-light border rounded-lg mb-3 shadow-xs" style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '22px' }}>
                    {feature.icon}
                  </div>
                  <h5 className="font-weight-bold text-dark mb-2" style={{ letterSpacing: '-0.01em', fontSize: '1.15rem' }}>{feature.title}</h5>
                  <p className="text-secondary small mb-4 leading-relaxed" style={{ opacity: 0.85, fontSize: '13px', minHeight: '75px' }}>{feature.desc}</p>
                  <div className="mt-auto overflow-hidden rounded-lg border shadow-xs" style={{ height: '140px', borderRadius: '12px' }}>
                    <img
                      src={feature.img}
                      className="w-100 h-100 card-image-fluid"
                      alt={feature.title}
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: ADVANCED POS SOFTWARE MODULES */}
        <section className="bg-light py-5 border-top border-bottom my-5">
          <div className="container py-4">
            <div className="row mb-5 align-items-center text-center text-lg-left">
              <div className="col-lg-7 mb-3 mb-lg-0">
                <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
                  MODULE EXTENSIONS
                </span>
                <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>Extended Software Ecosystem</h3>
                <p className="text-muted mx-auto mx-lg-0 max-w-xl">We sync terminal hardware with advanced management systems to maximize storefront control loops.</p>
              </div>
            </div>

            <div className="row g-4 match-height">
              {[
                { title: 'Smart Inventory Loops', desc: 'Real-time asset tracking with automated stock level alerts and visual product shelf catalog configurations.', icon: '📦', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' },
                { title: 'CRM & Customer Loyalty', desc: 'Maintain client database registries on checkout systems to deploy personalized discount points and reward mechanisms.', icon: '👥', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80' },
                { title: 'Workforce Performance Logs', desc: 'Track cashier shifts, balance logbooks per attendant, and optimize operator productivity straight through the terminal.', icon: '⏰', img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=400&q=80' }
              ].map((module, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 p-0 shadow-sm rounded-xl overflow-hidden bg-white custom-card-hover" style={{ borderRadius: '20px' }}>
                    <div style={{ height: '160px', overflow: 'hidden' }}>
                      <img src={module.img} className="w-100 h-100 object-fit-cover card-image-fluid" style={{ transition: 'transform 0.5s ease' }} alt={module.title} />
                    </div>
                    <div className="p-4">
                      <div className="d-flex align-items-center mb-2">
                        <div className="d-flex align-items-center justify-content-center text-primary rounded-lg mr-2" style={{ background: '#eaf1f7', width: '32px', height: '32px', borderRadius: '8px' }}>
                          {module.icon}
                        </div>
                        <h6 className="font-weight-bold m-0 text-dark" style={{ letterSpacing: '-0.01em', fontSize: '1.05rem' }}>{module.title}</h6>
                      </div>
                      <p className="text-secondary small mb-0 leading-relaxed" style={{ opacity: 0.85 }}>{module.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: REAL-TIME ANALYTICS DASHBOARD SHOWCASE */}
        <section className="container my-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 text-center text-lg-left">
              <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
                OPERATIONAL INSIGHTS
              </span>
              <h3 className="font-weight-bold text-dark display-5 mb-3" style={{ fontWeight: '800' }}>Insightful Operations</h3>
              <p className="text-muted opacity-90 leading-relaxed max-w-xl mx-auto mx-lg-0">
                A modern POS terminal functions as an analytics dashboard. We map background databases to compile intuitive visual revenue performance metrics, product sales distributions, and ledger analysis panels straight to business managers.
              </p>
              <div className="text-left max-w-md mx-auto mx-lg-0 mt-4">
                <div className="d-flex align-items-start mb-2">
                  <span className="text-primary font-weight-bold mr-2" style={{ color: '#2563eb' }}>✓</span>
                  <p className="small text-secondary mb-0">Visualize transaction velocities and volume fluctuations live.</p>
                </div>
                <div className="d-flex align-items-start mb-2">
                  <span className="text-primary font-weight-bold mr-2" style={{ color: '#2563eb' }}>✓</span>
                  <p className="small text-secondary mb-0">Secure cloud syncing routines for remote management views.</p>
                </div>
                <div className="d-flex align-items-start">
                  <span className="text-primary font-weight-bold mr-2" style={{ color: '#2563eb' }}>✓</span>
                  <p className="small text-secondary mb-0">Comprehensive, auditable payment data histories built into the system.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-3 bg-light rounded-xl shadow-sm border custom-hover-glow" style={{ borderRadius: '24px' }}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  className="img-fluid rounded-lg shadow w-100"
                  alt="Modern Tablet Dashboard displaying Sales Analytics graphs"
                  style={{ borderRadius: '16px', objectFit: 'cover', height: '340px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: INTEGRATION CAPABILITIES */}
        <section className="bg-dark text-white py-5 my-5 border-top border-bottom position-relative overflow-hidden" style={{ background: '#0f172a !important' }}>
          <div className="position-absolute" style={{ top: '-30%', left: '-20%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
          <div className="container position-relative py-4" style={{ zIndex: 2 }}>
            <div className="text-center mb-5">
              <span className="text-info text-uppercase font-weight-bold tracking-widest small d-block mb-2" style={{ color: '#38bdf8', letterSpacing: '2px' }}>
                NETWORK INTEGRATIONS
              </span>
              <h3 className="font-weight-bold text-white display-5" style={{ fontWeight: '800' }}>Unified System Architecture</h3>
              <p className="text-light opacity-80 mx-auto max-w-xl">We sync checkout hardware lines with security endpoints and external business payment channels.</p>
            </div>

            <div className="row g-4">
              {[
                { title: 'Payments & EMV Card Gateways', desc: 'Securely connect contact chips, contactless tap arrays, and card hardware loops to eliminate dropped network requests during checkouts.', icon: '💳', img: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=600&q=80' },
                { title: 'Corporate ERP & Accounting Sync', desc: 'Sync checkout transactions to external bookkeeping accounts automatically, minimizing human calculations and balancing errors.', icon: '📈', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' }
              ].map((integration, idx) => (
                <div key={idx} className="col-md-6 mb-4">
                  <div className="card h-100 border-0 p-4 p-md-5 rounded-xl position-relative overflow-hidden custom-dark-hover" style={{ background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', border: '1px solid' }}>
                    <div className="d-flex align-items-center mb-4">
                      <div className="position-relative overflow-hidden mr-3" style={{ width: '60px', height: '60px', borderRadius: '14px' }}>
                        <img
                          src={integration.img}
                          className="w-100 h-100 object-fit-cover card-image-fluid"
                          alt={integration.title}
                          style={{ transition: 'transform 0.5s ease' }}
                        />
                      </div>
                      <h5 className="font-weight-bold text-white mb-0">{integration.title}</h5>
                    </div>
                    <p className="text-light opacity-85 leading-relaxed mb-0" style={{ fontSize: '14px' }}>{integration.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: VERTICAL INDUSTRY FOCUS */}
        <section className="container py-5">
          <div className="text-center mb-5 animate-fade-in">
            <span className="text-primary font-weight-bold text-uppercase tracking-wider small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '1.5px' }}>
              TARGET SEGMENTS
            </span>
            <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>This is important for:</h3>
            <p className="text-muted mx-auto max-w-2xl opacity-90 leading-relaxed">
              Every client touchpoint requires sturdy architecture layouts. We plan checkout station setups to prevent counter bottleneck gridlocks during peak consumer operation hours across core business verticals.
            </p>
          </div>

          <div className="row g-4 justify-content-center match-height">
            {[
              {
                title: 'Companies',
                desc: 'Corporate networks require swift employee cafeteria balances, customized identity card payment interfaces, and distributed multi-floor supply store logging systems.',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Schools',
                desc: 'Educational frameworks leverage terminal networks to execute swift book registry logging, automated fee collection kiosks, and integrated meal counter point distributions.',
                img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Banks',
                desc: 'Financial houses necessitate highly secure processing pipelines to execute fast local money verification runs, client tracking logs, and physical document processing.',
                img: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Hotels',
                desc: 'Hospitality reception counters sync front-desk check-ins seamlessly with bar billing nodes, unified ledger databases, and card payment gateways.',
                img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Supermarkets',
                desc: 'High-volume commercial environments call for continuous conveyor terminal arrays, rapid hardware barcode runs, and localized transaction tracking systems.',
                img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80'
              }
            ].map((segment, idx) => (
              <div key={idx} className="col-xl-4 col-md-6 mb-4 animate-fade-in">
                <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-xl bg-white custom-hover-card" style={{ border: '1px solid #f1f5f9', borderRadius: '16px' }}>
                  <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={segment.img}
                      className="w-100 h-100 object-fit-cover card-image-fluid"
                      alt={`${segment.title} Operations Environment`}
                      style={{ transition: 'transform 0.5s ease' }}
                    />
                    <div className="position-absolute bg-primary text-white font-weight-bold px-3 py-1 small rounded-right shadow-sm" style={{ top: '15px', left: '0', background: '#2563eb', fontSize: '12px' }}>
                      ✓ {segment.title}
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="font-weight-bold text-dark mb-2" style={{ fontSize: '1.1rem' }}>{segment.title} Environments</h5>
                    <p className="text-secondary small mb-0 leading-relaxed" style={{ opacity: 0.85 }}>{segment.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: OPERATIONAL EXAMPLE SHOWCASE */}
        <section className="container my-5 py-3">
          <div className="border border-secondary rounded-xl p-4 p-md-5 text-white position-relative overflow-hidden shadow-lg animate-fade-in" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', borderRadius: '20px' }}>
            <div className="position-absolute" style={{ top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
              <div className="col-lg-8 mb-3 mb-lg-0 text-center text-lg-left">
                <span className="text-info text-uppercase font-weight-bold tracking-widest small d-block mb-1" style={{ color: '#38bdf8' }}>
                  LIVE INDUSTRIAL CASE
                </span>
                <h4 className="font-weight-bold mb-2">Example Topology Blueprint</h4>
                <p className="text-light opacity-75 small mb-0 max-w-xl leading-relaxed mx-auto mx-lg-0" style={{ fontSize: '15px' }}>
                  <strong>Deployment Case:</strong> Active cashier systems in supermarkets and restaurants featuring multi-terminal transactional point distribution, receipt printer relays, and cloud ledger processing backbones.
                </p>
              </div>
              <div className="col-lg-4 text-lg-right text-center mt-3 mt-lg-0">
                <a href="#consultation-hub" className="btn btn-info px-4 py-3 text-uppercase font-weight-bold text-white shadow-sm" style={{ background: '#2563eb', border: 'none', borderRadius: '8px', fontSize: '12px', letterSpacing: '0.5px' }}>
                  Review Deployment Topology
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: CONSULTATION CAPTURE FORM CONTAINER */}
        <section id="consultation-hub" className="container my-1">
          <div className="bg-dark text-white p-4 p-md-5 rounded border shadow-lg position-relative overflow-hidden" style={{ borderRadius: '16px', background: '#0f172a !important' }}>
            <div className="row justify-content-center position-relative" style={{ zIndex: 2 }}>
              <div className="col-lg-8 mb-4 mb-lg-0 text-center">
                <span className="text-primary text-uppercase font-weight-bold tracking-wider small d-block mb-2" style={{ color: '#38bdf8' }}> INFRASTRUCTURE HUB</span>
                <h3 className="font-weight-bold text-warning mb-3" style={{ color: '#fbbf24' }}>Request On-Site POS Layout Audit</h3>
                <p className="text-light opacity-75 small mb-0 leading-relaxed mx-auto" style={{ maxWidth: '720px' }}>
                  Connect with our systems field technicians directly. We supply custom architecture layouts, complete device sync plans, hardware mounting specifications, and financial data auditing calculations for your business space.
                </p>
              </div>

              {/* <div className="col-lg-5">
                <div className="bg-white p-4 rounded text-dark shadow" style={{ borderRadius: '12px' }}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Contact Name</label>
                      <input type="text" className="form-control form-control-sm" placeholder="e.g. Oluwatunmise" required style={{ borderRadius: '6px' }} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Email Address</label>
                      <input type="email" className="form-control form-control-sm" placeholder="name@domain.com" required style={{ borderRadius: '6px' }} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Primary System Scope</label>
                      <select className="form-control form-control-sm text-muted" style={{ borderRadius: '6px' }}>
                        <option>Supermarket Cashier Terminal Grid</option>
                        <option>Restaurant Multi-Station Ticket Relay</option>
                        <option>Commercial Multi-Floor Checkout Setup</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase font-weight-bold btn-sm py-2 w-100 shadow-sm" style={{ background: '#2563eb', border: 'none', borderRadius: '6px' }}>
                      Submit Request
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </section>


        {/* Custom Global Layout CSS Interactions */}
        <style>{`
          .rounded-xl { border-radius: 16px !important; }
          .shadow-xs { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
          
          .custom-hover-card:hover {
            transform: translateY(-5px);
            background-color: #ffffff !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.03) !important;
            border: 1px solid #e2e8f0 !important;
          }
          
          .custom-hover-card:hover .card-image-fluid {
            transform: scale(1.05);
          }

          .custom-card-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 20px -5px rgba(0,0,0,0.05) !important;
          }
          
          .custom-card-hover:hover .card-image-fluid {
            transform: scale(1.04);
          }

          .custom-hover-glow:hover {
            box-shadow: 0 20px 35px rgba(37, 99, 235, 0.08) !important;
          }

          .custom-dark-hover:hover {
            background-color: rgba(255,255,255, 0.06) !important;
            border-color: rgba(255, 255, 255, 0.12) !important;
          }

          .custom-dark-hover:hover .card-image-fluid {
            transform: scale(1.04);
          }

          .btn:hover {
            transform: translateY(-1px);
            transition: all 0.2s ease;
          }

          /* Basic Responsive and Animation Utility Classes */
          .leading-relaxed { line-height: 1.6; }
          .match-height { display: flex; flex-wrap: wrap; }
          .match-height > [class*="col-"] > .card { height: 100%; }

          .animate-fade-in { animation: fadeIn 0.6s ease both; }
          .animate-slide-in-up { animation: slideInUp 0.6s ease both; }
          .animate-slide-in-right { animation: slideInRight 0.6s ease both; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideInUp { from { transform: translateY(15px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(15px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          
          @media (max-width: 991.98px) {
            .col-lg-5.text-center { margin-top: 2rem; }
          }
        `}</style>

      </div>
      <Footer />
      <Button />
    </>
  );
}

export default Pos;