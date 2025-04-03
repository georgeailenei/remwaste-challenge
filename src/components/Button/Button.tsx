import React from 'react';
import './ButtonStyles.css';

interface ButtonProps {
  variant: 'card' | 'drawer' | 'back';
  children?: React.ReactNode;
  isSelected?: boolean;
}

const Button = ({ isSelected, variant, children }: ButtonProps) => {
  const handleRedirect = () => {
    window.location.href = '/'; 
  };

  switch (variant) {
    case 'card':
      return (
        <button className={`select-skip-btn ${isSelected ? 'selected' : ''}`}>
          {isSelected ? 'Selected' : 'Select Skip'}
        </button>
      );
    case 'drawer':
      return (
        <button className='drawer-btn' onClick={handleRedirect}>
          {children || 'Default Drawer Button'}
        </button>
      );
    case 'back':
      return (
        <button className='back-btn' onClick={handleRedirect}>
          {children || 'Back'}
        </button>
      );
    default:
      return null;
  }
}

export default Button;
