import React from 'react';

const Button = () => {
  return (
    <>
      <div className="position-fixed bottom-0 start-50 translate-middle-x pb-4 text-center w-auto px-3" style={{ zIndex: 1090 }}>
        <a 
          href="mailto:Info@ecrowntechnologies.net" 
          className="btn btn-primary rounded-pill shadow-2xl px-4 py-3 fw-bold tracking-wide d-flex align-items-center gap-2 border border-white border-opacity-20 hover-scale-up text-decoration-none text-white transition-all"
          style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap'
          }}
        >
          <span className="fs-5">📋</span> Request Architecture Quote
        </a>
      </div>
    </>
  );
}

export default Button;
