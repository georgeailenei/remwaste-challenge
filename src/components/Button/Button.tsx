import React from "react";
import "./ButtonStyles.css";

interface ButtonProps {
  variant: "card" | "drawer" | "back";
  children?: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const Button = ({ isSelected, variant, children, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  switch (variant) {
    case "card":
      return (
        <button className={`select-skip-btn ${isSelected ? "selected" : ""}`}>
          {isSelected ? "Selected" : "Select Skip"}
        </button>
      );
    case "drawer":
      return (
        <button className="drawer-btn" onClick={handleClick}>
          {children || "Default Drawer Button"}
        </button>
      );
    case "back":
      return (
        <button className="back-btn" onClick={handleClick}>
          {children || "Back"}
        </button>
      );
    default:
      return null;
  }
};

export default Button;
