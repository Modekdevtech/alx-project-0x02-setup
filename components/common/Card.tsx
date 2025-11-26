// components/common/Card.tsx
import React from "react";

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 rounded-lg shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
