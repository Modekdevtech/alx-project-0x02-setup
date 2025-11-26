// components/common/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const style = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  return (
    <button className={`${base} ${style}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
