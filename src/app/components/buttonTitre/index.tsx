import React from 'react';
import ArrowUpRight from "@/assets/images/ArrowUpRight.svg";
// Define types for button props
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, size = 'medium' }) => {
  // Define state for hover effect
  
  // Define base button styles
  const baseStyles: React.CSSProperties = {
    padding: size === 'large' ? '12px 24px' : size === 'small' ? '6px 12px' : '8px 16px',
    fontSize: "18px",
    color: '#562C2C',
    border: '1.5px solid #562C2C4D',
    borderRadius: '33px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

  };


  return (
    <button
      style={baseStyles}
      onClick={onClick}
      className='flex gap-2 items-center'
    >
      {text}
      <ArrowUpRight alt="Arrow Icon" width={24} height={24} />
    </button>
  );
};

export default Button;