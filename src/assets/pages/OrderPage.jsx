import React, { useState } from 'react';
import * as Lucide from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const OrderPage = () => {
    // Structured object state to track individual quantities per product ID { [id]: quantity }
    const [cart, setCart] = useState({});
    const [wishlist, setWishlist] = useState({});
    // State to toggle the visibility of the shopping cart review drawer
    const [isCartOpen, setIsCartOpen] = useState(false);
    // State to toggle the visibility of the help channels dropdown panel
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const products = [
        {
            id: 'zosi-5182',
            name: 'ZOSI 1080P 2K Full HD WiFi Security Camera C5182 IP Camera',
            price: 32032,
            oldPrice: 76000,
            discount: '-58%',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-680',
            name: 'ZOSI C680 NEW 3MP 2K Window Camera for Home Security Multi-Node',
            price: 32175,
            oldPrice: 102810,
            discount: '-69%',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-518',
            name: 'ZOSI C518 4K 8MP Indoor Security Camera 2.4GHz & 5GHz WiFi Node',
            price: 39039,
            oldPrice: 121600,
            discount: '-68%',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'v380-solar',
            name: 'V380 TRIPLE LENS PTZ SOLAR FIELD CAMERA AI Human Tracking Outbound',
            price: 55450,
            oldPrice: 110900,
            discount: '-50%',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80',
            isExpress: false
        },
        {
            id: 'zosi-5182-duplicate-1',
            name: 'ZOSI 1080P 2K Full HD WiFi Security Camera C5182 IP Camera',
            price: 32032,
            oldPrice: 76000,
            discount: '-58%',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-680-duplicate-1',
            name: 'ZOSI C680 NEW 3MP 2K Window Camera for Home Security Multi-Node',
            price: 32175,
            oldPrice: 102810,
            discount: '-69%',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-518-duplicate-1',
            name: 'ZOSI C518 4K 8MP Indoor Security Camera 2.4GHz & 5GHz WiFi Node',
            price: 39039,
            oldPrice: 121600,
            discount: '-68%',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'v380-solar-duplicate-1',
            name: 'V380 TRIPLE LENS PTZ SOLAR FIELD CAMERA AI Human Tracking Outbound',
            price: 55450,
            oldPrice: 110900,
            discount: '-50%',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80',
            isExpress: false
        },
        {
            id: 'zosi-5182-duplicate-2',
            name: 'ZOSI 1080P 2K Full HD WiFi Security Camera C5182 IP Camera',
            price: 32032,
            oldPrice: 76000,
            discount: '-58%',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-680-duplicate-2',
            name: 'ZOSI C680 NEW 3MP 2K Window Camera for Home Security Multi-Node',
            price: 32175,
            oldPrice: 102810,
            discount: '-69%',
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'zosi-518-duplicate-2',
            name: 'ZOSI C518 4K 8MP Indoor Security Camera 2.4GHz & 5GHz WiFi Node',
            price: 39039,
            oldPrice: 121600,
            discount: '-68%',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80',
            isExpress: true
        },
        {
            id: 'v380-solar-duplicate-2',
            name: 'V380 TRIPLE LENS PTZ SOLAR FIELD CAMERA AI Human Tracking Outbound',
            price: 55450,
            oldPrice: 110900,
            discount: '-50%',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80',
            isExpress: false
        }
    ];

    const toggleWishlist = (id) => {
        setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const addToCart = (id) => {
        setCart(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const removeFromCart = (id) => {
        setCart(prev => {
            const updatedCart = { ...prev };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id];
            }
            return updatedCart;
        });
    };

    // Total item quantity inside the cart
    const totalCartCount = Object.values(cart).reduce((sum, currentQty) => sum + currentQty, 0);

    // Sum financial subtotal estimation
    const subtotal = products.reduce((acc, item) => acc + (cart[item.id] || 0) * item.price, 0);

    // Dynamic WhatsApp url generator using encoded string
    const whatsappMessage = encodeURIComponent("HI,GOODDAY,I NEED HELP REGARDING MY RECENT ORDER");

    // Support lines with direct WhatsApp numbers for immediate DM
    const supportLines = [
        {
            title: 'Support Line 1',
            subtitle: 'General Enquiries',
            number: '2348103965118'
        },
        {
            title: 'Support Line 2',
            subtitle: 'Order & Logistics',
            number: '2349035327526'
        },
        {
            title: 'Support Line 3',
            subtitle: 'Technical Help',
            number: '2348034567890'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="order-page-wrapper">

                {/* Header Row Segment */}
                <header className="order-hero">
                    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                        <div className="text-center text-md-start">
                            <span className="badge bg-brand-soft text-primary px-3 py-2 rounded-pill fw-bold mb-2 small tracking-wide">
                                ECROWN LOGISTICS HARDWARE
                            </span>
                            <h1 className="font-display fw-bold mb-1 text-brand-dark fs-2">
                                Enterprise Security Hardware Center
                            </h1>
                            <p className="text-muted small mb-0 max-w-2xl">
                                Configure individual surveillance elements, low-voltage nodes, and high-performance hardware modules instantly.
                            </p>
                        </div>

                        {/* Interactive Widget Control Suite (Help & Cart) */}
                        <div className="d-flex align-items-center gap-3 execution-controls-suite position-relative">

                            {/* Help Desk Popover Anchor */}
                            <div className="position-relative">
                                <div
                                    className={`live-help-widget d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm bg-white border border-light interactive-widget ${isHelpOpen ? 'help-active-border' : ''}`}
                                    onClick={() => setIsHelpOpen(!isHelpOpen)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="help-widget-icon bg-brand-soft text-primary rounded-2 d-flex align-items-center justify-content-center">
                                        <Lucide.HelpCircle size={20} />
                                    </div>
                                    <div className="d-none d-sm-block">
                                        <div className="text-muted extra-small fw-bold text-uppercase tracking-wider">Assistance</div>
                                        <div className="text-brand-dark fw-bold font-display">Get Help</div>
                                    </div>
                                </div>

                                {/* Modern Glassmorphism-touch Support Dropdown Menu */}
                                {isHelpOpen && (
                                    <>
                                        <div className="help-menu-backdrop" onClick={() => setIsHelpOpen(false)} />
                                        <div className="help-dropdown-menu bg-white rounded-3 shadow-lg p-2 position-absolute end-0 mt-2 border border-light z-3">
                                            <div className="px-2.5 py-1.5 border-bottom border-light mb-1">
                                                <span className="extra-small fw-bold text-muted text-uppercase tracking-wider">Contact Channels</span>
                                            </div>
                                            {supportLines.map((line, index) => (
                                                <a
                                                    key={index}
                                                    href={`https://wa.me/${line.number}?text=${whatsappMessage}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="help-channel-item d-flex align-items-center gap-3 p-2 rounded-2 text-decoration-none transition-all"
                                                    onClick={() => setIsHelpOpen(false)}
                                                >
                                                    <div className="channel-icon-avatar rounded-circle d-flex align-items-center justify-content-center bg-success-soft text-success">
                                                        <Lucide.MessageSquare size={16} />
                                                    </div>
                                                    <div className="d-flex flex-column min-w-0">
                                                        <span className="small text-brand-dark fw-bold line-height-tight">{line.title}</span>
                                                        <span className="extra-small text-muted">{line.subtitle}</span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Clickable Master Live Queue Widget Trigger Button */}
                            <div
                                className="live-cart-widget d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm bg-white border border-light interactive-widget"
                                onClick={() => setIsCartOpen(true)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="cart-widget-icon position-relative bg-brand-soft text-primary rounded-2 d-flex align-items-center justify-content-center">
                                    <Lucide.ShoppingCart size={20} />
                                    {totalCartCount > 0 && (
                                        <span className="widget-badge-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {totalCartCount}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <div className="text-muted extra-small fw-bold text-uppercase tracking-wider">Selected Queue</div>
                                    <div className="text-brand-dark fw-bold font-display">{totalCartCount} Order Items</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Main Product Shelf Catalog Layout */}
                <div className="container pb-5">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
                        {products.map((item) => {
                            const currentQty = cart[item.id] || 0;

                            return (
                                <div key={item.id} className="col">
                                    <div className="card h-100 market-product-card border-0 position-relative">

                                        {/* Image Frame Block Layout */}
                                        <div className="position-relative overflow-hidden market-img-frame d-flex align-items-center justify-content-center bg-white">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="product-display-img object-fit-contain p-2"
                                            />

                                            {/* Floating Wishlist Heart Control Element */}
                                            <button
                                                className="btn wishlist-float-trigger position-absolute border-0 p-0 d-flex align-items-center justify-content-center"
                                                onClick={() => toggleWishlist(item.id)}
                                                aria-label="Save item"
                                            >
                                                <Lucide.Heart
                                                    size={20}
                                                    className={wishlist[item.id] ? "heart-filled" : "heart-outline"}
                                                />
                                            </button>
                                        </div>

                                        {/* Details Matrix Structure Block */}
                                        <div className="card-body p-3 d-flex flex-column justify-content-between">
                                            <div>
                                                <h2 className="product-title-text mb-2">
                                                    {item.name}
                                                </h2>

                                                {/* Price Presentation Setup Block */}
                                                <div className="price-matrix mb-2">
                                                    <span className="main-price-display d-block font-display fw-bold">
                                                        ₦ {item.price.toLocaleString()}
                                                    </span>
                                                    <div className="d-flex align-items-center gap-2 mt-0.5">
                                                        <span className="old-strike-price text-muted text-decoration-line-through">
                                                            ₦ {item.oldPrice.toLocaleString()}
                                                        </span>
                                                        <span className="discount-ratio-tag px-1.5 py-0.5 rounded-1 fw-bold">
                                                            {item.discount}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Secondary Meta Tags Sub-Panel Line */}
                                                <div className="d-flex align-items-center justify-content-between gap-1 mb-3 pt-1">
                                                    {item.isExpress ? (
                                                        <div className="express-delivery-badge fw-extrabold italic-text">
                                                            ECROWN <span className="express-sub text-primary">EXPRESS</span>
                                                        </div>
                                                    ) : (
                                                        <div className="express-placeholder"></div>
                                                    )}
                                                    <div className="sponsored-tag text-muted d-inline-flex align-items-center gap-0.5">
                                                        Sponsored <Lucide.Info size={11} className="info-icon-meta" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Dual Action Controller Node Area */}
                                            <div className="action-button-block mt-auto">
                                                {currentQty > 0 ? (
                                                    <div className="qty-selector-container d-flex align-items-center justify-content-between rounded-2 p-1 bg-light border">
                                                        <button
                                                            className="btn qty-action-btn d-flex align-items-center justify-content-center rounded-2"
                                                            onClick={() => removeFromCart(item.id)}
                                                            aria-label="Reduce quantity by one"
                                                        >
                                                            <Lucide.Minus size={14} strokeWidth={2.5} />
                                                        </button>
                                                        <span className="fw-bold text-brand-dark qty-display-text">
                                                            {currentQty}
                                                        </span>
                                                        <button
                                                            className="btn qty-action-btn d-flex align-items-center justify-content-center rounded-2"
                                                            onClick={() => addToCart(item.id)}
                                                            aria-label="Increase quantity by one"
                                                        >
                                                            <Lucide.Plus size={14} strokeWidth={2.5} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        className="btn btn-brand-checkout w-100 py-2 fw-bold text-white d-flex align-items-center justify-content-center gap-2 transition-all"
                                                        onClick={() => addToCart(item.id)}
                                                    >
                                                        <Lucide.ShoppingCart size={16} /> Add to cart
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* --- Cart Slide-out Drawer Overlay View Panel --- */}
            <div
                className={`cart-drawer-overlay ${isCartOpen ? 'active' : ''}`}
                onClick={() => setIsCartOpen(false)}
            >
                <div
                    className="cart-drawer bg-white shadow-lg d-flex flex-column"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Drawer Header Layout */}
                    <div className="drawer-header p-3 d-flex align-items-center justify-content-between border-bottom">
                        <div className="d-flex align-items-center gap-2 text-brand-dark fw-bold font-display fs-5">
                            <Lucide.ShoppingCart size={20} className="text-primary" />
                            <span>Your Order Queue</span>
                        </div>
                        <button
                            className="btn p-1 border-0 text-muted drawer-close-trigger"
                            onClick={() => setIsCartOpen(false)}
                        >
                            <Lucide.X size={22} />
                        </button>
                    </div>

                    {/* Drawer Content Area */}
                    <div className="drawer-body p-3 flex-grow-1 overflow-y-auto">
                        {totalCartCount === 0 ? (
                            <div className="text-center py-5 my-4 text-muted">
                                <Lucide.ShoppingBag size={48} className="mx-auto mb-3 opacity-25 text-brand-dark" />
                                <p className="fw-bold mb-1 text-brand-dark">Your queue is empty</p>
                                <small className="text-muted">Add hardware elements from the main display panel shelf.</small>
                            </div>
                        ) : (
                            products.filter(item => cart[item.id] > 0).map(item => (
                                <div key={`cart-item-${item.id}`} className="cart-drawer-item d-flex gap-3 p-2 mb-3 rounded border border-light bg-white shadow-sm">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-img object-fit-contain rounded bg-light"
                                    />
                                    <div className="flex-grow-1 min-w-0 d-flex flex-column justify-content-between">
                                        <div>
                                            <h4 className="cart-item-title mb-1 text-truncate">{item.name}</h4>
                                            <div className="text-muted extra-small fw-medium">Unit Price: ₦ {item.price.toLocaleString()}</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            {/* Micro-Adjustment Quantities Modification Element Matrix */}
                                            <div className="qty-selector-container d-flex align-items-center justify-content-between rounded-2 p-0.5 bg-light border custom-qty-sm">
                                                <button
                                                    className="btn qty-action-btn-sm d-flex align-items-center justify-content-center rounded-1"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Lucide.Minus size={11} strokeWidth={2.5} />
                                                </button>
                                                <span className="fw-bold extra-small text-brand-dark px-2">{cart[item.id]}</span>
                                                <button
                                                    className="btn qty-action-btn-sm d-flex align-items-center justify-content-center rounded-1"
                                                    onClick={() => addToCart(item.id)}
                                                >
                                                    <Lucide.Plus size={11} strokeWidth={2.5} />
                                                </button>
                                            </div>
                                            <div className="text-primary small fw-bold font-display">
                                                ₦ {((cart[item.id] || 0) * item.price).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Drawer Dynamic Financial Summary Footer Frame */}
                    {totalCartCount > 0 && (
                        <div className="drawer-footer p-3 bg-light border-top mt-auto">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="text-muted small fw-bold text-uppercase tracking-wider">Subtotal Value</span>
                                <span className="text-brand-dark fw-bold font-display fs-4">₦ {subtotal.toLocaleString()}</span>
                            </div>
                            <button className="btn btn-brand-checkout w-100 py-2.5 text-white fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm">
                                Proceed to Verification <Lucide.ArrowRight size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style>
                {`
                .order-page-wrapper {
                    background: #f8fafe;
                    min-height: 100vh;
                    padding-top: 90px;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .order-hero {
                    padding: 2.5rem 1rem;
                    background: #ffffff;
                    border-bottom: 1px solid rgba(10, 22, 34, 0.06);
                    margin-bottom: 2rem;
                }

                .max-w-2xl { max-width: 42rem; }
                .text-brand-dark { color: #0A1622; }
                .bg-brand-soft { background-color: rgba(13, 110, 253, 0.06); }
                .bg-success-soft { background-color: rgba(25, 135, 84, 0.08); }
                
                .live-cart-widget, .live-help-widget {
                    min-width: 160px;
                    border: 1px solid rgba(10, 22, 34, 0.05) !important;
                    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @media (min-width: 576px) {
                    .live-cart-widget { min-width: 200px; }
                }
                .interactive-widget {
                    cursor: pointer;
                    user-select: none;
                }
                .interactive-widget:hover {
                    border-color: rgba(13, 110, 253, 0.2) !important;
                    box-shadow: 0 6px 16px rgba(10, 22, 34, 0.05) !important;
                    transform: translateY(-1px);
                }
                .help-active-border {
                    border-color: rgba(13, 110, 253, 0.25) !important;
                    background-color: #fafbfe !important;
                }
                .cart-widget-icon, .help-widget-icon {
                    width: 42px;
                    height: 42px;
                }
                .widget-badge-count {
                    font-size: 10px;
                    padding: 0.25em 0.5em;
                }

                /* Help Dropdown System Layout */
                .help-dropdown-menu {
                    width: 240px;
                    border: 1px solid rgba(10, 22, 34, 0.06) !important;
                    transform-origin: top right;
                    animation: popoverScaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .help-menu-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 2;
                    background: transparent;
                }
                .help-channel-item {
                    background: transparent;
                }
                .help-channel-item:hover {
                    background-color: #f1f5f9;
                }
                .channel-icon-avatar {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                }
                .line-height-tight { line-height: 1.25; }

                .market-product-card {
                    background: #ffffff;
                    border-radius: 12px !important;
                    box-shadow: 0 4px 15px rgba(10, 22, 34, 0.02);
                    border: 1px solid rgba(10, 22, 34, 0.03) !important;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    overflow: hidden;
                }
                
                .market-product-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(10, 22, 34, 0.06);
                }

                .market-img-frame {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    border-bottom: 1px solid rgba(10, 22, 34, 0.04);
                }
                
                .product-display-img {
                    width: 100%;
                    height: 100%;
                }

                .wishlist-float-trigger {
                    bottom: 12px;
                    right: 12px;
                    background: transparent;
                    color: #0D6EFD;
                    z-index: 5;
                    cursor: pointer;
                    transition: transform 0.15s ease;
                }
                .wishlist-float-trigger:hover {
                    transform: scale(1.15);
                }
                .heart-outline { stroke: #0D6EFD; fill: transparent; }
                .heart-filled { fill: #0D6EFD; stroke: #0D6EFD; }

                .product-title-text {
                    font-size: 13.5px;
                    font-weight: 500;
                    line-height: 1.4;
                    color: #0A1622;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    height: 38px;
                }

                .main-price-display {
                    font-size: 17px;
                    color: #0A1622;
                }

                .old-strike-price {
                    font-size: 12.5px;
                    color: #64748b !important;
                }

                .discount-ratio-tag {
                    font-size: 11px;
                    background-color: rgba(13, 110, 253, 0.08);
                    color: #0D6EFD;
                }

                .express-delivery-badge {
                    font-size: 10px;
                    font-weight: 900;
                    color: #0A1622;
                    letter-spacing: -0.2px;
                }
                .italic-text { font-style: italic; }
                .express-sub { font-weight: 900; }
                .express-placeholder { height: 15px; }

                .sponsored-tag {
                    font-size: 11px;
                    color: #94a3b8 !important;
                }
                .info-icon-meta { stroke-width: 2.5; }

                .btn-brand-checkout {
                    background-color: #0D6EFD;
                    border: none;
                    border-radius: 8px;
                    font-size: 13.5px;
                    letter-spacing: 0.1px;
                    height: 38px;
                }

                .btn-brand-checkout:hover {
                    background-color: #0b5ed7;
                    box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
                }

                .qty-selector-container {
                    height: 38px;
                    border-color: rgba(10, 22, 34, 0.08) !important;
                    background-color: #f1f5f9 !important;
                }
                .qty-action-btn {
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    background-color: #ffffff;
                    border: 1px solid rgba(10, 22, 34, 0.06);
                    color: #0A1622;
                    transition: all 0.15s ease;
                }
                .qty-action-btn:hover {
                    background-color: #0D6EFD;
                    color: #ffffff;
                    border-color: #0D6EFD;
                }
                .qty-display-text {
                    font-size: 14px;
                    min-width: 24px;
                    text-align: center;
                }

                /* --- Slide-Out Cart Review Drawer Panel Framework --- */
                .cart-drawer-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(10, 22, 34, 0.3);
                    backdrop-filter: blur(4px);
                    z-index: 2000;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.25s ease;
                }
                .cart-drawer-overlay.active {
                    opacity: 1;
                    pointer-events: auto;
                }
                .cart-drawer {
                    position: absolute;
                    top: 0;
                    right: -420px;
                    width: 100%;
                    max-width: 400px;
                    height: 100%;
                    transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .cart-drawer-overlay.active .cart-drawer {
                    right: 0;
                }
                .drawer-close-trigger {
                    transition: color 0.15s ease;
                }
                .drawer-close-trigger:hover {
                    color: #0D6EFD !important;
                }
                .cart-item-img {
                    width: 60px;
                    height: 60px;
                    padding: 4px;
                    background-color: #f8fafe;
                }
                .cart-item-title {
                    font-size: 13px;
                    font-weight: 600;
                    color: #0A1622;
                }
                .custom-qty-sm {
                    height: 28px !important;
                    padding: 2px !important;
                }
                .qty-action-btn-sm {
                    width: 22px;
                    height: 22px;
                    padding: 0;
                    background-color: #ffffff;
                    border: 1px solid rgba(10, 22, 34, 0.06);
                    color: #0A1622;
                    transition: all 0.1s ease;
                }
                .qty-action-btn-sm:hover {
                    background-color: #0D6EFD;
                    color: #ffffff;
                    border-color: #0D6EFD;
                }

                .extra-small { font-size: 10px; }

                @keyframes popoverScaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(-6px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                `}
            </style>
            <Footer />
        </>
    );
};

export default OrderPage;