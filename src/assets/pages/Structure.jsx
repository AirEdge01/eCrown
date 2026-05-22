import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';



const StructuredCabling = () => {
  

  return (
    <>
      <Navbar />
    
    <div className="container-fluid p-0">
      
      {/* 1. HERO SECTION */}
      <section style={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9" style={styles.glassCard}>
              <h1 className="display-2 fw-bold mb-3">Low Voltage Structured Cabling</h1>
              <p className="lead fs-3">...excellence at its peak</p>
              <hr className="bg-white my-4 w-50 mx-auto" />
              <p className="fs-4">Organized, fast, and reliable network infrastructure for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={styles.sectionTitle}>What is Structured Cabling?</h2>
            <p className="fs-5 text-secondary">
              Structured cabling is the backbone of your building's communication system. It is the 
              organized infrastructure of cables (data, voice, video) that connects your entire 
              workspace into a singular, efficient network. 
            </p>
            <p className="fs-5 text-secondary">
              At <strong>eCROWN Technologies O₂</strong>, we transform chaotic wiring into neat, 
              labeled, and high-performance networks, ensuring your systems are fast and reliable.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee2256127d14?auto=format&fit=crop&w=800&q=80" 
              alt="Technician managing structured cabling" 
              className="img-fluid rounded shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* 3. EXPERT INSTALLATION SERVICES */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center" style={styles.sectionTitle}>Expert Installation Services</h2>
          <div className="row g-4 mt-3">
            {[
              { title: "Professional Wiring", desc: "Expert routing and management of all network cables.", img: "https://images.unsplash.com/photo-1558494949-ef010bbbb317?auto=format&fit=crop&w=600&q=80" },
              { title: "Unified Connectivity", desc: "Connecting servers, internet, phones, and devices seamlessly.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
              { title: "Network Optimization", desc: "Building networks that are neat, fast, and highly reliable.", img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=600&q=80" }
            ].map((service, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm" style={styles.cardHover}>
                  <img src={service.img} className="card-img-top" alt={service.title} style={{height: '200px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h5>{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED (BIG IMAGES) */}
      <section className="container my-5">
        <h2 className="text-center mb-5" style={styles.sectionTitle}>Serving Critical Environments</h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" className="card-img-top" alt="Corporate" style={styles.bigImage} />
              <div className="card-body p-4 text-center">
                <h3 className="fw-bold">Corporate Companies</h3>
                <p className="text-muted">High-density data solutions for modern business operations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80" className="card-img-top" alt="Education" style={styles.bigImage} />
              <div className="card-body p-4 text-center">
                <h3 className="fw-bold">Educational Schools</h3>
                <p className="text-muted">Safe, reliable campus-wide connectivity for students and faculty.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80" className="card-img-top" alt="Banking" style={styles.bigImage} />
              <div className="card-body p-4 text-center">
                <h3 className="fw-bold">Banking Institutions</h3>
                <p className="text-muted">Secure, fast, and protected networks for financial transactions.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" className="card-img-top" alt="Hospitality" style={styles.bigImage} />
              <div className="card-body p-4 text-center">
                <h3 className="fw-bold">Hospitality Hotels</h3>
                <p className="text-muted">Seamless Wi-Fi and communication systems for guest satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY ORGANIZED CABLING MATTERS */}
      <section className="py-5 text-white" style={{ backgroundColor: '#002d5e' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Why Organized Cabling Matters</h2>
              <ul className="list-unstyled lead">
                <li className="mb-3">✓ <strong>Reduced Downtime:</strong> Easier to troubleshoot and repair.</li>
                <li className="mb-3">✓ <strong>Scalability:</strong> Easily add more devices as you grow.</li>
                <li className="mb-3">✓ <strong>Aesthetic Appeal:</strong> No more "spaghetti" cable messes.</li>
                <li className="mb-3">✓ <strong>Performance:</strong> Faster data transfer with reduced interference.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Network Rack" 
                className="img-fluid rounded shadow" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE EXPERTISE (WITH PICTURES) */}
      <section className="container my-5">
        <h2 className="text-center mb-5" style={styles.sectionTitle}>Our Core Expertise</h2>
        <div className="row g-4">
          {[
            { title: "Professional Wiring", desc: "Expert network wiring and cable routing.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
            { title: "Unified Systems", desc: "Connecting servers, internet, and phones.", img: "https://images.unsplash.com/photo-1520869562383-e7baa593845f?auto=format&fit=crop&w=600&q=80" },
            { title: "Rack Management", desc: "High-density rack and patch management.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
            { title: "Scalable Infrastructure", desc: "Future-proof design for business growth.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" }
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <img src={item.img} className="card-img-top" alt={item.title} style={styles.expertiseImage} />
                <div className="card-body text-center">
                  <h5>{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      
    </div>
    <Footer />
    <Button />
    </>
  );
}

// --- Styling Objects ---
  const styles = {
    hero: {
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(0, 45, 94, 0.8), rgba(0, 45, 94, 0.8)), url("https://images.unsplash.com/photo-1558494949-ef010bbbb317?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '80px 20px',
    },
    glassCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '50px',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.2)',
      textAlign: 'center',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
    },
    sectionTitle: { color: '#0056b3', fontWeight: '800', marginBottom: '2rem' },
    bigImage: { height: '350px', objectFit: 'cover', width: '100%', borderRadius: '15px' },
    expertiseImage: { height: '200px', objectFit: 'cover', width: '100%', borderRadius: '10px 10px 0 0' },
    cardHover: { transition: 'transform 0.3s ease' }
  };

export default StructuredCabling;