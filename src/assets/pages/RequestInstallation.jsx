import React from 'react';
import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RequestInstallation = () => {
  return (
    <>
      <Navbar />
      <div className="installation-page-viewport min-vh-100 py-5">
        {/* Subtle Engineering Mesh Backdrops */}
        <div className="radial-glow-node light-blue"></div>
        <div className="radial-glow-node light-indigo"></div>
        <div className="mesh-matrix-overlay"></div>

        <div className="container position-relative z-index-10 mt-5 pt-2">
          
          {/* ── HEADER CONTROL ACTION BAR ── */}
          <header className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center pb-4 mb-5 border-bottom border-slate-200 border-opacity-60">
            <div>
              <div className="badge-telemetry-pill mb-2 text-uppercase">
                <span>⚡</span> Field Operations Pipeline
              </div>
              <h1 className="display-6 fw-extrabold text-slate-900 tracking-tight mb-1">
                Schedule Site Installation
              </h1>
            </div>
            <div className="mt-3 mt-sm-0">
              <Link to="/dashboard" className="btn-return-dashboard d-inline-flex align-items-center gap-2 text-decoration-none fw-bold small shadow-sm">
                <Lucide.ArrowLeft size={16} /> Return to Dashboard
              </Link>
            </div>
          </header>

          {/* ── MAIN SPLIT GRID MATRIX ── */}
          <div className="row g-5 justify-content-center align-items-start">
            
            {/* LEFT COLUMN: Clean Minimalist Form Block */}
            <div className="col-12 col-lg-7">
              <div className="form-glass-card p-4 p-md-5">
                <div className="mb-4">
                  <h3 className="fw-extrabold text-slate-900 h5 tracking-tight mb-1">
                    Project Parameters Sheet
                  </h3>
                  <p className="text-secondary small mb-0">
                    Provide your core logistics profile details below to clear field authorization guidelines.
                  </p>
                </div>

                <form className="row g-4">
                  {/* First Name */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">First Name</label>
                    <div className="input-group-custom">
                      <Lucide.User className="input-icon-left text-muted" size={16} />
                      <input type="text" name="firstName" required className="form-control-custom" placeholder="Oluwatunmise" />
                    </div>
                  </div>

                  {/* Surname */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">Surname</label>
                    <div className="input-group-custom">
                      <Lucide.UserCheck className="input-icon-left text-muted" size={16} />
                      <input type="text" name="surname" required className="form-control-custom" placeholder="Surname" />
                    </div>
                  </div>

                  {/* Email Profile */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">Email Address</label>
                    <div className="input-group-custom">
                      <Lucide.Mail className="input-icon-left text-muted" size={16} />
                      <input type="email" name="email" required className="form-control-custom" placeholder="engineering@company.com" />
                    </div>
                  </div>

                  {/* Direct Phone Line */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">Direct Phone Line</label>
                    <div className="input-group-custom">
                      <Lucide.Phone className="input-icon-left text-muted" size={16} />
                      <input type="tel" name="phone" required className="form-control-custom" placeholder="+234XXXXXXXXXX" />
                    </div>
                  </div>

                  {/* Target Tech Pillar Dropdown */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">Target Technology Infrastructure Pillar</label>
                    <div className="input-group-custom">
                      <Lucide.Layers className="input-icon-left text-muted" size={16} />
                      <select name="serviceType" required defaultValue="" className="form-select-custom">
                        <option value="" disabled>Select requirement</option>
                        <option value="A/v & Digital Signage">A/v & Digital Signage Systems</option>
                        <option value="CCTV Camera & IP Camera">CCTV Camera & IP Camera Arrays</option>
                        <option value="Low-voltage Runs">Low-voltage Cable Pathway Runs</option>
                        <option value="Low-Voltage Structured Cabling">Low-Voltage Structured Data Cabling</option>
                        <option value="Point Of Sales">Point Of Sales Terminal Nodes</option>
                        <option value="Self-Checkout">Self-Checkout Automation Kiosks</option>
                        <option value="Satellite Networking">Satellite Networking Downlinks</option>
                        <option value="Server & Storage">Server Hardware & Storage Racks</option>
                        <option value="Wireless Networking">Wireless Networking Access Points</option>
                      </select>
                    </div>
                  </div>

                  {/* Priority Timeline Index Dropdown */}
                  <div className="col-12 col-md-6">
                    <label className="form-label-custom mb-2">Priority Timeline Index</label>
                    <div className="input-group-custom">
                      <Lucide.Clock className="input-icon-left text-muted" size={16} />
                      <select name="urgencyLevel" defaultValue="Standard" className="form-select-custom">
                        <option value="Standard">Standard Matrix Setup (Routine window)</option>
                        <option value="Urgent">Urgent - Required inside 7 days</option>
                        <option value="Critical">Critical - Production Emergency</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Physical Site Address */}
                  <div className="col-12">
                    <label className="form-label-custom mb-2">Physical Site Address</label>
                    <div className="input-group-custom">
                      <Lucide.MapPin className="input-icon-left text-muted" size={16} />
                      <input type="text" name="siteAddress" required className="form-control-custom" placeholder="Building Floor, Street Address, State" />
                    </div>
                  </div>

                  {/* Description Notes Textarea */}
                  <div className="col-12">
                    <label className="form-label-custom mb-2">Description & Notes</label>
                    <textarea name="projectScope" rows="4" className="form-control-custom p-3 textarea-custom" placeholder="Outline specific structural dimensions, device allocations, obstacles, or metrics to brief engineers..."></textarea>
                  </div>

                  {/* Submit Action Block */}
                  <div className="col-12 pt-2">
                    <button type="submit" className="btn-submit-pipeline w-100 py-3 px-4 rounded-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold shadow-sm">
                      <Lucide.Send size={16} /> Transmit Field Request Pipeline
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Status / Visual HUD Card */}
            <div className="col-12 col-lg-5 position-sticky" style={{ top: '120px' }}>
              <div className="telemetry-info-card p-4 p-md-5 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="hud-icon-shell mb-4 d-flex align-items-center justify-content-center bg-white rounded-3 shadow-sm border border-light">
                    <Lucide.ShieldCheck size={24} className="text-primary" />
                  </div>
                  <h4 className="fw-extrabold text-slate-900 tracking-tight h5 mb-3">
                    Automated Allocation Protocol
                  </h4>
                  <p className="small text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                    Once this structural operational request packet is submitted, our system pairs your specifications with the closest active infrastructure engineer. 
                  </p>
                  
                  <hr className="my-4 border-slate-200 border-opacity-60" />
                  
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <div className="mini-hud-dot mt-1"></div>
                      <p className="small text-slate-700 mb-0"><strong>24-Hour Scope Audit:</strong> Low-voltage parameters are audited by field leads instantly.</p>
                    </div>
                    <div className="d-flex align-items-start gap-3">
                      <div className="mini-hud-dot mt-1"></div>
                      <p className="small text-slate-700 mb-0"><strong>Live Status Sync:</strong> View engineering schedules directly inside your operational workspace.</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mt-5 px-3 py-2 bg-white rounded-pill border border-slate-200 border-opacity-60 telemetry-strip-footer">
                  <span className="live-indicator-dot"></span>
                  <span className="text-uppercase fw-bold text-muted-tag tracking-wider" style={{ fontSize: '10px' }}>
                    Deployment Node Security Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />

      {/* ── HIGH END CSS ARCHITECTURE ── */}
      <style>{`
        .installation-page-viewport {
          background-color: #f8fafc;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        /* Fluid Architectural Ambience Elements */
        .radial-glow-node {
          position: fixed;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }
        .light-blue { top: -10%; right: -5%; background-color: #dbeafe; }
        .light-indigo { bottom: -15%; left: -5%; background-color: #e0e7ff; }

        .mesh-matrix-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          pointer-events: none;
          background-image: linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px);
          background-size: 28px 28px;
          z-index: 2;
        }

        /* Header UI Modifiers */
        .badge-telemetry-pill {
          background: rgba(13, 110, 253, 0.06);
          border: 1px solid rgba(13, 110, 253, 0.15);
          color: #0d6efd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          padding: 6px 14px;
          border-radius: 30px;
          display: inline-block;
        }

        .btn-return-dashboard {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 10px 18px;
          border-radius: 12px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-return-dashboard:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
          transform: translateY(-1px);
        }

        /* Glassmorphic Form Card Canvas Structure */
        .form-glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 24px;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.02);
        }

        .form-label-custom {
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.3px;
        }

        /* Enhanced Micro-interaction Form Controls */
        .input-group-custom {
          position: relative;
          width: 100%;
        }

        .input-icon-left {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 5;
          color: #94a3b8 !important;
          transition: color 0.2s ease;
        }

        .form-control-custom, .form-select-custom {
          width: 100%;
          padding: 11px 16px 11px 46px;
          font-size: 13.5px;
          color: #0f172a;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .form-select-custom {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 12px 12px;
        }

        .form-control-custom:focus, .form-select-custom:focus {
          outline: none;
          border-color: #0d6efd;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.08);
        }

        .form-control-custom:focus + .input-icon-left,
        .form-select-custom:focus + .input-icon-left {
          color: #0d6efd !important;
        }

        .textarea-custom {
          padding-left: 16px !important;
          resize: none;
        }

        /* Solid High-End Submission Node Button */
        .btn-submit-pipeline {
          background: #0f172a;
          color: #ffffff;
          border: none;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-submit-pipeline:hover {
          background: #0d6efd;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.2);
        }

        /* Sidebar HUD Visual Element Layout */
        .telemetry-info-card {
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 24px;
        }

        .hud-icon-shell {
          width: 48px;
          height: 48px;
        }

        .mini-hud-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #0d6efd;
          flex-shrink: 0;
        }

        .telemetry-strip-footer {
          width: fit-content;
        }

        .text-muted-tag {
          font-weight: 700;
          color: #64748b;
        }

        .live-indicator-dot {
          width: 7px;
          height: 7px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: networkPulseGlow 2s infinite;
        }

        @keyframes networkPulseGlow {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .z-index-10 { z-index: 10; }
      `}</style>
    </>
  );
};

export default RequestInstallation;