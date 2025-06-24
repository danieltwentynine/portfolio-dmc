import React from "react";

const ArrowDown: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginTop: "80px",
          animation: "bounce 2s infinite",
          opacity: 0.7,
          display: "inline-block",
        }}
      >
      <style>
        {`@keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(10px); }
          60% { transform: translateY(5px); }
        }
        @media (max-width: 768px) {
          svg { width: 35px !important; height: 35px !important; margin-top: 15px !important; }
        }
        @media (max-width: 480px) {
          svg { width: 30px !important; height: 30px !important; margin-top: 10px !important; }
        }`}
      </style>
      <path
        d="M12 4v16m0 0l-6-6m6 6l6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    </div>
  );
};

export default ArrowDown;
