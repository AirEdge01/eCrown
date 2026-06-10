import React from 'react';
import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';


const Dash = () => {
    return (
        <>
            <div className="dashboard-fixed-wrapper">
                <Link
                    to="/dashboard"
                    className="dashboard-back-link d-inline-flex align-items-center gap-2 text-dark text-decoration-none"
                >
                    <Lucide.ArrowLeft size={14} /> Return to Dashboard
                </Link>
            </div>

            <style>{`
        .dashboard-fixed-wrapper {
          position: fixed;
          top: 107px;
          right: 20px;
          z-index: 1000;
        }
        .dashboard-back-link {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(15, 23, 42, 0.12);
          box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          font-size: 0.85rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          display: inline-flex !important;
        }
        .dashboard-back-link:hover {
          transform: translateY(-2px);
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.14);
        }
        .dashboard-back-link svg {
          color: #0d6efd;
        }
      `}</style>
        </>
    );
}

export default Dash;
