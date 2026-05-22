import React from 'react';
import { Mail, MapPin, MessageSquare, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const deploymentChannels = [
    {
      icon: <ShieldCheck size={22} />,
      label: "CCTV, IP Camera & AV Solutions",
      platform: "Request Surveillance Setup",
      actionText: "Initiate project quote",
      url: "#",
      gradient: "linear-gradient(135deg, #0A1622 0%, #0D6EFD 100%)",
      glowColor: "rgba(13, 110, 253, 0.15)"
    },
    {
      icon: <Cpu size={22} />,
      label: "Network Infrastructure & Cabling",
      platform: "Low Voltage Engineering",
      actionText: "Request infrastructure audit",
      url: "#",
      gradient: "linear-gradient(135deg, #0D6EFD 0%, #00d4ff 100%)",
      glowColor: "rgba(0, 212, 255, 0.15)"
    },
    {
      icon: <MessageSquare size={22} />,
      label: "Instant Deployment Helpdesk",
      platform: "WhatsApp Operations",
      actionText: "Open engineering chat",
      url: "#",
      gradient: "linear-gradient(135deg, #25d366 0%, #00ff7f 100%)",
      glowColor: "rgba(37, 211, 102, 0.15)"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      label: "Enterprise Networks B2B",
      platform: "LinkedIn Corporate",
      actionText: "Connect with us",
      url: "#",
      gradient: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)",
      glowColor: "rgba(0, 160, 220, 0.12)"
    },
    {
      icon: <Mail size={22} />,
      label: "Secure Transmission Gateway",
      platform: "Corporate Email Systems",
      actionText: "Transmit system specifications",
      url: "mailto:engineering@ecrowntechnologieso2.com",
      gradient: "linear-gradient(135deg, #111111 0%, #444444 100%)",
      glowColor: "rgba(17, 17, 17, 0.1)"
    }
  ];

  return (
    <>

    <Navbar/>
    <div className="modern-contact-viewport min-vh-100 d-flex align-items-center py-5">
      {/* Background Glow Ambience */}
      <div className="absolute-blur-glow top-left"></div>
      <div className="absolute-blur-glow bottom-right"></div>
      
      <div className="container position-relative z-index-3">
        <div className="row g-4 m-0 bg-glass-container rounded-4 overflow-hidden align-items-stretch shadow-lg">
          
          {/* --- LEFT PANEL: BRAND AND IDENTITY --- */}
          <div className="col-lg-5 p-4 p-md-5 bg-deep-slate text-white d-flex flex-column justify-content-between position-relative overflow-hidden">
            {/* Tech line background accent */}
            <div className="tech-grid-bg"></div>
            
            <div className="position-relative z-index-2">
              <div className="badge-modern-pill mb-4 d-inline-block text-uppercase">
                <span>⚡</span> SYSTEM GATEWAYS
              </div>
              
              <h1 className="display-5 fw-extrabold tracking-tight mb-3 text-white">
                Engineering <br />
                <span className="text-gradient-cyan">Excellence At Its Peak.</span>
              </h1>
              
              <div className="brand-pillars-minimal d-flex align-items-center gap-2 text-uppercase tracking-wider mb-4 opacity-75">
                <span>Technology</span>
                <span className="dot-divider"></span>
                <span>Innovation</span>
                <span className="dot-divider"></span>
                <span>Excellence</span>
              </div>

              <div className="rainbow-connector-bar mb-4"></div>

              <p className="text-slate-300 small mb-0">
                Deploy high-end hardware infrastructure subsystems. From low-voltage structured cabling, modern A/V systems, and smart CCTV networks to custom enterprise server storage configurations. Connect directly into our operations desk.
              </p>
            </div>

            <div className="pt-4 border-top border-white border-opacity-10 mt-5 position-relative z-index-2">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3 text-white small">
                  <div className="icon-badge-static d-flex align-items-center justify-content-center"> 
                    <MapPin size={15} className="text-info" /> 
                  </div>
                  <span className="fw-medium text-slate-200">Technology Hub & Enterprise Command Center</span>
                </div>
                <div className="d-flex align-items-center gap-2 tracking-wider index-system-text">
                  <span className="pulse-indicator-dot"></span>
                  <span className="text-uppercase fw-bold text-info opacity-75">"...excellence at its peak" ACTIVE RESPONSE</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT PANEL: INTERACTIVE CHANNELS --- */}
          <div className="col-lg-7 p-4 p-md-5 bg-white-glass d-flex align-items-center">
            <div className="w-100 d-flex flex-column gap-3">
              {deploymentChannels.map((channel, index) => (
                <a 
                  key={index} 
                  href={channel.url} 
                  className="modern-channel-row text-decoration-none d-flex align-items-center justify-content-between p-3 rounded-3"
                  style={{ '--hover-glow': channel.glowColor }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="modern-icon-frame d-flex align-items-center justify-content-center shadow-sm" 
                      style={{ background: channel.gradient }}
                    >
                      {channel.icon}
                    </div>
                    <div>
                      <span className="text-muted-tag tracking-wider d-block mb-1 text-uppercase">
                        {channel.label}
                      </span>
                      <h4 className="fw-bold text-dark h6 mb-0 tracking-tight">
                        {channel.platform}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-3 action-indicator">
                    <span className="small text-primary opacity-0 action-text d-none d-sm-inline fw-semibold">
                      {channel.actionText}
                    </span>
                    <div className="arrow-box d-flex align-items-center justify-content-center rounded-circle bg-light border">
                      <ArrowRight size={16} className="arrow-icon text-secondary" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      

      <style>{`
        /* Global & Scope Viewport Configs */
        .modern-contact-viewport {
          background-color: #060b13;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* Ambient Lighting Components */
        .absolute-blur-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.12;
          pointer-events: none;
        }
        .top-left { top: -10%; left: -5%; background-color: #0d6efd; }
        .bottom-right { bottom: -10%; right: -5%; background-color: #00ff7f; }

        /* Structural Container Blocks */
        .bg-glass-container {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bg-deep-slate {
          background: linear-gradient(145deg, #070d14 0%, #0d1b2a 100%);
        }

        .bg-white-glass {
          background: rgba(255, 255, 255, 0.97);
        }

        /* Text Styles & Accent Layout Tools */
        .fw-extrabold { font-weight: 800; }
        .text-gradient-cyan {
          background: linear-gradient(135deg, #38bdf8 0%, #0d6efd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge-modern-pill {
          background: rgba(13, 110, 253, 0.15);
          border: 1px solid rgba(13, 110, 253, 0.25);
          color: #38bdf8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 14px;
          border-radius: 30px;
        }

        .brand-pillars-minimal {
          font-size: 11px;
          letter-spacing: 1.5px;
          color: #94a3b8;
        }

        .dot-divider {
          width: 4px;
          height: 4px;
          background-color: #38bdf8;
          border-radius: 50%;
          display: inline-block;
        }

        .rainbow-connector-bar {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, #0d6efd 0%, #38bdf8 50%, #25d366 100%);
          border-radius: 4px;
        }

        .text-slate-300 {
          color: #cbd5e1;
          line-height: 1.6;
          opacity: 0.85;
        }

        .icon-badge-static {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .index-system-text {
          font-size: 11px;
        }

        /* Pulse Telemetry Dot */
        .pulse-indicator-dot {
          width: 6px;
          height: 6px;
          background-color: #25d366;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          animation: networkPulse 2s infinite;
        }

        @keyframes networkPulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(37, 211, 102, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        /* Grid Channels Layout Modules */
        .modern-channel-row {
          background-color: #ffffff;
          border: 1px solid #f1f5f9;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modern-icon-frame {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          color: #ffffff;
        }

        .text-muted-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #94a3b8;
        }

        .arrow-box {
          width: 32px;
          height: 32px;
          transition: all 0.25s ease;
        }

        .arrow-icon, .action-text {
          transition: all 0.25s ease;
        }

        .action-text {
          transform: translateX(6px);
        }

        /* Micro Interactive States */
        .modern-channel-row:hover {
          transform: translateY(-2px);
          background-color: #ffffff;
          box-shadow: 0 12px 24px var(--hover-glow);
          border-color: transparent;
        }

        .modern-channel-row:hover .arrow-box {
          background-color: #060b13 !important;
          border-color: #060b13 !important;
        }

        .modern-channel-row:hover .arrow-icon {
          color: #ffffff !important;
          transform: translateX(1px);
        }

        .modern-channel-row:hover .action-text {
          opacity: 1 !important;
          transform: translateX(0);
        }

        .tech-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .z-index-2 { z-index: 2; }
        .z-index-3 { z-index: 3; }
      `}</style>
    </div>

<Footer/>
    </>
  );
}

export default Contact;