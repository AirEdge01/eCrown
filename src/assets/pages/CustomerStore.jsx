// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const CustomerStore = ({ onAddToCart }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [similarItems, setSimilarItems] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:2000/api/products')
//       .then(res => { if (res.data.success) setProducts(res.data.products); })
//       .catch(err => console.error(err));
//   }, []);

//   const handleOpenRecoveryModal = (product) => {
//     setSelectedProduct(product);
//     if (product.stock <= 0) {
//       const alternatives = products.filter(item => 
//         item.category === product.category && item._id !== product._id && item.stock > 0
//       );
//       setSimilarItems(alternatives);
//     }
//   };

//   return (
//     <div className="store-theme min-vh-screen text-light p-4">
//       {/* CSS Layout Scoping System */}
//       <style>{`
//         .store-theme {
//           background: #0f172a;
//           font-family: system-ui, -apple-system, sans-serif;
//         }
//         .store-card {
//           background: #1e293b;
//           border: 1px solid rgba(255,255,255, 0.06);
//           border-radius: 12px;
//           transition: transform 0.25s ease;
//         }
//         .store-card:hover {
//           transform: translateY(-4px);
//         }
//         .text-emerald { color: #10b981; }
//         .bg-emerald { background-color: #10b981; color: #0f172a; font-weight: 600; }
//         .bg-emerald:hover { background-color: #059669; color: #fff; }
//         .modal-blur-overlay {
//           background: rgba(15, 23, 42, 0.85);
//           backdrop-filter: blur(5px);
//           position: fixed; top: 0; left: 0; right: 0; bottom: 0;
//           display: flex; align-items: center; justify-content: center; z-index: 1050;
//         }
//       `}</style>

//       <div className="container">
//         <h2 className="fs-4 fw-bold mb-5 text-emerald tracking-wide">Available System Infrastructure Catalog</h2>
        
//         <div className="row g-4">
//           {products.map(product => (
//             <div key={product._id} className="col-12 col-md-6 col-lg-4">
//               <div className="store-card p-4 h-100 d-flex flex-column justify-content-between shadow-sm">
//                 <div>
//                   <div className="d-flex justify-content-between align-items-start gap-2">
//                     <h3 className="fs-5 fw-bold text-light mb-0">{product.name}</h3>
//                     {product.stock <= 0 && (
//                       <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-20 small">Finished</span>
//                     )}
//                   </div>
//                   <p className="text-muted small mt-2.5 mb-4">{product.description}</p>
//                   <p className="text-emerald font-monospace fw-bold fs-5">₦{product.price.toLocaleString()}</p>
//                 </div>

//                 <div className="mt-4">
//                   {product.stock > 0 ? (
//                     <button onClick={() => onAddToCart(product)} className="btn bg-emerald w-100 py-2 text-sm shadow-sm">
//                       Add To Cart
//                     </button>
//                   ) : (
//                     <button onClick={() => handleOpenRecoveryModal(product)} className="btn btn-outline-danger w-100 py-2 text-sm">
//                       ⚠️ Out of Stock - Find Similar
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Alternative System Recommendations Modal Overlay */}
//       {selectedProduct && selectedProduct.stock <= 0 && (
//         <div className="modal-blur-overlay p-3">
//           <div className="bg-dark border border-secondary border-opacity-30 p-4 rounded-3 shadow-lg w-100" style={{ maxWidth: '500px' }}>
//             <div className="d-flex justify-content-between align-items-start mb-2">
//               <h4 className="fs-5 fw-bold text-danger mb-0">Stock Depleted</h4>
//               <button onClick={() => setSelectedProduct(null)} className="btn-close btn-close-white small shadow-none"></button>
//             </div>
//             <p className="text-muted small mb-4">We currently have 0 units of <span className="text-white fw-bold">"{selectedProduct.name}"</span>. Check out these alternate matching systems:</p>
            
//             <div className="border-top border-secondary border-opacity-20 pt-3">
//               <h5 className="text-muted text-uppercase fw-bold mb-3" style={{ fontSize: '11px' }}>Matching Infrastructure Elements:</h5>
              
//               {similarItems.length === 0 ? (
//                 <p className="text-muted small italic text-center py-2">No alternate items match this category group inside the catalog registry.</p>
//               ) : (
//                 <div className="d-flex flex-column gap-2.5">
//                   {similarItems.slice(0, 2).map(item => (
//                     <div key={item._id} className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#1e293b' }}>
//                       <div>
//                         <p className="text-sm fw-bold mb-0 text-light">{item.name}</p>
//                         <small className="text-emerald font-monospace">₦{item.price.toLocaleString()}</small>
//                       </div>
//                       <button 
//                         onClick={() => { onAddToCart(item); setSelectedProduct(null); }}
//                         className="btn bg-emerald btn-sm px-3 shadow-sm"
//                       >
//                         Select
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerStore;