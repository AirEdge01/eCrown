import React, { useState } from 'react';
import { FileText, ArrowRight,CheckCircle,ShieldCheck,UploadCloud,Sliders,Layers,Lock,Cpu,Workflow} from 'lucide-react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';



const Request = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectSector: 'low-voltage-structured-cabling',
    estimatedBudget: 'tier-1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  return (

    <>
    <Navbar/>
    <div className="contact-wrapper">
        {/* --- SECTION 1: ENTERPRISE RFP BANNER --- */}
        <section className="contact-hero position-relative d-flex align-items-center text-white">
            <div className="hero-overlay"></div>
            <div className="container position-relative z-3 text-center py-5">
                <div className="badge-premium mb-3">PROPOSAL INTAKE DESK</div>
                <h1 className="display-4 fw-bold mb-2">
                    Submit Formal RFPs to <span className="text-gradient-blue">eCROWN TECHNOLOGIES O₂</span>
                </h1>
                
                {/* Updated Ticker to precisely match the Flyer's bottom footer alignment */}
                <div className="brand-pillars-ticker mb-4 d-flex justify-content-center align-items-center gap-2 gap-sm-4 text-uppercase fw-bold tracking-widest">
                    <span className="pillar-item">Technology</span>
                    <span className="pillar-divider">|</span>
                    <span className="pillar-item">Innovation</span>
                    <span className="pillar-divider">|</span>
                    <span className="pillar-item">Excellence</span>
                </div>

                <p className="lead max-w-2xl mx-auto opacity-90">
                    Initiate critical installation engineering analysis. Route your physical architectural layout schemas, low-voltage specifications, and deployment nodes directly to our execution team.
                </p>
            </div>
        </section>

        {/* --- SECTION 2: INTERACTIVE PIPELINE LAYOUT --- */}
        <section className="py-5 bg-white">
            <div className="container py-lg-4">
                <div className="row g-5">
                    
                    {/* LEFT COLUMN: RFP PROPOSAL PROTOCOLS */}
                    <div className="col-lg-5">
                        <span className="text-brand-blue fw-bold text-uppercase tracking-wider small d-block mb-2">Bidding & Estimation</span>
                        <h2 className="text-brand-dark fw-bold mb-4">The RFP Evaluation Pipeline</h2>
                        <p className="text-muted mb-5">
                            Our technical estimating desk reviews incoming deployment profiles within 2 business hours to calculate low-voltage infrastructure specifications, labor matrices, and equipment bills.
                        </p>

                        <div className="d-flex flex-column gap-4">
                            {[
                                {
                                    icon: <FileText size={22} className="text-brand-blue" />,
                                    title: "1. Scope Verification",
                                    detail: "Engineers parse your dynamic technical parameters against multi-tier structural codes and low-voltage standards.",
                                },
                                {
                                    icon: <Sliders size={22} className="text-brand-blue" />,
                                    title: "2. Installation Matrixing",
                                    detail: "We compute exact structured cabling paths, link drops, node maps, and hardware specifications.",
                                },
                                {
                                    icon: <Layers size={22} className="text-brand-blue" />,
                                    title: "3. Formal Bid Generation",
                                    detail: "A complete, itemized enterprise layout proposal blueprint is deployed to your authorized procurement officers.",
                                }
                            ].map((pipeline, i) => (
                                <div key={i} className="d-flex gap-3 align-items-start p-3 border rounded shadow-xs bg-light bg-opacity-40">
                                    <div className="p-2 bg-white rounded shadow-sm border text-brand-blue flex-shrink-0">
                                        {pipeline.icon}
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-brand-dark mb-1">{pipeline.title}</h6>
                                        <p className="text-muted small mb-0">{pipeline.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Peak Excellence Motto Exact Match */}
                        <div className="mt-5 p-4 premium-quote-box rounded border-start border-4 border-primary shadow-sm bg-light bg-opacity-50">
                            <span className="fw-bold text-brand-dark d-block mb-1">"...excellence at its peak."</span>
                            <small className="text-muted d-block">
                                All documents cross-referenced here transition straight into safe asset queues. Standard structural hardware profiles and schematic drafts are processed immediately.
                            </small>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: HIGH-END PROPOSAL INPUT FORM */}
                    <div className="col-lg-7">
                        <div className="p-4 p-md-5 rounded border shadow-lg bg-white position-relative overflow-hidden">
                            <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                                <div>
                                    <h4 className="fw-bold text-brand-dark mb-1">RFP Specification Intake</h4>
                                    <p className="text-muted small mb-0">Provide implementation parameters to configure a clean operational cost layout.</p>
                                </div>
                                <FileText size={32} className="text-muted opacity-50 d-none d-sm-block" />
                            </div>

                            {submitted && (
                                <div className="alert alert-success border-0 bg-success bg-opacity-10 text-success d-flex align-items-center gap-3 mb-4 py-3">
                                    <CheckCircle size={24} />
                                    <div>
                                        <span className="fw-bold d-block">RFP Securely Transmitted</span>
                                        <small className="opacity-90">Project scope routed to infrastructure estimators. A signed layout copy will trace back shortly.</small>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-brand-dark fw-semibold small"> Officer / Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control custom-input py-2.5" 
                                            placeholder="e.g., "
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            required 
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-brand-dark fw-semibold small">Corporate Routing Email</label>
                                        <input 
                                            type="email" 
                                            className="form-control custom-input py-2.5" 
                                            placeholder="name@company.com" 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            required 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label text-brand-dark fw-semibold small">Enterprise / Firm Identity</label>
                                    <input 
                                        type="text" 
                                        className="form-control custom-input py-2.5" 
                                        placeholder="Company Name" 
                                        value={formData.company}
                                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-brand-dark fw-semibold small">Installation Service Focus</label>
                                        <select 
                                            className="form-select custom-input py-2.5"
                                            value={formData.projectSector}
                                            onChange={(e) => setFormData({...formData, projectSector: e.target.value})}
                                        >
                                            {/* Options mapped exactly to the Flyer's Installation Services bullet-list */}
                                            <option value="low-voltage-structured-cabling">Low Voltage Structured Cabling</option>
                                            <option value="low-voltage-runs">Low Voltage Runs & Dropline Wiring</option>
                                            <option value="cctv-ip-camera">CCTV Camera & IP Camera Arrays</option>
                                            <option value="server-storage">Server / Storage Infrastructure</option>
                                            <option value="wireless-networking">Wireless Networking Deployments</option>
                                            <option value="satellite-networking">Satellite Networking Terminals</option>
                                            <option value="av-digital-signage">A/V & Digital Signage Arrays</option>
                                            <option value="pos-self-checkout">Point of Sale & Self-Checkout Arrays</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-brand-dark fw-semibold small">Estimated Scope Scale</label>
                                        <select 
                                            className="form-select custom-input py-2.5"
                                            value={formData.estimatedBudget}
                                            onChange={(e) => setFormData({...formData, estimatedBudget: e.target.value})}
                                        >
                                            <option value="tier-1">Commercial Drop (Under 150 Node Connections)</option>
                                            <option value="tier-2">Industrial / Campus Scale (150-500 Node Drops)</option>
                                            <option value="tier-3">Enterprise Datacenter Core (500+ Links)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label text-brand-dark fw-semibold small">Project Parameters & Scope Outline</label>
                                    <textarea 
                                        className="form-control custom-input" 
                                        rows="4" 
                                        placeholder="Describe technical layout specifications, structural space parameters, estimated drop targets, or physical timeline constraints..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                    ></textarea>
                                </div>

                                <div className="p-3 bg-light rounded border border-light d-flex align-items-center gap-3 my-2">
                                    <ShieldCheck size={24} className="text-success flex-shrink-0" />
                                    <small className="text-muted">
                                        All layout data, parameters, blueprints, and organizational technical constraints are strictly protected under premium corporate NDA protocols.
                                    </small>
                                </div>

                                <button type="submit" className="btn btn-submit-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 mt-2 shadow">
                                    Dispatch RFP Scope Blueprint <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* --- SECTION 3: BOTTOM SIMULATION SURFACE --- */}
        {/* Styled explicitly to honor the flyer's signature abstract high-contrast white & sweeping deep blue geometric color blocking */}
        <section className="simulation-surface py-5 border-top">
            <div className="container py-3 position-relative z-2">
                <div className="row g-4 align-items-center">
                    
                    {/* DROPZONE FILE ATTACHMENT FIELD */}
                    {/* <div className="col-lg-7">
                        <div 
                            className={`dropzone-card p-4 rounded text-center border-2 border-dashed d-flex flex-column align-items-center justify-content-center position-relative ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                        >
                            <div className="icon-wrapper mb-3 bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                                <UploadCloud size={28} className="text-brand-blue" />
                            </div>
                            <h6 className="fw-bold text-brand-dark mb-1">
                                {fileName ? "Blueprint Registered Successfully" : "Attach Engineering Layouts & CAD Blueprints"}
                            </h6>
                            <p className="text-muted small max-w-md mx-auto mb-3">
                                {fileName ? `Selected file: ${fileName}` : "Drag and drop structural layout PDFs, DWG arrays, or asset bills here for granular validation."}
                            </p>
                            <label className="btn btn-outline-secondary btn-sm px-4 fw-semibold custom-file-label">
                                Browse Schema Coordinates
                                <input type="file" className="d-none" onChange={(e) => setFileName(e.target.files[0]?.name || '')} />
                            </label>
                        </div>
                    </div> */}

                    {/* ENCRYPTED DATAFEED METRICS BOX
                    <div className="col-lg-5">
                        <div className="p-4 rounded text-white shadow position-relative architectural-grid-bg overflow-hidden"> */}
                            {/* Decorative curved sweeping glow mirroring the flyer right asset */}
                            {/* <div className="flyer-curve-overlay"></div>
                            
                            <div className="position-relative z-3">
                                <div className="d-flex align-items-center gap-2 text-info fw-bold tracking-wider small text-uppercase mb-3">
                                    <Lock size={14} /> Secure Transmission Nodes
                                </div>
                                <h5 className="fw-bold mb-3 text-white">Compliance Matrix</h5>
                                 */}
                                {/* <div className="d-flex flex-column gap-3"> */}
                                    {/* <div className="d-flex align-items-center justify-content-between border-bottom border-secondary border-opacity-30 pb-2"> */}
                                        {/* <span className="text-muted small d-flex align-items-center gap-2">
                                            <Cpu size={14} /> Systems Engineering
                                        </span> */}
                                        {/* <span className="badge bg-primary bg-opacity-20 text-info fw-mono font-size-xs">eCROWN O₂ Standard</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary border-opacity-30 pb-2"> */}
                                        {/* <span className="text-muted small d-flex align-items-center gap-2">
                                            <Workflow size={14} /> Pipeline Protocol
                                        </span> */}
                                        {/* <span className="badge bg-primary bg-opacity-20 text-info fw-mono font-size-xs">ISO 27001 Crypt</span>
                                    </div> */}
                                    {/* <div className="d-flex align-items-center justify-content-between pb-1">
                                        <span className="text-muted small d-flex align-items-center gap-2">
                                            <CheckCircle size={14} /> Infrastructure Review
                                        </span>
                                        <span className="text-info small fw-bold">BICSI Certified RCDD</span>
                                    </div> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}

                </div>
            </div>
        </section>

        <style>{`
            .contact-wrapper {
                color: #0A1622;
                overflow-x: hidden;
            }
            
            /* --- BANNER HEADER AREA --- */
            .contact-hero {
                background-image: url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                padding: 120px 0;
            }
            .hero-overlay { 
                position: absolute; 
                inset: 0; 
                background: linear-gradient(135deg, rgba(6, 19, 33, 0.96) 0%, rgba(10, 22, 34, 0.85) 100%); 
                z-index: 1; 
            }
            
            .badge-premium { 
                background: rgba(13, 110, 253, 0.12); 
                border: 1px solid #0D6EFD; 
                color: #00d4ff; 
                padding: 6px 18px; 
                border-radius: 50px; 
                font-weight: 700; 
                font-size: 11px; 
                letter-spacing: 1.5px;
                display: inline-block;
            }
            .brand-pillars-ticker {
                font-size: clamp(11px, 3vw, 14px);
                color: #00d4ff;
            }
            .pillar-item { letter-spacing: 3px; opacity: 0.95; }
            .pillar-divider { color: rgba(13, 110, 253, 0.6); font-weight: 300; }
            .tracking-widest { letter-spacing: 2px; }
            .text-gradient-blue { 
                background: linear-gradient(to right, #2563eb, #00d4ff); 
                -webkit-background-clip: text; 
                -webkit-text-fill-color: transparent; 
            }
            .max-w-2xl { max-width: 42rem; }

            /* --- FORM ELEMENTS --- */
             .text-brand-dark { color: #0A1622 !important; }
             .text-brand-blue { color: #2563eb !important; }
            .tracking-wider { letter-spacing: 1.5px; }

            .custom-input {
                // background-color: #fdfdfe;
                // border: 1px solid rgba(10, 22, 34, 0.12);
                // color: #0A1622;
                // border-radius: 6px;
                // transition: all 0.2s ease-in-out;
            }
            .custom-input:focus {
                background-color: #ffffff;
                border-color: #2563eb;
                box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);
                color: #0A1622;
                outline: none;
            }
            .custom-input::placeholder {
                color: rgba(10, 22, 34, 0.4);
                font-size: 14px;
            }

            .premium-quote-box {
                background: rgba(37, 99, 235, 0.02);
                border-color: #2563eb !important;
            }

            .btn-submit-primary {
                background-color: #0A1622;
                color: white;
                border: none;
                border-radius: 6px;
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .btn-submit-primary:hover {
                background-color: #112336;
                color: #ffffff;
            }

            /* --- SECTION 3 EXTENSIONS (Flyer Inspired Styling) --- */
            .simulation-surface {
                background: #fdfdfe !important;
            }
            .dropzone-card {
                background-color: #ffffff;
                border-color: rgba(37, 99, 235, 0.25);
                transition: all 0.2s ease;
            }
            .dropzone-card.drag-active {
                border-color: #2563eb;
                background-color: rgba(37, 99, 235, 0.02);
                transform: scale(1.005);
            }
            .dropzone-card .icon-wrapper {
                width: 54px;
                height: 54px;
                border: 1px solid rgba(10, 22, 34, 0.05);
            }
            .max-w-md { max-width: 28rem; }
            .fw-mono { font-family: monospace; }
            .font-size-xs { font-size: 11px; }
            
            /* High-End Dark Box utilizing the sweeping fluid blue arc profile from the layout flyer */
            .architectural-grid-bg {
                background-color: #061321 !important;
                background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                background-size: 20px 20px;
            }
            .flyer-curve-overlay {
                position: absolute;
                top: 0;
                right: -40px;
                bottom: 0;
                width: 60%;
                background: radial-gradient(circle at right, #2563eb 0%, #061321 80%);
                opacity: 0.35;
                transform: skewX(-15deg);
                z-index: 1;
            }
            .custom-file-label {
                border-color: rgba(10, 22, 34, 0.15);
                color: #0A1622;
                transition: all 0.2s ease;
            }
            .custom-file-label:hover {
                background-color: #0A1622;
                color: #fff;
                border-color: #0A1622;
            }
        `}</style>
    </div>
    <Footer/>
    </>
  );
}

export default Request;