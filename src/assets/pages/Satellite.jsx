import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

// Fallback logic remains to ensure UI stability
const createFallbackImage = (label) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#f1f5f9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="24">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const ServiceSection = ({ title, desc, imgMain, imgSide1, imgSide2, reverse }) => (
  <div className={`row align-items-center mb-5 pb-5 border-bottom ${reverse ? 'flex-lg-row-reverse' : ''}`}>
    <div className="col-lg-6 mb-4">
      <div className="d-flex flex-wrap gap-2" style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '10px' }}>
        <img 
          src={imgMain} 
          className="w-100 rounded-lg shadow-sm mb-2" 
          alt={title} 
          loading="lazy"
          style={{ height: '300px', objectFit: 'cover', width: '100%' }} 
          onError={(e) => { e.target.onerror = null; e.target.src = createFallbackImage(title); }}
        />
        <div className="d-flex w-100 gap-2">
          <img 
            src={imgSide1} 
            className="w-50 rounded-lg shadow-sm" 
            alt="Detail 1" 
            loading="lazy"
            style={{ height: '200px', objectFit: 'cover' }} 
            onError={(e) => { e.target.onerror = null; e.target.src = createFallbackImage('Detail 1'); }}
          />
          <img 
            src={imgSide2} 
            className="w-50 rounded-lg shadow-sm" 
            alt="Detail 2" 
            loading="lazy"
            style={{ height: '200px', objectFit: 'cover' }} 
            onError={(e) => { e.target.onerror = null; e.target.src = createFallbackImage('Detail 2'); }}
          />
        </div>
      </div>
    </div>
    <div className={`col-lg-6 ${reverse ? 'pr-lg-5' : 'pl-lg-5'}`}>
      <h3 className="font-weight-bold mb-3 h2">{title}</h3>
      <p className="text-secondary leading-relaxed" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>{desc}</p>
      <button className="btn btn-primary mt-3">Learn More About {title}</button>
    </div>
  </div>
);

const Satellite = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-white min-vh-100" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#0f172a' }}>
        
        

        {/* HERO */}
        <section className="text-white py-5 px-4" style={{ background: 'linear-gradient(135deg, #020617 0%, #1e3a8a 100%)', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
          <div className="container text-center">
            <h2 className="display-3 font-weight-bold mb-3">Enterprise Infrastructure Installation</h2>
            <p className="lead opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
              We are the premier choice for mission-critical installations. From satellite-based remote connectivity to complex data center deployments, we provide the hardware, labor, and expertise to build the foundation of your digital future.
            </p>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <div className="container py-5">
          <h2 className="text-center font-weight-bold mb-5 display-4"> Our Installation Capabilities</h2>

          <ServiceSection 
            title="Satellite Networking"
            desc="We bridge the geographic divide with high-speed, orbital connectivity solutions. eCROWN specializes in the site survey, permit acquisition, and precision-alignment of VSAT terminals and LEO satellite constellations."
            imgMain="https://picsum.photos/seed/sat1/800/600"
            imgSide1="https://picsum.photos/seed/sat2/400/400"
            imgSide2="https://picsum.photos/seed/sat3/400/400"
          />

          <ServiceSection 
            title="Fiber Optic Backbone"
            desc="High-performance data requires a high-performance backbone. Our certified installation teams handle end-to-end fiber deployment, ranging from heavy-duty trenching and micro-duct installation to delicate fusion splicing."
            imgMain="https://picsum.photos/seed/fiber1/800/600"
            imgSide1="https://picsum.photos/seed/fiber2/400/400"
            imgSide2="https://picsum.photos/seed/fiber3/400/400"
            reverse
          />

          <ServiceSection 
            title="Data Center Infrastructure"
            desc="Your server room is the brain of your organization. We deliver turnkey data center installations, including raised flooring, hot/cold aisle containment, and climate-controlled environmental monitoring."
            imgMain="https://picsum.photos/seed/data1/800/600"
            imgSide1="https://picsum.photos/seed/data2/400/400"
            imgSide2="https://picsum.photos/seed/data3/400/400"
          />

          <ServiceSection 
            title="Structured Cabling"
            desc="Network chaos costs time and money. Our team installs clean, labeled, and highly organized structured cabling systems that meet TIA/EIA standards."
            imgMain="https://picsum.photos/seed/cable1/800/600"
            imgSide1="https://picsum.photos/seed/cable2/400/400"
            imgSide2="https://picsum.photos/seed/cable3/400/400"
            reverse
          />

          <ServiceSection 
            title="Security & Surveillance"
            desc="Protect your assets with our hardened security ecosystems. We deploy 4K AI-integrated camera systems with advanced motion analytics and perimeter sensors."
            imgMain="https://picsum.photos/seed/sec1/800/600"
            imgSide1="https://picsum.photos/seed/sec2/400/400"
            imgSide2="https://picsum.photos/seed/sec3/400/400"
          />

          <ServiceSection 
            title="Smart Automation (IoT)"
            desc="Transform your facility into a responsive, intelligent ecosystem. We integrate smart lighting, automated climate controls, and proximity-based occupancy sensors."
            imgMain="https://picsum.photos/seed/iot1/800/600"
            imgSide1="https://picsum.photos/seed/iot2/400/400"
            imgSide2="https://picsum.photos/seed/iot3/400/400"
            reverse
          />

          <ServiceSection 
            title="Renewable Energy Systems"
            desc="Reliable power is the foundation of all technology. We install solar arrays, high-capacity lithium-ion battery storage banks, and professional-grade inverter systems."
            imgMain="https://picsum.photos/seed/solar1/800/600"
            imgSide1="https://picsum.photos/seed/solar2/400/400"
            imgSide2="https://picsum.photos/seed/solar3/400/400"
          />
        </div>

        {/* CTA */}
        <footer className="bg-dark text-white py-5">
          <div className="container text-center">
            <h3 className="mb-4">Ready to Schedule an Installation?</h3>
            <p className="mb-4 opacity-75">Our certified engineering team is ready to survey your site and provide a custom quote.</p>
            <button className="btn btn-outline-light btn-lg px-5">Request Installation Estimate</button>
          </div>
        </footer>

        <style>{`
          .gap-2 { gap: 0.5rem; }
        `}</style>
      </div>

      <Footer/>
      <Button/>
    </>
  );
}

export default Satellite;