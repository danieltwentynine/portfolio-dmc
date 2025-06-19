import React from "react";

const ArrowDown: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          marginTop: "400px",
          animation: "bounce 2s infinite",
          opacity: 0.7,
          cursor: "pointer",
          display: "inline-block",
        }}
      >
      <style>
        {`@keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(10px); }
          60% { transform: translateY(5px); }
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
