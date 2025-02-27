import React, { useState } from 'react';
import Image from "next/image";
import ArrowUpRight from "@/assets/images/ArrowUpRight.png";
// Define types for button props
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const ButtonTitre: React.FC<ButtonProps> = ({ text, onClick, color = '#F2542D', size = 'medium' }) => {
  // Define state for hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Define base button styles
  const baseStyles: React.CSSProperties = {
    padding: size === 'large' ? '12px 24px' : size === 'small' ? '6px 12px' : '8px 16px',
    fontSize: "20px",
    backgroundColor: isHovered ? '#CA3E1B' : color, // Change color on hover
    color: '#fff',
    border: 'none',
    borderRadius: '33px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

  };

  // Hover event handlers
  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Reset hover state
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='flex gap-2 items-center'
    >
      {text}
      <Image src={ArrowUpRight} alt="Arrow Icon" width={24} height={24} />
    </button>
  );
};

export default ButtonTitre;