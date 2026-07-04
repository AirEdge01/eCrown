import React, { useState, useEffect } from 'react';
import {ShoppingBag,Trash2,Plus,Minus,ArrowRight,ShieldCheck,Truck,CreditCard,HelpCircle,ShoppingCart,XCircle,ChevronDown,ChevronUp,Check,Layers,Activity} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

const OrderPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const [isCreatingOrder, setIsCreatingOrder] = useState(false);
    const [isManifestOpen, setIsManifestOpen] = useState(false);

    const hardwareSections = [
        { id: 'cctv', name: 'Surveillance & CCTV Systems' },
        { id: 'av-tv', name: 'Audio/Visual & Smart Displays' },
        { id: 'networking', name: 'Structured Cabling & Networking' },
        { id: 'server-storage', name: 'Server Arrays & Infrastructure Storage' },
        { id: 'pos-systems', name: 'Point of Sale (POS) Systems' },
        { id: 'power-ups', name: 'Backup Power & Industrial UPS' },
        { id: 'access-control', name: 'Biometric Access Control & Security' }
    ];

    const normalizeProductImageValue = (imageValue) => {
        if (!imageValue) return '';
        if (typeof imageValue === 'string') return imageValue.trim();
        if (typeof imageValue === 'object') {
            if (typeof imageValue.url === 'string') return imageValue.url.trim();
            if (typeof imageValue.path === 'string') return imageValue.path.trim();
            if (typeof imageValue.data === 'string') return imageValue.data.trim();
            if (typeof imageValue.image === 'string') return imageValue.image.trim();
            if (typeof imageValue.src === 'string') return imageValue.src.trim();
        }
        return '';
    };

    const formatProductImageSource = (imagePath) => {
        const normalized = normalizeProductImageValue(imagePath);
        if (!normalized) return 'https://images.unsplash.com/photo-1557672172-298e090bd0f1';
        if (normalized.startsWith('http://') || normalized.startsWith('https://') || normalized.startsWith('data:image/')) return normalized;
        if (normalized.startsWith('/')) return normalized;
        return `http://localhost:2000/${normalized.replace(/\\/g, '/')}`;
    };

    const mergeProductsWithLocalCache = (backendProducts = []) => {
        const localProducts = JSON.parse(localStorage.getItem('newboldProducts') || '[]');
        const merged = [...localProducts, ...backendProducts];
        const seen = new Set();
        return merged.filter(product => {
            if (!product) return false;
            const key = product._id || product.name;
            if (!key || seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    };

    // Read asset indices from active server clusters
    const fetchCatalogProducts = async (showLoader = false) => {
        if (showLoader) setIsLoadingProducts(true);
        const productEndpoints = [
            'http://localhost:2000/api/products',
            'http://localhost:2000/api/admin/products'
        ];

        for (const url of productEndpoints) {
            try {
                const response = await axios.get(url);
                let dataArray = [];
                if (Array.isArray(response.data)) dataArray = response.data;
                else if (response.data && Array.isArray(response.data.products)) dataArray = response.data.products;

                if (dataArray.length > 0 || localStorage.getItem('newboldProducts')) {
                    const activeProducts = mergeProductsWithLocalCache(dataArray).filter(item => item && (item._id || item.name));
                    setProducts(activeProducts);

                    // CRITICAL SYNC: If an item currently in the user's cart was deleted by the admin, 
                    // remove it from the cart state immediately.
                    setCart(currentCart => {
                        const updatedCart = currentCart.filter(cartItem =>
                            activeProducts.some(prod => (prod._id || prod.name) === (cartItem._id || cartItem.name))
                        );
                        if (updatedCart.length === 0 && isManifestOpen) {
                            setIsManifestOpen(false);
                        }
                        return updatedCart;
                    });

                    setIsLoadingProducts(false);
                    return;
                }
            } catch (err) {
                console.warn(`Endpoint skip cascade on source target route: ${url}`);
            }
        }
        setProducts([]);
        setIsLoadingProducts(false);
    };

    // Setting up the automatic live-polling sync layout matrix loop
    useEffect(() => {
        // Initial load with spinner indicator
        fetchCatalogProducts(true);

        // Poll the database cluster every 3000ms (3 seconds) to detect deletions instantly
        const liveSyncInterval = setInterval(() => {
            fetchCatalogProducts(false);
        }, 3000);

        // Tear down the background process when the node updates or unmounts
        return () => clearInterval(liveSyncInterval);
    }, []);

    const addToCart = (product) => {
        setCart(prev => {
            const existingIndex = prev.findIndex(item => item._id === product._id);
            if (existingIndex > -1) {
                return prev.map((item, idx) =>
                    idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsManifestOpen(true);
    };

    const updateQuantity = (productId, amount) => {
        setCart(prev => prev.map(item => {
            if (item._id === productId) {
                const nextQty = item.quantity + amount;
                return nextQty > 0 ? { ...item, quantity: nextQty } : item;
            }
            return item;
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prev => {
            const updated = prev.filter(item => item._id !== productId);
            if (updated.length === 0) setIsManifestOpen(false);
            return updated;
        });
    };

    const clearWholeManifest = (e) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to completely clear out your current shopping layout matrix?")) {
            setCart([]);
            setIsManifestOpen(false);
        }
    };

    const getProductsBySection = (sectionId) => {
        return products.filter(product => {
            if (!product.category) return sectionId === 'cctv';
            return product.category.toLowerCase() === sectionId.toLowerCase();
        });
    };

    const isItemInCart = (productId) => {
        return cart.some(item => item._id === productId);
    };

    const totalCartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const itemsPrice = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
    const shippingPrice = itemsPrice > 150000 || itemsPrice === 0 ? 0 : 5000;
    const totalAmount = itemsPrice + shippingPrice;

    const handleProceedToPayment = async (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert("Your layout matrix is empty!");
            return;
        }

        setIsCreatingOrder(true);

        const formattedItems = cart.map(item => ({
            product: item._id,
            productId: item._id,
            name: item.name,
            quantity: Number(item.quantity),
            qty: Number(item.quantity),
            price: Number(item.price),
            image: item.image
        }));

        const backendOrderPayload = {
            orderItems: formattedItems,
            items: formattedItems,
            itemsPrice: Number(itemsPrice),
            shippingPrice: Number(shippingPrice),
            totalPrice: Number(totalAmount),
            totalAmount: Number(totalAmount),
            paymentMethod: 'Paystack',
            status: 'Pending',
            userEmail: "customer@example.com"
        };

        try {
            const response = await axios.post('http://localhost:2000/api/orders', backendOrderPayload);
            const createdOrder = response.data?.order || response.data?.data || response.data;
            const targetOrderId = createdOrder?._id || createdOrder?.id;

            if (!targetOrderId) throw new Error("Unique reference validation tags missing from database packet return.");

            const checkoutSummary = {
                orderId: targetOrderId,
                orderItems: formattedItems,
                items: formattedItems,
                totalAmount: Number(totalAmount),
                userEmail: backendOrderPayload.userEmail
            };

            alert("🎉 Integration deployment request queued successfully!");
            setCart([]);
            setIsManifestOpen(false);
            navigate('/payment', { state: checkoutSummary });
        } catch (error) {
            console.error("Critical routing block order transmission error:", error);
            alert(`Order Validation Exception:\n${error.response?.data?.message || "Verify schema data constraints."}`);
        } finally {
            setIsCreatingOrder(false);
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                
                .order-canvas { 
                    background: radial-gradient(at 0% 0%, #f8fafc 0%, #f1f5f9 100%); 
                    min-height: 100vh; 
                    font-family: 'Plus Jakarta Sans', sans-serif; 
                    color: #0f172a; 
                }

                .premium-hero-header {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    border-radius: 24px;
                    padding: 40px;
                    color: #ffffff;
                    margin-bottom: 40px;
                    box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.3);
                    position: relative;
                    overflow: hidden;
                }
                .premium-hero-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
                    border-radius: 50%;
                }

                .product-premium-card { 
                    background: #ffffff; 
                    border: 1px solid rgba(226, 232, 240, 0.7); 
                    border-radius: 20px; 
                    overflow: hidden; 
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.006);
                }
                .product-premium-card:hover { 
                    transform: translateY(-6px); 
                    box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.08); 
                    border-color: #cbd5e1; 
                }
                .product-premium-card img {
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .product-premium-card:hover img {
                    transform: scale(1.06);
                }
                
                .btn-add-grid { 
                    background: #f1f5f9; 
                    color: #0f172a; 
                    font-weight: 700; 
                    font-size: 0.8rem; 
                    border: none; 
                    border-radius: 10px; 
                    padding: 10px 18px; 
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); 
                    display: flex; 
                    align-items: center; 
                    gap: 4px; 
                }
                .btn-add-grid:hover { 
                    background: #0f172a; 
                    color: #ffffff;
                }
                
                .btn-picked-grid { 
                    background: #d1fae5; 
                    color: #065f46; 
                    font-weight: 700; 
                    font-size: 0.8rem; 
                    border: none; 
                    border-radius: 10px; 
                    padding: 10px 18px; 
                    transition: all 0.2s ease; 
                    display: flex; 
                    align-items: center; 
                    gap: 4px; 
                }

                .btn-checkout-execute { 
                    background: #2563eb; 
                    color: #ffffff; 
                    border: none; 
                    font-weight: 700; 
                    border-radius: 14px; 
                    padding: 16px; 
                    transition: all 0.3s ease; 
                    width: 100%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    gap: 8px; 
                }
                .btn-checkout-execute:hover { 
                    background: #1d4ed8;
                    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
                }
                
                .screenshot-pill-card { 
                    background: rgba(255, 255, 255, 0.75); 
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(226, 232, 240, 0.8); 
                    border-radius: 16px; 
                    padding: 14px 22px; 
                    display: flex; 
                    align-items: center; 
                    gap: 16px; 
                    box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.03); 
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
                }
                .screenshot-pill-card:hover {
                    transform: translateY(-2px);
                    background: #ffffff;
                    border-color: #cbd5e1;
                }
                .screenshot-pill-card.active-border { 
                    border-color: #2563eb; 
                    background: #ffffff;
                    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.1);
                }
                .screenshot-icon-box { 
                    background: #f1f5f9; 
                    color: #0f172a; 
                    width: 44px; 
                    height: 44px; 
                    border-radius: 12px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    transition: all 0.2s ease;
                }
                .active-border .screenshot-icon-box {
                    background: #eff6ff;
                    color: #2563eb;
                }
                
                .section-divider-title { 
                    font-size: 1.35rem; 
                    font-weight: 800; 
                    color: #0f172a; 
                    padding-bottom: 12px; 
                    margin-top: 55px; 
                    margin-bottom: 24px; 
                    letter-spacing: -0.4px; 
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .section-divider-title::after {
                    content: '';
                    flex-grow: 1;
                    height: 1px;
                    background: linear-gradient(to right, #e2e8f0, transparent);
                    margin-left: 16px;
                }

                .inline-dropdown-manifest { 
                    background: #ffffff; 
                    border: 1px solid rgba(226, 232, 240, 0.8); 
                    border-radius: 20px; 
                    box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.12); 
                    margin-top: 14px; 
                    overflow: hidden; 
                    z-index: 99;
                }
                
                .custom-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
            `}</style>

            <Navbar />
            <div className="order-canvas py-5">
                <div className="container">

                    {/* STATS INTERACTIVE HEADER MATRIX */}
                    <div className="row g-3 mb-5 justify-content-between align-items-center position-relative" style={{ zIndex: 10 }}>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="screenshot-pill-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/support')}>
                                <div className="screenshot-icon-box">
                                    <HelpCircle size={20} />
                                </div>
                                <div>
                                    <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '9px', letterSpacing: '0.8px' }}>Infrastructure Assistance</div>
                                    <div className="fw-bold text-dark fs-6">Engage Support Cluster</div>
                                </div>
                            </div>
                        </div>

                        {/* INTERACTIVE SHOPPING BAG PILL HEAD */}
                        <div className="col-12 col-md-7 col-lg-5">
                            <div
                                className={`screenshot-pill-card h-100 justify-content-between ${totalCartItemsCount > 0 ? 'active-border' : ''}`}
                                style={{ cursor: totalCartItemsCount > 0 ? 'pointer' : 'default' }}
                                onClick={() => totalCartItemsCount > 0 && setIsManifestOpen(!isManifestOpen)}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <div className="screenshot-icon-box">
                                        <ShoppingCart size={20} />
                                    </div>
                                    <div>
                                        <div className="text-muted text-uppercase fw-bold" style={{ fontSize: '9px', letterSpacing: '0.8px' }}>Active Procurement Bag</div>
                                        <div className="fw-extrabold text-dark fs-6">
                                            {totalCartItemsCount} {totalCartItemsCount === 1 ? 'Unit' : 'Units'} Selected
                                        </div>
                                    </div>
                                </div>
                                {totalCartItemsCount > 0 && (
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '12px' }}>
                                            ₦{totalAmount.toLocaleString()}
                                        </span>
                                        {isManifestOpen ? <ChevronUp size={18} className="text-primary" /> : <ChevronDown size={18} className="text-muted" />}
                                    </div>
                                )}
                            </div>

                            {/* INLINE TOGGLED DROPDOWN PROCUREMENTS BREAKDOWN */}
                            {isManifestOpen && cart.length > 0 && (
                                <div className="inline-dropdown-manifest p-4 position-absolute start-0 end-0 mx-3 mx-md-0 mt-2 bg-white">
                                    <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
                                        <span className="fw-bold text-slate-800 d-flex align-items-center gap-2" style={{ fontSize: '15px' }}>
                                            <Layers size={18} className="text-primary" /> System Configuration Specs
                                        </span>
                                        <button onClick={clearWholeManifest} className="btn bg-transparent border-0 text-danger p-0 small fw-bold d-flex align-items-center gap-1" style={{ fontSize: '12px' }}>
                                            <XCircle size={14} /> Reset Bag
                                        </button>
                                    </div>

                                    {/* Scrollable Item Rows */}
                                    <div className="d-flex flex-column gap-2 mb-3 custom-scroll" style={{ maxHeight: '240px', overflowY: 'auto', paddingRight: '4px' }}>
                                        {cart.map((item) => (
                                            <div key={item._id} className="d-flex align-items-center justify-content-between bg-fluid p-2 rounded-3 border-0 bg-light">
                                                <div className="d-flex align-items-center gap-3 text-truncate" style={{ maxWidth: '65%' }}>
                                                    <img
                                                        src={formatProductImageSource(item.image)}
                                                        alt=""
                                                        className="rounded-3 bg-white"
                                                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1557672172-298e090bd0f1'; }}
                                                    />
                                                    <div className="text-truncate">
                                                        <h6 className="small fw-bold text-dark mb-0 text-truncate">{item.name}</h6>
                                                        <span className="text-muted font-monospace" style={{ fontSize: '11px' }}>₦{Number(item.price).toLocaleString()}</span>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="d-flex align-items-center bg-white rounded-3 shadow-sm border px-1">
                                                        <button onClick={() => updateQuantity(item._id, -1)} className="btn btn-sm p-1 px-2 border-0 text-muted"><Minus size={12} /></button>
                                                        <span className="px-1 font-monospace small fw-bold text-dark" style={{ fontSize: '13px', minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item._id, 1)} className="btn btn-sm p-1 px-2 border-0 text-muted"><Plus size={12} /></button>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item._id)} className="text-muted hover:text-danger p-1 bg-transparent border-0 transition-all"><Trash2 size={14} /></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pricing & Checkout Actions */}
                                    <div className="p-3 rounded-4 mb-3" style={{ background: '#f8fafc' }}>
                                        <div className="d-flex justify-content-between small text-muted mb-2">
                                            <span>Subtotal Matrix</span>
                                            <span className="fw-semibold text-dark">₦{itemsPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="d-flex justify-content-between small text-muted mb-3">
                                            <span>Fulfillment Logistics</span>
                                            <span className="fw-semibold text-dark">{shippingPrice === 0 ? "Complimentary" : `₦${shippingPrice.toLocaleString()}`}</span>
                                        </div>
                                        <div className="d-flex justify-content-between pt-2.5 border-top text-dark align-items-center">
                                            <span className="fw-bold" style={{ fontSize: '14px' }}>Gross Manifest Value</span>
                                            <span className="fw-extrabold text-primary fs-5">₦{totalAmount.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleProceedToPayment}
                                        className="btn-checkout-execute"
                                        disabled={isCreatingOrder}
                                    >
                                        {isCreatingOrder ? (
                                            <span>Provisioning Secure Channel...</span>
                                        ) : (
                                            <>
                                                <span>Initialize Node Checkout</span>
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* HERO INFRASTRUCTURE TERMINAL CARD */}
                    <div className="premium-hero-header">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <span className="badge bg-primary text-white mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-1.5" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
                                    <Activity size={12} /> Enterprise Ecosystem Matrix
                                </span>
                                <h1 className="fw-extrabold display-5 tracking-tight mb-2 text-white">Asset Integration Terminal</h1>
                                <p className="text-slate-300 m-0 border-start border-primary border-3 ps-3" style={{ maxWidth: '600px', fontSize: '0.95rem', color: '#cbd5e1' }}>
                                    Provision, build, and deploy verified high-tier system components seamlessly into your local network operations layout.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT CLASSIFICATIONS GRID MAP */}
                    <div className="row">
                        <div className="col-12">
                            {isLoadingProducts ? (
                                <div className="text-center py-5"><div className="spinner-border text-primary" role="status"></div></div>
                            ) : (
                                hardwareSections.map((section) => {
                                    const sectionProducts = getProductsBySection(section.id);
                                    return (
                                        <div key={section.id} className="mb-5">
                                            <h3 className="section-divider-title">
                                                <span>{section.name}</span>
                                            </h3>

                                            {sectionProducts.length === 0 ? (
                                                <div className="text-muted small bg-white p-4 rounded-4 border border-dashed text-center">
                                                    No catalog profiles registered under this architecture node index.
                                                </div>
                                            ) : (
                                                <div className="row g-4">
                                                    {sectionProducts.map((product) => {
                                                        const picked = isItemInCart(product._id);
                                                        return (
                                                            <div key={product._id} className="col-12 col-sm-6 col-md-4 col-xl-3">
                                                                <div className="product-premium-card h-100 d-flex flex-column">

                                                                    <div className="position-relative bg-light d-flex align-items-center justify-content-center" style={{ height: '190px', overflow: 'hidden' }}>
                                                                        <img
                                                                            src={formatProductImageSource(product.image)}
                                                                            alt={product.name}
                                                                            className="w-100 h-100 object-fit-cover"
                                                                            onError={(e) => { e.currentTarget.src = ''; }}
                                                                        />
                                                                    </div>

                                                                    <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between bg-white">
                                                                        <div>
                                                                            <h4 className="fs-6 fw-bold text-dark mb-1 line-clamp-2" style={{ minHeight: '2.4rem', lineHeight: '1.4' }}>{product.name}</h4>
                                                                            <p className="text-muted small mb-4 line-clamp-2" style={{ fontSize: '12px', minHeight: '2.2rem' }}>{product.description || 'Verified industrial layout network installation asset.'}</p>
                                                                        </div>

                                                                        <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                                                                            <div className="d-flex flex-column">
                                                                                <span className="text-muted mb-0.5" style={{ fontSize: '10px' }}>UNIT PRICE</span>
                                                                                <span className="fw-extrabold text-dark font-monospace" style={{ fontSize: '15px' }}>₦{Number(product.price).toLocaleString()}</span>
                                                                            </div>
                                                                            <button
                                                                                onClick={() => addToCart(product)}
                                                                                className={picked ? "btn-picked-grid" : "btn-add-grid"}
                                                                            >
                                                                                {picked ? (
                                                                                    <>
                                                                                        <Check size={13} strokeWidth={3} />
                                                                                        <span>Picked</span>
                                                                                    </>
                                                                                ) : (
                                                                                    <span>Add To Cart</span>
                                                                                )}
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OrderPage;