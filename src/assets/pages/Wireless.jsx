import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Wireless = () => {
  // Styles for the modern look
  const styles = {
    hero: {
      position: 'relative',
      background: 'linear-gradient(135deg, #0056b3 0%, #002d5e 100%)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      overflow: 'hidden',
      padding: '50px 0'
    },
    glassCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.2)',
      textAlign: 'center'
    },
    ctaButton: {
      backgroundColor: '#fff',
      color: '#0056b3',
      padding: '12px 30px',
      borderRadius: '50px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    sectionTitle: { color: '#0056b3', marginBottom: '2rem' }
  };

  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0">
      
      {/* 1. CHARMING HERO SECTION */}
      <section style={styles.hero}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" style={styles.glassCard}>
              <h1 className="display-2 fw-bold mb-3">Wireless Networking</h1>
              <p className="lead mb-4">...excellence at its peak</p>
              <p className="mb-4 fs-5">
                We transform your connectivity with high-speed, secure, and seamless 
                wireless infrastructure tailored for modern enterprise.
              </p>
              <a href="#services" style={styles.ctaButton} className="d-inline-block">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="container my-5" id="services">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">What is Wireless Networking?</h2>
            <p className="fs-5">
              Wireless networking refers to technologies that allow devices to communicate without physical cables. 
              At <strong>eCROWN Technologies O₂</strong>, we design, install, and optimize robust wireless communication systems 
              tailored to your environment, utilizing latest-gen Wi-Fi encryption and high-performance hardware.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8" alt="Wireless Networking" className="img-fluid rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* 3. EXPERT INSTALLATION SERVICES */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center" style={styles.sectionTitle}>Expert Installation Services</h2>
          <div className="row g-4">
            {[
              { title: "Wired/Wireless AP Setup", img: "https://images.unsplash.com/photo-1558494949-ef010bbbb317" },
              { title: "Router Configuration", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
              { title: "Network Security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b" },
              { title: "Site Surveys", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" }
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="card h-100 shadow-sm border-0">
                  <img src={item.img} className="card-img-top" alt={item.title} style={{height: '150px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL-WORLD IMPACT */}
      <section className="py-5 text-white" style={{ backgroundColor: '#002d5e' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Real-World Impact</h2>
              <p className="lead">From bustling corporate offices to high-end hospitality suites, our infrastructure ensures that your users experience lag-free, secure internet. Whether it's a multi-story hotel or a warehouse, we guarantee reliable coverage.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Office space" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE FOCUS AREAS */}
      <section className="container my-5 text-center">
        <h2 className="mb-5" style={styles.sectionTitle}>Core Focus Areas</h2>
        <div className="row g-4">
          {["Technology Infrastructure", "Security Systems", "Business Automation", "Digital Communication"].map((area, i) => (
            <div key={i} className="col-md-3">
              <div className="p-4 border rounded shadow-sm h-100 d-flex align-items-center justify-content-center">
                <h5>{area}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADVANCED SERVICES */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={styles.sectionTitle}>Advanced Services</h2>
          <div className="row g-4">
            {[
              { title: "Point-to-Point (P2P)", img: "https://images.unsplash.com/photo-1520869562383-e7baa593845f" },
              { title: "Satellite Networking", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
              { title: "IoT Connectivity", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" }
            ].map((srv, i) => (
              <div key={i} className="col-md-4 text-center">
                <div className="card p-3 shadow-sm">
                  <img src={srv.img} className="img-fluid rounded mb-3" alt={srv.title} />
                  <h5>{srv.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NETWORK PORTFOLIO */}
      <section className="container my-5">
        <h2 className="text-center mb-5" style={styles.sectionTitle}>Our Network Portfolio</h2>
        <div className="row g-3">
          {[1, 2, 3].map(n => (
            <div key={n} className="col-md-4">
              <img src={`https://picsum.photos/400/250?random=${n}`} className="img-fluid rounded shadow" alt="Portfolio" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">Customer Testimonials</h2>
          <div className="row">
            {[1, 2, 3].map(n => (
              <div key={n} className="col-md-4">
                <div className="card p-4 text-dark text-center h-100">
                  <p>"eCROWN Technologies provided professional, reliable service for our office. Highly recommended!"</p>
                  <small className="fw-bold">- Satisfied Client {n}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-4" style={{ backgroundColor: '#001a35', color: '#fff' }}>
        &copy; 2026 eCROWN TECHNOLOGIES O₂. Excellence at its peak.
      </footer>
    </div>
    <Footer/>
    <Button/>
    </>
  );
}

export default Wireless;