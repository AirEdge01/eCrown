import React from 'react';
import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RequestInstallation = () => {

// const [isAuthorized, setIsAuthorized] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const rawData = localStorage.getItem('userData');
    
//     // Catch null strings or uncreated storage items
//     if (!rawData || rawData === 'null' || rawData === 'undefined') {
//       window.location.replace('/error');
//       return;
//     }

//     try {
//       const parsed = JSON.parse(rawData);

//       // CHANGE 'token' TO YOUR REAL LOGIN SPECIFIC KEY (e.g., parsed.email or parsed.id)
//       if (!parsed || !parsed.token) { 
//         console.warn("Security Breach: Missing inner validation token.");
//         localStorage.removeItem('userData'); // Wipe bad data
//         window.location.replace('/error');
//         return;
//       }

//       // If key exists, grant page visibility
//       setIsAuthorized(true);
//       setIsLoading(false);
//     } catch (e) {
//       localStorage.removeItem('userData');
//       window.location.replace('/error');
//     }
//   }, []);

//   if (isLoading || !isAuthorized) {
//     return null; // Absolute white screen protection while checking
//   }


    return (
        <>
            <Navbar />
            <div className="installation-page-wrapper m-0 p-0">
                
                {/* --- Main Workspace Content Area --- */}
                <main className="main-content-panel p-4 p-md-5">
                    
                    {/* Header Context Bar */}
                    <header className="container d-flex flex-column flex-sm-row justify-content-between align-items-sm-center pb-4 mb-4 border-bottom border-light">
                        <div>
                            <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill fw-bold mb-2 small tracking-wide">
                                FIELD OPERATIONS DEPLOYMENT
                            </span>
                            <h1 className="font-display fw-bold text-brand-dark mb-1">Schedule Site Installation</h1>
                        </div>
                        <div className="mt-3 mt-sm-0">
                            <Link to="/dashboard" className="btn btn-outline-light border text-brand-dark bg-white rounded-3 px-3 py-2 d-flex align-items-center gap-2 small fw-semibold shadow-sm text-decoration-none">
                                <Lucide.ArrowLeft size={16} /> Return to Dashboard
                            </Link>
                        </div>
                    </header>

                    <div className="container">
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-xl-9">
                                
                                {/* --- Main Corporate Installation Form Sheet --- */}
                                <div className="card form-glass-card border-0 p-4 p-md-5 shadow-sm rounded-4">
                                    <div className="mb-4">
                                        <h3 className="fw-bold text-brand-dark font-display mb-1 fs-4">Project Parameters Sheet</h3>
                                        <p className="text-muted small mb-0">Please fill out the technical specifications below to clear field authorization guidelines.</p>
                                    </div>

                                    <form className="row g-4">
                                        
                                        {/* Company Name */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Company / Enterprise Name</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Building className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="text" name="companyName" required className="form-control px-5 py-2.5 rounded-3 text-dark small" placeholder="e.g. Acme Corp Headquarters" />
                                            </div>
                                        </div>

                                        {/* Contact Personnel Name */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Primary Contact Representative</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.User className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="text" name="contactName" required className="form-control px-5 py-2.5 rounded-3 text-dark small" placeholder="John Doe" />
                                            </div>
                                        </div>

                                        {/* Contact Email Address */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Corporate Email Profile</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Mail className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="email" name="email" required className="form-control px-5 py-2.5 rounded-3 text-dark small" placeholder="johndoe@company.com" />
                                            </div>
                                        </div>

                                        {/* Mobile Contact Line */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Direct Contact Phone Line</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Phone className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="tel" name="phone" required className="form-control px-5 py-2.5 rounded-3 text-dark small" placeholder="+1 (555) 000-0000" />
                                            </div>
                                        </div>

                                        {/* Core Infrastructure Service Dropdown Selection */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Target Technology Infrastructure Pillar</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Layers className="input-icon-left text-muted position-absolute" size={16} />
                                                <select name="serviceType" required defaultValue="" className="form-select px-5 py-2.5 rounded-3 text-dark small">
                                                    <option value="" disabled>Select your technical requirement</option>
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

                                        {/* Urgent Tier Levels */}
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Priority Timeline Index</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Clock className="input-icon-left text-muted position-absolute" size={16} />
                                                <select name="urgencyLevel" defaultValue="Standard" className="form-select px-5 py-2.5 rounded-3 text-dark small">
                                                    <option value="Standard">Standard Matrix Setup (Routine window)</option>
                                                    <option value="Urgent">Urgent - Required inside 7 days</option>
                                                    <option value="Critical">Critical - Production Halt Emergency</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Preferred Deployment Date */}
                                        <div className="col-12">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Target Implementation Date</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.Calendar className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="date" name="preferredDate" required className="form-control px-5 py-2.5 rounded-3 text-dark small" />
                                            </div>
                                        </div>

                                        {/* Physical Target Site Address */}
                                        <div className="col-12">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Physical Target Installation Site Address</label>
                                            <div className="input-group-custom position-relative">
                                                <Lucide.MapPin className="input-icon-left text-muted position-absolute" size={16} />
                                                <input type="text" name="siteAddress" required className="form-control px-5 py-2.5 rounded-3 text-dark small" placeholder="Building Floor, Street Address, State, ZIP" />
                                            </div>
                                        </div>

                                        {/* Project Description Scope Input */}
                                        <div className="col-12">
                                            <label className="form-label text-brand-dark small fw-semibold mb-2">Hardware Scope Description & Notes</label>
                                            <textarea name="projectScope" rows="4" className="form-control p-3 rounded-3 text-dark small text-area-custom" placeholder="Please outline metrics, specific square footage dimensions, structural obstacles, or device volume allocations to brief field engineers..."></textarea>
                                        </div>

                                        {/* Submit Processing Form Action Button */}
                                        <div className="col-12 pt-2">
                                            <button type="submit" className="btn btn-primary btn-submit-form py-3 px-4 w-100 rounded-3 d-inline-flex align-items-center justify-content-center gap-2 fw-bold shadow-sm">
                                                <Lucide.Send size={18} /> Transmit Field Request Pipeline
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>

            {/* Custom Embedded Clean CSS Stylesheet matching layout constraints */}
            <style>
                {`
                .installation-page-wrapper {
                    background: #f8fafe;
                    min-height: 100vh;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .text-brand-dark { color: #0A1622; }
                .bg-primary-soft { background-color: rgba(13, 110, 253, 0.06); }
                
                /* --- Workspace Content --- */
                .main-content-panel {
                    background: #f8fafe;
                    width: 100%;
                }

                /* --- Form Control Visual System --- */
                .form-glass-card {
                    background: #ffffff;
                    border-radius: 20px !important;
                    box-shadow: 0 4px 20px rgba(10, 22, 34, 0.02) !important;
                }

                .input-icon-left {
                    top: 50%;
                    left: 18px;
                    transform: translateY(-50%);
                    pointer-events: none;
                    z-index: 4;
                }

                .form-control, .form-select {
                    border: 1px solid #e2e8f0;
                    background-color: #ffffff;
                    transition: all 0.2s ease;
                }

                .form-control:focus, .form-select:focus {
                    border-color: #0D6EFD;
                    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
                    outline: none;
                }

                .text-area-custom {
                    resize: none;
                }

                .btn-submit-form {
                    font-size: 15px;
                    background-color: #0A1622;
                    border: none;
                    transition: all 0.25s ease;
                }

                .btn-submit-form:hover {
                    background-color: #0D6EFD;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 22px rgba(13, 110, 253, 0.2);
                }
                `}
            </style>
            <Footer />
        </>
    );
};

export default RequestInstallation;