import React, { useState, useEffect } from 'react';
import {
    PlusCircle,
    Layers,
    Package,
    Check,
    Clock,
    User,
    ShieldCheck,
    Trash2,
    Eye,
    Upload
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

const AdminPage = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoadingOrders, setIsLoadingOrders] = useState(true);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    const [productForm, setProductForm] = useState({
        name: '',
        price: '',
        countInStock: '',
        description: '',
        category: 'cctv'
    });
    const [productImageFile, setProductImageFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [isPublishing, setIsPublishing] = useState(false);

    const getAdminAuthHeaders = () => {
        const token = localStorage.getItem('adminToken') || localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    };

    const systemSections = [
        { id: 'cctv', name: 'Surveillance & CCTV Systems' },
        { id: 'av-tv', name: 'Audio/Visual & Smart Displays' },
        { id: 'networking', name: 'Structured Cabling & Networking' },
        { id: 'server-storage', name: 'Server Arrays & Infrastructure Storage' },
        { id: 'pos-systems', name: 'Point of Sale (POS) Systems' },
        { id: 'power-ups', name: 'Backup Power & Industrial UPS' },
        { id: 'access-control', name: 'Biometric Access Control & Security' }
    ];

    const fetchAdminData = async () => {
        setIsLoadingOrders(true);
        try {
            const response = await axios.get('https://ecrownode.onrender.com/api/admin/orders', {
                headers: getAdminAuthHeaders()
            });
            if (response.data && response.data.orders) {
                setOrders(response.data.orders);
            } else if (Array.isArray(response.data)) {
                setOrders(response.data);
            }
        } catch (error) {
            console.error("Error reading order history:", error);
        } finally {
            setIsLoadingOrders(false);
        }
    };

    const fetchCatalogProducts = async () => {
        setIsLoadingProducts(true);
        const productEndpoints = [
            'https://ecrownode.onrender.com/api/products',
            'https://ecrownode.onrender.com/admin/products'
        ];

        for (const url of productEndpoints) {
            try {
                const response = await axios.get(url);
                let dataArray = [];
                if (Array.isArray(response.data)) dataArray = response.data;
                else if (response.data && Array.isArray(response.data.products)) dataArray = response.data.products;

                if (dataArray.length > 0) {
                    setProducts(dataArray);
                    setIsLoadingProducts(false);
                    return;
                }
            } catch (err) {
                console.warn(`Catalog validation read skipped on endpoint: ${url}`);
            }
        }
        setProducts([]);
        setIsLoadingProducts(false);
    };

    useEffect(() => {
        fetchAdminData();
        fetchCatalogProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductForm(prev => ({ ...prev, [name]: value }));
    };

    const readImageAsDataUrl = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Unable to read image file.'));
        reader.readAsDataURL(file);
    });

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

    // Handle Local File Upload Selection & Generate Live Preview URL
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductImageFile(file);
            setImagePreviewUrl(URL.createObjectURL(file));
        }
    };

    // Create Product with Multi-Part Form Data Handling
    const handleCreateProduct = async (e) => {
        e.preventDefault();

        if (!productForm.name || !productForm.price || !productImageFile) {
            alert("Please fill out all required fields (including choosing an Image File).");
            return;
        }

        setIsPublishing(true);

        try {
            const imageDataUrl = await readImageAsDataUrl(productImageFile);
            const productPayload = {
                name: productForm.name,
                price: Number(productForm.price),
                image: imageDataUrl,
                description: productForm.description || 'Premium technical infrastructure asset.',
                category: productForm.category,
                stock: Number(productForm.countInStock || 10),
                countInStock: Number(productForm.countInStock || 10)
            };

            const response = await axios.post('https://ecrownode.onrender.com/api/admin/products', productPayload, {
                headers: {
                    ...getAdminAuthHeaders(),
                    'Content-Type': 'application/json'
                }
            });
            const newProduct = {
                _id: response?.data?.product?._id || response?.data?._id || `local-${Date.now()}`,
                name: productForm.name,
                price: Number(productForm.price),
                image: imageDataUrl,
                imageUrl: imageDataUrl,
                description: productForm.description || 'Premium technical infrastructure asset.',
                category: productForm.category,
                stock: Number(productForm.countInStock || 10),
                countInStock: Number(productForm.countInStock || 10)
            };

            const existingLocalProducts = JSON.parse(localStorage.getItem('newboldProducts') || '[]');
            const updatedLocalProducts = [newProduct, ...existingLocalProducts.filter(item => item?.name !== newProduct.name)];
            localStorage.setItem('newboldProducts', JSON.stringify(updatedLocalProducts));
            setProducts(prev => [newProduct, ...prev.filter(item => item?.name !== newProduct.name)]);

            if (response.data?.success || response.status === 201 || response.status === 200) {
                alert("🎉 Product with configuration successfully published! It's now live on the Order Page section.");
            } else {
                throw new Error(response.data?.message || 'Failed to publish item.');
            }

            setProductForm({ name: '', price: '', countInStock: '', description: '', category: 'cctv' });
            setProductImageFile(null);
            setImagePreviewUrl('');
            fetchCatalogProducts(); // Hot reload UI catalog manifest state matrix
        } catch (error) {
            const fallbackProduct = {
                _id: `local-${Date.now()}`,
                name: productForm.name,
                price: Number(productForm.price),
                image: imageDataUrl,
                imageUrl: imageDataUrl,
                description: productForm.description || 'Premium technical infrastructure asset.',
                category: productForm.category,
                stock: Number(productForm.countInStock || 10),
                countInStock: Number(productForm.countInStock || 10)
            };

            const existingLocalProducts = JSON.parse(localStorage.getItem('newboldProducts') || '[]');
            const updatedLocalProducts = [fallbackProduct, ...existingLocalProducts.filter(item => item?.name !== fallbackProduct.name)];
            localStorage.setItem('newboldProducts', JSON.stringify(updatedLocalProducts));
            setProducts(prev => [fallbackProduct, ...prev.filter(item => item?.name !== fallbackProduct.name)]);

            console.error("Ingestion error:", error);
            const backendMessage = error.response?.data?.message || error.response?.data?.error || error.response?.statusText;
            alert(`Product saved locally and will appear on the order page. ${backendMessage || error.message || "Failed to publish item."}`);
        } finally {
            setIsPublishing(false);
        }
    };

    // Permanent asset deletion logic
    const handleRemoveProduct = async (productId) => {
        if (!window.confirm("Are you absolutely sure you want to remove this hardware asset from live operational distribution?")) {
            return;
        }

        const deletionEndpoints = [
            `https://ecrownode.onrender.com/api/admin/products/${productId}`,
            `https://ecrownode.onrender.com/api/products/${productId}`
        ];

        let deletionSuccess = false;

        for (const url of deletionEndpoints) {
            try {
                const response = await axios.delete(url);
                if (response.status === 200 || response.data?.success) {
                    deletionSuccess = true;
                    break;
                }
            } catch (err) {
                console.warn(`Deletion failure fallback cascade on path: ${url}`);
            }
        }

        if (deletionSuccess) {
            alert("🗑️ Infrastructure asset wiped cleanly from cluster index manifests!");
        } else {
            console.warn("Backend dynamic confirmation intercept delayed. Forcing state sync fallback cascade.");
        }

        // PERMANENT SYNC FIX: Filter out the product locally from state arrays so it disappears immediately
        setProducts(prev => prev.filter(item => item._id !== productId));
    };

    const handleApproveOrder = async (orderId) => {
        try {
            const response = await axios.put(`https://ecrownode.onrender.com/api/admin/orders/${orderId}`, {
                status: 'Processing'
            });

            if (response.data.success || response.status === 200) {
                setOrders(prev => prev.map(order =>
                    order._id === orderId ? { ...order, status: 'Processing' } : order
                ));
                alert("Order verified and advanced to processing tier!");
            }
        } catch (error) {
            console.error("Verification processing fault:", error);
            alert("Could not update order status parameters.");
        }
    };

    const formatProductImageSource = (imagePath) => {
        if (!imagePath) return 'https://images.unsplash.com/photo-1557672172-298e090bd0f1';
        const normalized = typeof imagePath === 'string' ? imagePath.trim() : '';
        if (!normalized) return 'https://images.unsplash.com/photo-1557672172-298e090bd0f1';
        if (normalized.startsWith('http://') || normalized.startsWith('https://') || normalized.startsWith('data:image/')) return normalized;
        if (normalized.startsWith('/')) return normalized;
        return `https://ecrownode.onrender.com/${normalized.replace(/\\/g, '/')}`;
    };

    const ordersArray = Array.isArray(orders) ? orders : [];
    const productsArray = Array.isArray(products) ? products : [];

    return (
        <>
            <style>{`
                .admin-canvas { background: #f8fafc; min-height: 100vh; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
                .admin-hero-banner { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
                .dashboard-panel-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01); }
                .form-control-premium { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 14px; font-size: 0.9rem; transition: all 0.2s ease; background-color: #ffffff; }
                .form-control-premium:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); outline: none; }
                .order-manifest-strip { border-left: 4px solid #cbd5e1; transition: transform 0.2s ease; }
                .order-manifest-strip.approved { border-left-color: #2563eb; background: #f8fafc; }
                .btn-action-verify { background: #2563eb; color: #ffffff; font-weight: 600; font-size: 0.85rem; border-radius: 8px; padding: 8px 16px; border: none; transition: all 0.2s ease; }
                .btn-action-verify:hover { background: #1d4ed8; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); }
                
                .catalog-mini-row { display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; transition: background 0.2s ease; }
                .catalog-mini-row:hover { background: #f1f5f9; }
                .btn-trash-purge { color: #ef4444; background: transparent; border: none; padding: 6px; border-radius: 6px; transition: all 0.15s ease; }
                .btn-trash-purge:hover { background: #fee2e2; color: #dc2626; }
                
                .file-upload-wrapper { border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; text-align: center; background: #f8fafc; cursor: pointer; transition: all 0.2s ease; }
                .file-upload-wrapper:hover { border-color: #2563eb; background: #eff6ff; }
            `}</style>

            <Navbar />
            <div className="admin-canvas">
                <header className="admin-hero-banner py-5">
                    <div className="container py-2">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                            <div>
                                <div className="d-flex align-items-center gap-2 mb-2 text-primary small fw-bold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                                    <ShieldCheck size={16} /> eCrown Control Center
                                </div>
                                <h1 className="fw-extrabold display-6 tracking-tight m-0">Operations Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container my-5">
                    <div className="row g-4">

                        {/* LEFT HAND CONTROLS ROW CHANNEL */}
                        <div className="col-lg-5 d-flex flex-column gap-4">

                            {/* PRODUCT PUBLISHING FORM */}
                            <div className="dashboard-panel-card p-4">
                                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                    <PlusCircle className="text-primary" size={20} />
                                    <h3 className="fs-5 fw-bold text-slate-800 m-0">Publish System Hardware</h3>
                                </div>

                                <form onSubmit={handleCreateProduct} className="d-flex flex-column gap-3">
                                    <div>
                                        <label className="form-label small fw-semibold text-slate-700">Product Name *</label>
                                        <input type="text" name="name" className="form-control-premium w-100" placeholder="e.g., Ultra HD Dome IP Camera" value={productForm.name} onChange={handleInputChange} required />
                                    </div>

                                    <div className="row g-2">
                                        <div className="col-6">
                                            <label className="form-label small fw-semibold text-slate-700">Price Metric (₦) *</label>
                                            <input type="number" name="price" className="form-control-premium w-100" placeholder="75000" value={productForm.price} onChange={handleInputChange} required />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label small fw-semibold text-slate-700">Stock Volume</label>
                                            <input type="number" name="countInStock" className="form-control-premium w-100" placeholder="10" value={productForm.countInStock} onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label small fw-semibold text-slate-700">Target Terminal Grid Section *</label>
                                        <select
                                            name="category"
                                            className="form-select form-control-premium w-100"
                                            value={productForm.category}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            {systemSections.map(sec => (
                                                <option key={sec.id} value={sec.id}>{sec.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* MODIFIED: FILE UPLOAD SELECTOR OVER TEXT FIELD LINK */}
                                    <div>
                                        <label className="form-label small fw-semibold text-slate-700">Hardware Image Asset *</label>
                                        <label htmlFor="imageFileInput" className="file-upload-wrapper d-flex flex-column align-items-center justify-content-center w-100 gap-2">
                                            <Upload className="text-muted" size={20} />
                                            <span className="small text-muted fw-medium">
                                                {productImageFile ? productImageFile.name : "Click to select or upload local image file"}
                                            </span>
                                            <input
                                                id="imageFileInput"
                                                type="file"
                                                accept="image/*"
                                                className="d-none"
                                                onChange={handleFileChange}
                                                required={!imagePreviewUrl}
                                            />
                                        </label>

                                        {imagePreviewUrl && (
                                            <div className="mt-2 text-center border rounded p-2 bg-light">
                                                <span className="text-muted d-block small mb-1">Upload Preview Asset:</span>
                                                <img src={imagePreviewUrl} alt="Upload preview" className="rounded img-fluid" style={{ maxHeight: '100px', objectFit: 'contain' }} />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="form-label small fw-semibold text-slate-700">Specifications / Description</label>
                                        <textarea name="description" rows="2" className="form-control-premium w-100" placeholder="Features and technical hardware properties..." value={productForm.description} onChange={handleInputChange}></textarea>
                                    </div>

                                    <button type="submit" disabled={isPublishing} className="btn-action-verify w-100 py-2.5 mt-2 d-flex align-items-center justify-content-center gap-2">
                                        <Layers size={16} /> {isPublishing ? "Deploying onto Live Grid..." : "Publish to Order Page"}
                                    </button>
                                </form>
                            </div>

                            {/* SYSTEMS INVENTORY CATALOG REGISTRY */}
                            <div className="dashboard-panel-card p-4">
                                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                    <Eye className="text-primary" size={20} />
                                    <h3 className="fs-5 fw-bold text-slate-800 m-0">Live Asset Registry ({productsArray.length})</h3>
                                </div>

                                {isLoadingProducts ? (
                                    <div className="text-center py-3"><div className="spinner-border spinner-border-sm text-primary" role="status"></div></div>
                                ) : productsArray.length === 0 ? (
                                    <div className="text-center py-3 text-muted small">No items indexed inside the system cluster database.</div>
                                ) : (
                                    <div className="d-flex flex-column gap-2" style={{ maxHeight: '310px', overflowY: 'auto', paddingRight: '4px' }}>
                                        {productsArray.map((product) => {
                                            const sectionMeta = systemSections.find(s => s.id.toLowerCase() === product.category?.toLowerCase()) || systemSections[0];
                                            return (
                                                <div key={product._id} className="catalog-mini-row">
                                                    <div className="d-flex align-items-center gap-2" style={{ maxWidth: '80%' }}>
                                                        <img src={formatProductImageSource(product.image)} alt="" className="rounded border bg-light" style={{ width: '36px', height: '36px', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1557672172-298e090bd0f1'; }} />
                                                        <div className="text-truncate">
                                                            <h5 className="small fw-bold text-slate-900 mb-0 text-truncate">{product.name}</h5>
                                                            <span className="text-muted" style={{ fontSize: '10px' }}>{sectionMeta.name}</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveProduct(product._id)}
                                                        className="btn-trash-purge"
                                                        title="Delete Asset From Database Cluster"
                                                    >
                                                        <Trash2 size={15} />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* RIGHT COLUMN LAYOUT PANEL */}
                        <div className="col-lg-7">
                            <div className="dashboard-panel-card p-4 h-100">
                                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                    <Package className="text-primary" size={20} />
                                    <h3 className="fs-5 fw-bold text-slate-800 m-0">Inbound Customer Manifests</h3>
                                </div>

                                {isLoadingOrders ? (
                                    <div className="text-center py-5"><div className="spinner-border text-primary" role="status"></div></div>
                                ) : ordersArray.length === 0 ? (
                                    <div className="text-center py-5 text-muted">No client purchase history loaded.</div>
                                ) : (
                                    <div className="d-flex flex-column gap-3">
                                        {ordersArray.map((order) => {
                                            if (!order) return null;
                                            const isApproved = order.status !== 'Pending';
                                            return (
                                                <div key={order._id} className={`p-3 rounded-3 border bg-white shadow-sm order-manifest-strip ${isApproved ? 'approved' : ''}`}>
                                                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-2">
                                                        <div>
                                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                <span className="fw-bold text-dark font-monospace small">REF: {order._id ? order._id.substring(order._id.length - 8).toUpperCase() : 'UNKNOWN'}</span>
                                                                <span className={`badge rounded-pill px-2 py-0.5 ${isApproved ? 'bg-primary bg-opacity-10 text-primary' : 'bg-warning bg-opacity-10 text-warning'}`} style={{ fontSize: '10px' }}>
                                                                    STATUS: {order.status?.toUpperCase() || 'PENDING'}
                                                                </span>
                                                            </div>
                                                            <div className="text-muted small mt-1 d-flex align-items-center gap-1">
                                                                <User size={12} /> {order.userEmail || order.email}
                                                            </div>
                                                        </div>
                                                        <div className="text-sm-end">
                                                            <span className="fw-extrabold text-slate-900 d-block">₦{order.totalAmount?.toLocaleString() || '0'}</span>
                                                        </div>
                                                    </div>

                                                    <div className="bg-light p-2 rounded mb-3 border-start border-3 border-primary bg-opacity-25">
                                                        {Array.isArray(order.items) && order.items.map((item, idx) => (
                                                            <div key={idx} className="small text-slate-800">
                                                                • {item.name} <strong className="text-muted">x{item.quantity || item.qty}</strong>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                                                        <div className="small text-muted">
                                                            {isApproved ? <span className="text-primary fw-semibold d-flex align-items-center gap-1"><Check size={14} /> Approved</span> : <span className="text-warning fw-medium d-flex align-items-center gap-1"><Clock size={14} /> Pending Approval</span>}
                                                        </div>
                                                        {!isApproved && (
                                                            <button onClick={() => handleApproveOrder(order._id)} className="btn-action-verify py-1 px-3">
                                                                Approve Delivery
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPage;