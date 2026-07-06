import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import PaystackPop from '@paystack/inline-js';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const PaymentPage = () => {

const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Look for the exact keys set during your registration/login process
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user') || localStorage.getItem('userData');

    if (!storedToken || !storedUser) {
      // Unregistered or unauthenticated; boot immediately to error route
      navigate('/error', { replace: true });
    } else {
      // Session exists and keys are verified
      setIsLoading(false);
    }
  }, [navigate]);

  // Hard blocker preventing any structural visual flashes while evaluating auth status
  if (isLoading) {
    return null;
  }


    const location = useLocation();
    const navigate = useNavigate();

    // Debugging assistance tool (Check your browser console to verify what keys are arriving)
    console.log("Staging Router Payload State Data:", location.state);

    const paymentAmount = location.state?.subtotal || location.state?.totalAmount || 0;
    const userEmail = location.state?.userEmail || location.state?.email || "customer@example.com";
    
    // SAFE FALLBACK: Set to null so the initialization guard can catch validation gaps
    const orderId = location.state?.orderId || location.state?.id || location.state?._id || null;
    const orderedItems = location.state?.orderItems || location.state?.items || [];

    const [isProcessing, setIsProcessing] = useState(false);
    
    // Receipt State Control System
    const [showReceipt, setShowReceipt] = useState(false);
    const [receiptData, setReceiptData] = useState(null);

    // SECURITY GUARD WALL: Prevents broken Paystack execution if metadata is corrupted or missing
    if ((paymentAmount === 0 || !orderId) && !showReceipt) {
        return (
            <>
                <Navbar />
                <div className="payment-page-wrapper d-flex align-items-center justify-content-center">
                    <div className="text-center p-5 card shadow-sm border border-light bg-white rounded-3 max-w-md">
                        <Lucide.AlertCircle size={48} className="text-danger mx-auto mb-3" />
                        <h3 className="fw-bold text-dark mb-2">Invalid Order Reference</h3>
                        <p className="text-muted small mb-4">
                            We couldn't locate a secure database tracking identifier for this session. Please re-initialize your transaction deck layout safely.
                        </p>
                        <button className="btn btn-primary px-4 py-2 fw-bold" onClick={() => navigate('/')}>
                            Return to Homepage
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const handlePaystackPayment = () => {
        setIsProcessing(true);

        // Convert amount safely to Kobo (Paystack standard unit requirement)
        const amountInKobo = Math.round(Number(paymentAmount) * 100);

        const payload = {
            email: userEmail.trim(),
            amount: String(amountInKobo),
            metadata: {
                orderId: orderId 
            }
        };

        axios.post('https://ecrownode-1.onrender.com/pay', payload)
            .then((result) => {
                const accessCode = result.data?.access_code || 
                                   result.data?.data?.access_code || 
                                   result.data?.result?.data?.access_code;

                if (!accessCode) {
                    alert("Gateway Error: Backend response is missing authorization token metadata.");
                    setIsProcessing(false);
                    return;
                }

                const popup = new PaystackPop();

                popup.resumeTransaction(accessCode, {
                    onSuccess: async (response) => {
                        try {
                            // 🔄 SYNC: Safe endpoint mapping using the verified order ID value
                            await axios.put(`https://ecrownode-1.onrender.com/api/admin/orders/${orderId}`, {
                                status: 'Paid',
                                reference: response.reference
                            });

                            setReceiptData({
                                orderId: orderId,
                                reference: response.reference,
                                amountPaid: paymentAmount,
                                customerEmail: userEmail,
                                orderItems: orderedItems, 
                                dateString: new Date().toLocaleString()
                            });

                            setShowReceipt(true);
                        } catch (syncError) {
                            console.error("Ledger Status Sync Failure Exception:", syncError);
                            alert("Payment captured, but failed to synchronize database ledger record status automatically.");
                        } finally {
                            setIsProcessing(false);
                        }
                    },
                    onCancel: () => {
                        setIsProcessing(false);
                        console.log("Customer terminated payment modal viewport safely.");
                    }
                });
            })
            .catch((err) => {
                setIsProcessing(false);
                console.error("Infrastructure Network Exception Hook:", err);
                alert(err.response?.data?.error || "Transaction Pipeline Halted: Verification handshake failed.");
            });
    };

    const handleDownloadReceipt = () => {
        window.print();
    };

    return (
        <>
            <div className="no-print">
                <Navbar />
            </div>

            <div className="payment-page-wrapper">
                <div className="container py-5 d-flex justify-content-center">
                    
                    {!showReceipt ? (
                        <div className="card checkout-payment-card shadow border-0 bg-white overflow-hidden w-100 no-print">
                            <div className="row g-0">
                                
                                <div className="col-12 col-md-5 bg-light p-4 p-lg-5 d-flex flex-column justify-content-between border-end border-light">
                                    <div>
                                        <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill fw-bold small mb-3">
                                            ORDER SUMMARY
                                        </span>
                                        <h3 className="fw-bold text-dark mb-4">Invoice Manifest</h3>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="flex-row d-flex justify-content-between align-items-center py-2 border-bottom border-light">
                                                <span className="text-muted small">Tracking ID</span>
                                                <span className="font-monospace text-dark fw-bold small text-truncate ms-2" style={{maxWidth: '160px'}}>{orderId}</span>
                                            </div>
                                            <div className="flex-row d-flex justify-content-between align-items-center py-2 border-bottom border-light">
                                                <span className="text-muted small">Customer ID</span>
                                                <span className="text-dark fw-bold small text-truncate ms-2" style={{maxWidth: '160px'}}>{userEmail}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 pt-4 border-top border-light">
                                        <div className="d-flex justify-content-between align-items-end">
                                            <div>
                                                <span className="text-muted extra-small fw-bold text-uppercase d-block mb-1">Total Due</span>
                                                <h2 className="text-dark fw-extrabold mb-0">₦{Number(paymentAmount).toLocaleString()}</h2>
                                            </div>
                                            <Lucide.ShieldCheck size={28} className="text-success mb-1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-center">
                                    <h3 className="fw-bold text-dark mb-2">Secure Checkout Gateway</h3>
                                    <p className="text-muted small mb-4">Deploy real-time transaction processing backed by isolated backend endpoint validation.</p>
                                    
                                    <div 
                                        className={`card p-3 rounded-3 border-primary-soft bg-brand-soft d-flex flex-row align-items-center gap-3 mb-4 gateway-selector-option ${isProcessing ? 'disabled-element' : ''}`}
                                        onClick={!isProcessing ? handlePaystackPayment : undefined}
                                        role="button"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="gateway-badge-icon bg-white text-primary rounded-2 shadow-sm d-flex align-items-center justify-content-center">
                                            <Lucide.CreditCard size={20} />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="text-dark fw-bold small d-flex align-items-center justify-content-between">
                                                <span>Online Interbank Payment Channel</span>
                                                <Lucide.ChevronRight size={16} className="text-muted" />
                                            </div>
                                            <div className="text-muted extra-small">Secure processing via your Credit/Debit Card or USSD code.</div>
                                        </div>
                                    </div>

                                    <button 
                                        className="btn btn-success w-100 py-3 fw-bold text-white shadow d-flex align-items-center justify-content-center gap-2"
                                        onClick={handlePaystackPayment}
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status"></span>
                                                Generating Authorization Reference...
                                            </>
                                        ) : (
                                            <>
                                                <Lucide.Lock size={16} /> Pay via Paystack ₦{Number(paymentAmount).toLocaleString()}
                                            </>
                                        )}
                                    </button>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className="receipt-print-wrapper w-100 max-w-md mx-auto">
                            <div className="card border-0 shadow-lg bg-white rounded-4 overflow-hidden receipt-card">
                                
                                <div className="bg-success text-white text-center p-4 pt-5 relative receipt-header position-relative">
                                    <div className="receipt-success-icon bg-white text-success rounded-circle shadow d-flex align-items-center justify-content-center mx-auto mb-3 position-absolute start-50 translate-middle-x">
                                        <Lucide.CheckCircle2 size={36} className="fw-bold" />
                                    </div>
                                    <h4 className="fw-bold mb-1 tracking-wide mt-3">Payment Successful</h4>
                                    <p className="extra-small text-white-50 mb-0">Thank you for your transaction purchase.</p>
                                </div>

                                <div className="card-body p-4 p-sm-5 bg-white text-dark">
                                    <div className="text-center mb-4">
                                        <span className="text-muted extra-small text-uppercase tracking-wider d-block mb-1">Amount Transacted</span>
                                        <h1 className="fw-extrabold text-dark tracking-tight mb-0">₦{Number(receiptData?.amountPaid).toLocaleString()}</h1>
                                    </div>

                                    <div className="receipt-divider my-4 border-bottom border-dashed border-2"></div>

                                    {receiptData?.orderItems && receiptData.orderItems.length > 0 && (
                                        <div className="mb-4">
                                            <span className="text-muted extra-small text-uppercase tracking-wider d-block mb-2 fw-bold">Items Secured</span>
                                            <div className="d-flex flex-column gap-2 bg-light p-3 rounded-3 border border-light">
                                                {receiptData.orderItems.map((item, index) => (
                                                    <div key={index} className="d-flex justify-content-between align-items-center small">
                                                        <span className="text-dark fw-medium">{item.name} <strong className="text-primary small">x{item.quantity}</strong></span>
                                                        <span className="font-monospace text-muted">₦{Number(item.price * item.quantity).toLocaleString()}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="receipt-divider my-4 border-bottom border-dashed border-2"></div>
                                        </div>
                                    )}

                                    <div className="d-flex flex-column gap-3 receipt-details-list">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted small">Tracking Reference</span>
                                            <span className="font-monospace text-dark fw-bold small text-truncate max-w-xs">{receiptData?.reference}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted small">Order Identifier</span>
                                            <span className="font-monospace text-dark fw-bold small text-truncate max-w-xs">{receiptData?.orderId}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted small">Account Client</span>
                                            <span className="text-dark fw-bold small text-truncate max-w-xs">{receiptData?.customerEmail}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted small">Timestamp Frame</span>
                                            <span className="text-dark fw-bold small">{receiptData?.dateString}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-muted small">Channel Handler</span>
                                            <span className="badge bg-light text-secondary border fw-bold small">Paystack Checkout</span>
                                        </div>
                                    </div>

                                    <div className="receipt-divider my-4 border-bottom border-dashed border-2"></div>
                                    
                                    <div className="text-center text-muted extra-small d-flex align-items-center justify-content-center gap-1">
                                        <Lucide.ShieldCheck size={14} className="text-success" /> Fully Documented Ledger Node Verification Completed
                                    </div>
                                </div>

                                <div className="card-footer bg-light p-3 border-0 d-flex gap-2 no-print">
                                    <button 
                                        className="btn btn-outline-secondary flex-grow-1 py-2 fw-bold text-dark d-flex align-items-center justify-content-center gap-2"
                                        onClick={() => navigate('/')}
                                    >
                                        <Lucide.Home size={16} /> Home
                                    </button>
                                    <button 
                                        className="btn btn-success flex-grow-1 py-2 fw-bold text-white shadow-sm d-flex align-items-center justify-content-center gap-2"
                                        onClick={handleDownloadReceipt}
                                    >
                                        <Lucide.Download size={16} /> Print Receipt
                                    </button>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="no-print">
                <Footer />
            </div>

            <style>
                {`
                .payment-page-wrapper { background: #f8fafe; min-height: 100vh; padding-top: 100px; font-family: 'Inter', system-ui, sans-serif; }
                .checkout-payment-card { max-width: 850px; border-radius: 16px !important; }
                .bg-primary-soft { background-color: rgba(13, 110, 253, 0.06); }
                .bg-brand-soft { background-color: rgba(13, 110, 253, 0.03); }
                .border-primary-soft { border: 1px solid rgba(13, 110, 253, 0.1) !important; }
                .max-w-md { max-width: 480px; }
                .max-w-xs { max-width: 200px; }
                .gateway-badge-icon { width: 42px; height: 42px; flex-shrink: 0; }
                .extra-small { font-size: 11px; }
                .disabled-element { pointer-events: none; opacity: 0.6; }
                
                .receipt-header { border-bottom: 0; }
                .receipt-success-icon {
                    width: 64px;
                    height: 64px;
                    top: -12px;
                }
                .border-dashed {
                    border-style: dashed !important;
                    border-color: #e9ecef !important;
                    border-width: 2px !important;
                }

                @media print {
                    .no-print, navbar, footer, .navbar, .footer, button, .card-footer {
                        display: none !important;
                    }
                    body, html, #root, .payment-page-wrapper, .container {
                        background: #ffffff !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                        height: auto !important;
                    }
                    .receipt-print-wrapper {
                        max-width: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .receipt-card {
                        box-shadow: none !important;
                        border: 0 !important;
                    }
                    .receipt-header {
                        background-color: #198754 !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        color: #ffffff !important;
                        padding-top: 30px !important;
                    }
                    .receipt-success-icon {
                        display: none !important;
                    }
                    .badge {
                        border: 1px solid #ccc !important;
                        color: #000 !important;
                    }
                }
                `}
            </style>
        </>
    );
};

export default PaymentPage;