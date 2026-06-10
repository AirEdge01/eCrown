import React from 'react';
import { Mail, MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhatsappLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M12.01 2.18c-5.42 0-9.82 4.4-9.82 9.82 0 1.73.46 3.42 1.32 4.9L2 22.5l5.84-1.53c1.44.79 3.06 1.2 4.69 1.2 5.42 0 9.82-4.4 9.82-9.82 0-5.42-4.4-9.82-9.82-9.82Zm5.47 14.8c-.24.7-1.45 1.34-2.04 1.42-.54.08-1.2.13-4.19-1.05-3.64-1.44-5.97-5.22-6-5.3-.03-.08-.25-.72-.25-1.36 0-.64.33-.96.45-1.09.12-.12.26-.13.35-.13.09 0 .18 0 .26 0 .09 0 .22-.03.34.25.12.27.44.93.48 1 .05.1.08.22 0 .35-.08.12-.12.2-.24.32-.12.12-.24.26-.35.35-.12.1-.25.22-.1.43.15.21.67 1.1 1.45 1.77.99.87 1.82 1.15 2.09 1.28.28.12.44.1.61-.06.17-.16.73-.85.9-1.15.17-.3.35-.24.61-.18.25.06 1.6.75 1.87.89.27.14.45.21.52.33.07.12.07.43 0 .63Zm0 0" />
  </svg>
);

const Contact = () => {
  const deploymentChannels = [
    {
      icon: <MapPin size={24} />,
      label: "Physical Operations Command Center",
      platform: "Our Head Office Address",
      contact: "1305 28th Street, Orlando, FL 32805",
      actionText: "Open in Google Maps",
      url: "https://maps.google.com?q=1305+28th+Street+Orlando+FL+32805",
      accent: "#0d6efd",
      bgClass: "channel-address"
    },
    {
      icon: <Mail size={24} />,
      label: "Secure Data Communications",
      platform: "Official Email Dispatch",
      contact: "engineering@ecrowntechnologieso2.com",
      actionText: "Open inbox",
      url: "mailto:engineering@ecrowntechnologieso2.com",
      accent: "#00d4ff",
      bgClass: "channel-email"
    },
    {
      icon: <WhatsappLogo size={24} />,
      label: "Instant Deployment Helpdesk",
      platform: "WhatsApp Operations Chat",
      contact: "+234 801 234 5678",
      actionText: "Chat on WhatsApp",
      url: "https://wa.me/2348012345678",
      accent: "#25d366",
      bgClass: "channel-whatsapp"
    },
    {
      icon: <PhoneCall size={24} />,
      label: "Direct Voice Telephony Ring",
      platform: "24/7 Priority Voice Line",
      contact: "+234 801 234 5678",
      actionText: "Call now",
      url: "tel:+2348012345678",
      accent: "#ff9f43",
      bgClass: "channel-phone"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="premium-contact-viewport min-vh-100 py-5">
        {/* Crisp Spatial Light Backdrops */}
        <div className="radial-light-glow light-blue"></div>
        <div className="radial-light-glow light-cyan"></div>
        <div className="matrix-grid-overlay"></div>

        <div className="container position-relative z-index-10 mt-5 pt-4">
          {/* ── CENTRAL HERO HEADER ── */}
          <div className="text-center max-w-3xl mx-auto mb-5">
            <div className="badge-modern-pill mb-3 text-uppercase">
              <span>⚡</span> System Gateways Active
            </div>
            <h1 className="display-4 fw-extrabold tracking-tight text-slate-900 mb-3">
              Engineering <span className="text-gradient-blue">Excellence At Its Peak.</span>
            </h1>
            <p className="fs-6 mx-auto text-secondary mb-4" style={{ maxWidth: '640px', lineHeight: '1.7' }}>
              Deploy high-end hardware infrastructure subsystems. Connect directly into our operational gateway for custom low-voltage configurations and enterprise server architectures.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-3 custom-telemetry-strip p-2 px-3 mx-auto rounded-5">
              <span className="pulse-indicator-dot"></span>
              <span className="text-uppercase fw-bold text-primary small tracking-wider" style={{ fontSize: '11px' }}>
                Active Response Engineering Node
              </span>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mt-4 contact-quick-links">
              <a href="mailto:engineering@ecrowntechnologieso2.com?subject=Contact%20Request&body=Hello%20eCROWN%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20..." className="contact-link-pill text-decoration-none">
                <Mail size={16} className="me-2" /> engineering@ecrowntechnologieso2.com
              </a>
              <a href="tel:+2348012345678" className="contact-link-pill text-decoration-none">
                <PhoneCall size={16} className="me-2" /> +234 801 234 5678
              </a>
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="contact-link-pill text-decoration-none">
                <WhatsappLogo size={16} className="me-2" /> WhatsApp Chat
              </a>
            </div>
          </div>

          {/* ── CORE GRID MATRIX ── */}
          <div className="row g-4 m-0 justify-content-center">
            {deploymentChannels.map((channel, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <a
                  href={channel.url}
                  target={channel.url.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`modern-matrix-card ${channel.bgClass} text-decoration-none d-flex flex-column justify-content-between h-100 p-4`}
                >
                  <div>
                    <div className="icon-wrapper shadow-sm mb-4 d-flex align-items-center justify-content-center" style={{ color: channel.accent }}>
                      {channel.icon}
                    </div>
                    <span className="text-muted-tag tracking-wider d-block mb-1 text-uppercase">
                      {channel.label}
                    </span>
                    <h4 className="fw-extrabold text-slate-900 h6 mb-2 tracking-tight">
                      {channel.platform}
                    </h4>
                    <p className="mb-3 small text-slate-600">{channel.contact}</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-3 card-action-footer">
                    <span className="small text-primary fw-bold action-label-text">
                      {channel.actionText}
                    </span>
                    <div className="arrow-circle shadow-sm bg-white border d-flex align-items-center justify-content-center rounded-circle">
                      <ArrowRight size={16} className="arrow-icon-element text-secondary" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          ── SECURE TRANSMISSION SECURE ANCHOR (EMAIL GATEWAY) ──
          <div className="row m-0 mt-4 justify-content-center">
            <div className="col-lg-12">
              <a
                href="mailto:engineering@ecrowntechnologieso2.com"
                className="secure-gateway-bar text-decoration-none d-flex flex-column flex-md-row align-items-center justify-content-between p-4"
              >
                <div className="d-flex align-items-center gap-4 mb-3 mb-md-0">
                  <div className="secure-badge-icon d-flex align-items-center justify-content-center rounded-3 bg-white border shadow-sm">
                    <Mail size={22} className="text-slate-800" />
                  </div>
                  <div>
                    <span className="text-muted-tag tracking-wider d-block mb-1 text-uppercase">SECURE TRANSMISSION GATEWAY</span>
                    <h5 className="fw-extrabold text-slate-900 h6 mb-0">Transmit system specifications directly to: engineering@ecrowntechnologieso2.com</h5>
                  </div>
                </div>
                {/* <div className="d-flex align-items-center gap-3 px-3 py-2 rounded-3 bg-slate-900 text-white font-bold small tracking-wide shadow-sm button-accent-block">
                  Open Secure Link <ArrowRight size={14} />
                </div> */}
              </a>
            </div>
          </div>

          {/* ── GEOLOCATION HUD BAR ── */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-5 text-muted small py-3 border-top border-slate-200 border-opacity-60">
            <MapPin size={15} className="text-primary" />
            <span className="fw-medium text-slate-600 tracking-wide">1305 28th Street, Orlando, FL 32805</span>
          </div>

        </div>
      </div>
      <Footer />

      <style>{`
        /* Core Ambient Viewport Base Structure */
        .premium-contact-viewport {
          background-color: #f8fafc;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        /* Fluid Lighting and Structure Grids */
        .radial-light-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.35;
          pointer-events: none;
          z-index: 1;
        }
        .light-blue { top: -10%; left: -5%; background-color: #dbeafe; }
        .light-cyan { bottom: -10%; right: -5%; background-color: #e0f2fe; }

        .matrix-grid-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          pointer-events: none;
          background-image: linear-gradient(#003399 1px, transparent 1px), linear-gradient(90deg, #003399 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 2;
        }

        /* Interactive Matrix Cards Configuration */
        .modern-matrix-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .arrow-circle {
          width: 36px;
          height: 36px;
          transition: all 0.3s ease;
        }
        .arrow-icon-element { transition: transform 0.3s ease, color 0.3s ease; }
        .action-label-text { transition: color 0.3s ease; }

        /* Symmetrical Hover Matrices Styles */
        .modern-matrix-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(13, 110, 253, 0.08);
        }

        .modern-matrix-card:hover .icon-wrapper {
          color: #ffffff !important;
        }
        
        .modern-matrix-card:hover .arrow-circle {
          color: #ffffff !important;
        }
        .modern-matrix-card:hover .arrow-icon-element {
          color: #ffffff !important;
          transform: translateX(2px);
        }

        /* Micro Channels Accent Hooks */
        .channel-address:hover { border-color: #0d6efd; box-shadow: 0 20px 40px rgba(13, 110, 253, 0.08); }
        .channel-address:hover .icon-wrapper { background: #0d6efd; border-color: #0d6efd; }
        .channel-address:hover .arrow-circle { background: #0d6efd !important; border-color: #0d6efd !important; }

        .channel-email:hover { border-color: #00d4ff; box-shadow: 0 20px 40px rgba(0, 212, 255, 0.08); }
        .channel-email:hover .icon-wrapper { background: #00d4ff; border-color: #00d4ff; }
        .channel-email:hover .arrow-circle { background: #00d4ff !important; border-color: #00d4ff !important; }

        .channel-whatsapp:hover { border-color: #25d366; box-shadow: 0 20px 40px rgba(37, 211, 102, 0.08); }
        .channel-whatsapp:hover .icon-wrapper { background: #25d366; border-color: #25d366; }
        .channel-whatsapp:hover .arrow-circle { background: #25d366 !important; border-color: #25d366 !important; }

        .channel-phone:hover { border-color: #ff9f43; box-shadow: 0 20px 40px rgba(255, 159, 67, 0.08); }
        .channel-phone:hover .icon-wrapper { background: #ff9f43; border-color: #ff9f43; }
        .channel-phone:hover .arrow-circle { background: #ff9f43 !important; border-color: #ff9f43 !important; }

        /* Secure Horizontal Anchor Strip */
        .secure-gateway-bar {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.01);
          transition: all 0.3s ease;
        }
        .secure-badge-icon {
          width: 50px;
          height: 50px;
        }
        .button-accent-block { background: #0f172a; transition: background 0.25s ease; }
        
        .secure-gateway-bar:hover {
          background: #ffffff;
          border-color: rgba(13, 110, 253, 0.2);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.04);
        }
        .secure-gateway-bar:hover .button-accent-block {
          background: #0d6efd;
        }

        /* Accent Elements Styles */
        .badge-modern-pill {
          background: rgba(13, 110, 253, 0.06);
          border: 1px solid rgba(13, 110, 253, 0.15);
          color: #0d6efd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 30px;
          display: inline-block;
        }
        .contact-quick-links {
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .contact-link-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          color: #0f172a;
          padding: 0.9rem 1rem;
          border-radius: 999px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .contact-link-pill:hover {
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          text-decoration: none;
        }

        .custom-telemetry-strip {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          width: fit-content;
        }

        .text-gradient-blue {
          background: linear-gradient(135deg, #0d6efd 30%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-muted-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #94a3b8;
        }

        .pulse-indicator-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: coreNetworkPulse 2s infinite;
        }

        @keyframes coreNetworkPulse {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .card-action-footer { border-top: 1px solid #f1f5f9; }
        .z-index-10 { z-index: 10; }
      `}</style>
    </>
  );
};

export default Contact;