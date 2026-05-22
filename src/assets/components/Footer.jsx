import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="text-white border-top border-opacity-10 shadow-lg pt-5 pb-5 mt-auto" style={{ background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 100%)', zIndex: 1040 }}>
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            
            {/* Branding Column */}
            <div className="col-md-5 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                <div className="d-flex align-items-center justify-content-center border border-4 rounded-circle fw-bold" 
                     style={{ width: '36px', height: '36px', fontSize: '16px', fontWeight: '900', borderColor: '#38bdf8', color: '#38bdf8' }}>
                  e
                </div>
                <div>
                  <h5 className="fw-bold mb-0 tracking-tight" style={{ fontSize: '15px', color: '#f8fafc' }}>
                    eCROWN <span className="fw-normal small" style={{ color: '#38bdf8' }}>TECHNOLOGIES O₂</span>
                  </h5>
                  <p className="fst-italic mb-0" style={{ fontSize: '10px', color: '#94a3b8' }}>
                    ...excellence at its peak
                  </p>
                </div>
              </div>
              
              {/* Officer Details */}
              <div className="pt-2 border-top border-secondary border-opacity-30">
                <h4 className="mb-0 fw-bold" style={{ fontFamily: 'Georgia, serif', fontSize: '20px', letterSpacing: '0.3px', color: '#f8fafc' }}>
                  Adeboye A. Oresanya
                </h4>
                <p className="text-uppercase tracking-wider fw-semibold mb-0" style={{ fontSize: '11px', letterSpacing: '1px', color: '#38bdf8' }}>
                  Senior Installer Technician
                </p>
              </div>
            </div>

            {/* Contact Matrix Column */}
            <div className="col-md-7">
              <div className="row g-3" style={{ fontSize: '13px' }}>
                
                {/* Physical Location */}
                <div className="col-sm-6 d-flex align-items-start gap-2">
                  <span className="fs-5 mt-n1" style={{ minWidth: '18px', color: '#38bdf8' }}>📍</span>
                  <div>
                    <strong className="d-block mb-0 text-uppercase tracking-wider" style={{ fontSize: '10px', color: '#38bdf8' }}>Corporate Branch</strong>
                    <span style={{ color: '#e2e8f0', lineHeight: '1.4' }}>1305 28th Street, Orlando, FL 32805</span>
                  </div>
                </div>

                {/* Secure Connections */}
                <div className="col-sm-6 d-flex align-items-start gap-2">
                  <span className="fs-5 mt-n1" style={{ minWidth: '18px', color: '#38bdf8' }}>📞</span>
                  <div>
                    <strong className="d-block mb-0 text-uppercase tracking-wider" style={{ fontSize: '10px', color: '#38bdf8' }}>Direct Contact</strong>
                    <div style={{ color: '#e2e8f0' }}>Direct: <span className="fw-medium text-white">407-663-4884</span></div>
                    <div style={{ color: '#e2e8f0' }}>WhatsApp: <span className="fw-medium text-white">386-882-8163</span></div>
                  </div>
                </div>

                {/* Email Interface Links */}
                <div className="col-12 d-flex align-items-center gap-2 pt-2 border-top border-secondary border-opacity-30">
                  <span className="fs-5" style={{ color: '#38bdf8' }}>✉️</span>
                  <div>
                    <span className="text-uppercase tracking-wider me-2" style={{ fontSize: '10px', color: '#94a3b8' }}>Enterprise Email:</span>
                    <a href="mailto:Info@ecrowntechnologies.net" className="text-decoration-none fw-semibold transition-link" style={{ color: '#38bdf8' }}>
                      Info@ecrowntechnologies.net
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Standard Lower Copyright Node Bar */}
          <div className="row mt-4 pt-3 border-top border-secondary border-opacity-20 text-center" style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#64748b' }}>
            <div className="col">
              © {new Date().getFullYear()} eCROWN TECHNOLOGIES O₂ • TECHNOLOGY | INNOVATION | EXCELLENCE
            </div>
          </div>
        </div>
      </footer>

      <style>
        {`
            
        `}
      </style>
    </>
  );
}

export default Footer;
