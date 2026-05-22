import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const SelfCheckout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-vh-100 position-relative pb-5" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#0f172a', overflowX: 'hidden' }}>



        {/* SECTION 2: HERO INTRODUCTION */}
        <section className="position-relative text-white py-5 px-4 overflow-hidden d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #020617 0%, #1e3a8a 50%, #2563eb 100%)', minHeight: '75vh' }}>
          <div className="position-absolute" style={{ right: '-10%', bottom: '-20%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0 text-center text-lg-left">
                <span className="badge badge-pill px-3 py-2 text-uppercase font-weight-bold tracking-wider mb-3 animate-fade-in" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '11px', color: '#38bdf8' }}>
                  ★ Smart Store Automation
                </span>
                <h2 className="display-4 font-weight-bold tracking-tight mt-2 mb-3 animate-slide-in-right" style={{ fontWeight: '800', lineHeight: '1.15' }}>
                  Self-Checkout Solutions
                </h2>
                <p className="lead text-light opacity-90 mb-4 animate-fade-in" style={{ fontSize: '1.2rem', lineHeight: '1.65' }}>
                  This allows customers to pay for items themselves without a cashier. Instead of waiting for an attendant to scan your purchases, you interact directly with an intuitive automated kiosk station to scan, pack, and pay seamlessly. Less waiting, maximum speed.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <a href="#simple-explanation" className="btn btn-light btn-lg px-4 py-3 font-weight-bold text-uppercase mr-3 mb-2 shadow-sm" style={{ color: '#1e3a8a', borderRadius: '8px', fontSize: '13px', letterSpacing: '0.5px' }}>
                    See How It Works 👇
                  </a>
                  <a href="#what-we-do" className="btn btn-outline-light btn-lg px-4 py-3 font-weight-bold text-uppercase mb-2" style={{ borderRadius: '8px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
                    Our Engineering Process
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="position-relative p-2 bg-white rounded-xl shadow-2xl hover-lift animate-slide-in-up" style={{ borderRadius: '20px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80"
                    className="img-fluid w-100"
                    alt="Customer using modern automated self-checkout system"
                    style={{ borderRadius: '14px', objectFit: 'cover', display: 'block', height: '380px', width: '100%' }}
                  />
                  <div className="position-absolute bottom-0 left-0 right-0 p-3 m-3 rounded text-white text-center" style={{ background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(4px)', borderRadius: '10px' }}>
                    <span className="small font-weight-bold text-uppercase tracking-wider text-info">Zero-Queue Independent Billing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DEEP SIMPLE EXPLANATION (Updated Sequential Image Layout) */}
        <section id="simple-explanation" className="container my-5 py-5">
          <div className="text-center mb-5 animate-fade-in">
            <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
              THE SIMPLE BREAKDOWN
            </span>
            <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>Self-Checkout, Explained Simply!</h3>
            <p className="text-muted mx-auto max-w-xl">Imagine going shopping and being your own friendly cashier. It is as easy as 1, 2, 3!</p>
          </div>

          {/* STEP 01: SCANNING */}
          <div className="row align-items-center mb-5 pb-5 border-bottom border-light">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="overflow-hidden rounded-xl shadow-sm border p-2 bg-white custom-hover-glow" style={{ borderRadius: '20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80"
                  className="w-100 img-fluid card-image-fluid"
                  alt="Scanning product barcode close-up under scanner laser light"
                  style={{ objectFit: 'cover', height: '380px', borderRadius: '14px', display: 'block', transition: 'transform 0.5s ease' }}
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="d-flex align-items-center mb-3">
                <span className="d-flex align-items-center justify-content-center text-white font-weight-bold rounded-circle mr-3" style={{ width: '40px', height: '40px', background: '#0f172a', fontSize: '14px' }}>
                  01
                </span>
                <h4 className="font-weight-bold text-dark mb-0" style={{ fontWeight: '800' }}>
                  Scan Your Items <span className="text-muted font-weight-normal h6 d-block d-sm-inline ml-sm-2" style={{ fontSize: '15px' }}>(The Digital Inventory Lookup)</span>
                </h4>
              </div>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                The process begins the moment a customer steps up to the kiosk with their shopping basket. Every product in a modern store features a unique <strong>Universal Product Code (UPC)</strong> or barcode patch printed directly onto its packaging.
              </p>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                When you pass this barcode over the glowing, multi-directional laser window, the glass surface emits an array of intersecting light beams. The moment the laser crosses the dark and light lines of the code, a high-speed optical sensor decodes the sequence, registers a distinct, satisfying <strong>"Beep!"</strong> sound for audio confirmation, and triggers an instantaneous database query. Within milliseconds, the system matches the code to the store’s live inventory, pulling the exact product name, weight parameters, and pricing tier directly onto the customer-facing touchscreen interface.
              </p>
              <div className="p-3 bg-light rounded-lg border-left border-primary mt-3" style={{ borderLeft: '4px solid #2563eb !important', borderRadius: '8px' }}>
                <p className="small mb-0 text-muted leading-relaxed">
                  <strong>Behind the Scenes:</strong> For loose items without barcodes (like fresh produce or bakery goods), the software features a visual lookup menu. Customers simply tap "Produce," select "Bananas," and let the built-in counter scale calculate the price based on exact weight.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 02: TAPPING/PAYMENT */}
          <div className="row align-items-center mb-5 pb-5 border-bottom border-light">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="overflow-hidden rounded-xl shadow-sm border p-2 bg-white custom-hover-glow" style={{ borderRadius: '20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
                  className="w-100 img-fluid card-image-fluid"
                  alt="Tapping credit card on contactless card payment terminal"
                  style={{ objectFit: 'cover', height: '380px', borderRadius: '14px', display: 'block', transition: 'transform 0.5s ease' }}
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 pr-lg-5">
              <div className="d-flex align-items-center mb-3">
                <span className="d-flex align-items-center justify-content-center text-white font-weight-bold rounded-circle mr-3" style={{ width: '40px', height: '40px', background: '#0f172a', fontSize: '14px' }}>
                  02
                </span>
                <h4 className="font-weight-bold text-dark mb-0" style={{ fontWeight: '800' }}>
                  Tap and Pay Securely <span className="text-muted font-weight-normal h6 d-block d-sm-inline ml-sm-2" style={{ fontSize: '15px' }}>(The Encrypted Financial Handshake)</span>
                </h4>
              </div>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                When you are done scanning, you don't need cash envelopes. Once the final item is registered and the virtual shopping cart is complete, the customer transitions to the payment interface by pressing a prominent "Finish & Pay" prompt. The system instantly tallies the subtotal, factors in local tax calculations, and applies any active store loyalty discounts.
              </p>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                Instead of dealing with loose paper currency, counting coins, or passing money back and forth with an attendant, the user interacts with a secure, integrated <strong>Point of Sale (POS) terminal</strong>. Whether utilizing a traditional EMV chip card, a contactless debit card, or a mobile wallet (like Apple Pay or Google Wallet), the terminal handles the rest via <strong>Near Field Communication (NFC)</strong> technology. The customer simply taps their phone or card against the illuminated payment node. A secure, heavily encrypted tokenized handshake travels to the payment gateway, authorization clears in under two seconds, and the transaction secures itself without ever exposing sensitive banking details.
              </p>
            </div>
          </div>

          {/* STEP 03: BAGGING & DEPARTURE */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="overflow-hidden rounded-xl shadow-sm border p-2 bg-white custom-hover-glow" style={{ borderRadius: '20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1601599561264-5a7c393cb33a?auto=format&fit=crop&w=800&q=80"
                  className="w-100 img-fluid card-image-fluid"
                  alt="Customer leaving retail storefront happily holding fresh grocery bags"
                  style={{ objectFit: 'cover', height: '380px', borderRadius: '14px', display: 'block', transition: 'transform 0.5s ease' }}
                />
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="d-flex align-items-center mb-3">
                <span className="d-flex align-items-center justify-content-center text-white font-weight-bold rounded-circle mr-3" style={{ width: '40px', height: '40px', background: '#0f172a', fontSize: '14px' }}>
                  03
                </span>
                <h4 className="font-weight-bold text-dark mb-0" style={{ fontWeight: '800' }}>
                  Bag Items and Walk Out <span className="text-muted font-weight-normal h6 d-block d-sm-inline ml-sm-2" style={{ fontSize: '15px' }}>(The Frictionless Departure)</span>
                </h4>
              </div>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                The machine neatly prints your physical receipt paper list, clears the validation security gate, and you place your items into your tote bag. With the financial transaction authorized, the kiosk shifts into its final delivery phase. The integrated high-speed thermal printer activates, neatly feeding out a physical, high-contrast receipt that lists the entire itemized archive, taxes paid, payment method, and unique checkout timestamp.
              </p>
              <p className="text-secondary leading-relaxed" style={{ fontSize: '15px', opacity: 0.9 }}>
                Simultaneously, the kiosk's security scale matrix verifies that the total weight placed in the bagging area perfectly matches the cumulative weight profile of the scanned items. This automated cross-reference ensures inventory accuracy and deters loss prevention issues without slowing down the customer. The validation loop clears, the exit gate indicators turn green, and the customer packs their items into their tote bags. You walk right out without ever standing in an endless checkout gridlock lane!
              </p>
            </div>
          </div>

          {/* RETAIL STRATEGY REINFORCEMENT BANNER */}
          <div className="mt-5 p-4 p-md-5 rounded-xl border bg-light shadow-xs" style={{ borderRadius: '20px' }}>
            <h5 className="font-weight-bold text-dark mb-4 text-center" style={{ fontWeight: '800' }}>Why Modern Retailers Are Upgrading</h5>
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <h6 className="font-weight-bold text-primary mb-2">⚡ Zero Queue Footprints</h6>
                <p className="small text-muted mb-0 leading-relaxed">Processes short-run shopping trips (1–10 items) up to <strong>40% faster</strong> than standard counter checkout lines.</p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h6 className="font-weight-bold text-primary mb-2">🤝 Empowered Consumers</h6>
                <p className="small text-muted mb-0 leading-relaxed">Gives shoppers total operational autonomy over their preferred pace, custom packing options, and payment styles.</p>
              </div>
              <div className="col-md-4">
                <h6 className="font-weight-bold text-primary mb-2">🏬 Optimized Floor Space</h6>
                <p className="small text-muted mb-0 leading-relaxed">Replaces a single massive, traditional cashier counter unit with up to <strong>four independent automation pods</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE ENGINEERING MATRIX ("What They Do") */}
        <section id="what-we-do" className="bg-light py-5 border-top border-bottom my-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
                INFRASTRUCTURE DELIVERY
              </span>
              <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>What We Do</h3>
              <p className="text-muted mx-auto max-w-xl">Our specialized team executes the entire physical deployment framework flawlessly:</p>
            </div>

            <div className="row g-4 match-height">
              {[
                {
                  title: "Install Automated Checkout Systems",
                  desc: "We construct and firmly mount the entire structural self-checkout station framework at storefront exit pathways. This includes custom counter cabinets, security scale beds, internal computer modules, and user display screens.",
                  icon: "🤖",
                  img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Configure Scanners & Payment Terminals",
                  desc: "Our engineers systematically calibrate high-precision multidirectional barcode laser optics and secure payment terminal networks. We test chip inserts, pinpad entries, and card taps to ensure zero dropped connections.",
                  icon: "🔍",
                  img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Setup Customer Self-Service Stations",
                  desc: "We program the intuitive, user-friendly customer software interface panels, loading custom step-by-step audio voice alerts, weight-checking anti-theft loops, and instant receipt tracking printers.",
                  icon: "🖥️",
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
                }
              ].map((service, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 p-4 rounded-xl bg-white shadow-sm custom-hover-card" style={{ borderRadius: '18px', border: '1px solid #f1f5f9', transition: 'all 0.3s ease' }}>
                    <div className="d-flex align-items-center justify-content-center bg-light border rounded-lg mb-3" style={{ width: '48px', height: '48px', borderRadius: '12px', fontSize: '22px' }}>
                      {service.icon}
                    </div>
                    <h5 className="font-weight-bold text-dark mb-2" style={{ letterSpacing: '-0.01em', fontSize: '1.15rem' }}>{service.title}</h5>
                    <p className="text-secondary small mb-4 leading-relaxed" style={{ opacity: 0.85, fontSize: '13px', minHeight: '90px' }}>{service.desc}</p>
                    <div className="mt-auto overflow-hidden rounded-lg border shadow-xs" style={{ height: '160px', borderRadius: '12px', width: '100%', backgroundColor: '#f8fafc' }}>
                      <img
                        src={service.img}
                        className="w-100 h-100 card-image-fluid"
                        alt={service.title}
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease', width: '100%', height: '100%', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: EXAMPLE CASE REAL-WORLD SHOWCASE */}
        <section className="container my-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-left">
              <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
                REAL-WORLD APPLICATION
              </span>
              <h3 className="font-weight-bold text-dark display-5 mb-3" style={{ fontWeight: '800' }}>Example Deployments</h3>
              <p className="text-muted opacity-90 leading-relaxed max-w-xl mx-auto mx-lg-0">
                You will find our self-service payment machines prominently deployed inside sprawling mega malls, metropolitan grocery stores, and high-volume commercial supermarkets.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="p-3 bg-light rounded-xl shadow-sm border custom-hover-glow" style={{ borderRadius: '24px' }}>
                <img
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80"
                  className="img-fluid shadow w-100"
                  alt="Modern commercial supermarket self-checkout lanes row layout"
                  style={{ borderRadius: '16px', objectFit: 'cover', height: '360px', width: '100%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONSULTATION CAPTURE FORM CONTAINER */}
        <section id="consultation-hub" className="container my-5 py-4">
          <div className="bg-dark text-white py-5 p-md-5 rounded border shadow-lg position-relative overflow-hidden" style={{ borderRadius: '16px', background: '#0f172a !important' }}>
            <div className="position-absolute" style={{ top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            <div className="row align-items-center position-relative justify-content-center" style={{ zIndex: 2 }}>
              <div className="col-lg-7 mb-4 mb-lg-0 text-center">
                <span className="text-primary text-uppercase font-weight-bold tracking-wider small d-block mb-2" style={{ color: '#38bdf8' }}> INFRASTRUCTURE HUB</span>
                <h3 className="font-weight-bold text-warning mb-3" style={{ color: '#fbbf24' }}>Deploy Self-Service Checkout Pods</h3>
                <p className="text-light opacity-75 small mb-0 leading-relaxed mx-auto" style={{ maxWidth: '720px' }}>
                  Connect with our systems integration division. We engineer complete layout floor-plans, provide modern touchscreen kiosk hardwares, calibrate terminal scanners, and secure backend payment connections.
                </p>
              </div>

              {/* <div className="col-lg-5">
                <div className="bg-white p-4 rounded text-dark shadow" style={{ borderRadius: '12px' }}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Company / Store Name</label>
                      <input type="text" className="form-control form-control-sm" placeholder="e.g. eCrown Outlets" required style={{ borderRadius: '6px' }} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Business Email Address</label>
                      <input type="email" className="form-control form-control-sm" placeholder="contact@store.com" required style={{ borderRadius: '6px' }} />
                    </div>
                    <div className="form-group mb-3">
                      <label className="small font-weight-bold text-muted mb-1">Planned Station Units</label>
                      <select className="form-control form-control-sm text-muted" style={{ borderRadius: '6px' }}>
                        <option>2 - 4 Automated Express Pods</option>
                        <option>5 - 8 Multi-Lane Kiosk System</option>
                        <option>10+ Enterprise Store Grid Layout</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase font-weight-bold btn-sm py-2 w-100 shadow-sm" style={{ background: '#2563eb', border: 'none', borderRadius: '6px' }}>
                      Request Structural Architecture Proposal
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

          .custom-hover-glow:hover {
            box-shadow: 0 20px 35px rgba(37, 99, 235, 0.08) !important;
          }

          .custom-hover-glow:hover .card-image-fluid {
            transform: scale(1.02);
          }

          .btn:hover {
            transform: translateY(-1px);
            transition: all 0.2s ease;
          }

          .leading-relaxed { line-height: 1.6; }
          .match-height { display: flex; flex-wrap: wrap; }
          .match-height > [class*="col-"] > .card { height: 100%; }

          .animate-fade-in { animation: fadeIn 0.6s ease both; }
          .animate-slide-in-right { animation: slideInRight 0.6s ease both; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(15px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          
          @media (max-width: 991.98px) {
            .pl-lg-5 { padding-left: 15px !important; }
            .pr-lg-5 { padding-right: 15px !important; }
            .border-bottom.pb-5 { padding-bottom: 2rem !important; margin-bottom: 2rem !important; }
          }
        `}</style>

      </div>
      <Footer />
      <Button />
    </>
  );
}

export default SelfCheckout;