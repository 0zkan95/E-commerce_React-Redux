import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '' }) => {
  // Base styles for the inner span (actual button appearance)
  const baseInnerStyles = `
    inline-flex h-full w-full 
    items-center justify-center 
    rounded-md /* Slightly less rounded than full to see border effect */
    px-6 py-3 
    text-sm font-semibold 
    transition-colors duration-150 ease-in-out
  `;

  // Default state: Green background, white text
  const defaultInnerBg = 'bg-[#126d34] text-white';
  // Hover state: Lighter green background
  const hoverInnerBg = 'hover:bg-[#17853f]';

  // Active state: Darker green background
  const activeInnerBg = 'active:bg-[#0f5c2b]';


  return (
    <button
      type={type}
      onClick={onClick}
      // Outer button: relative container for the spinning border
      className={`
        relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-[#17853f] focus:ring-offset-gray-50 
        cursor-pointer
        ${className}
      `}
    >
      {/* Spinning border element */}
      <span
        className="
          absolute inset-[-1000%] z-0 
          animate-[spin_2s_linear_infinite] 
          bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#126d34_50%,#FFFFFF_100%)]
          group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#17853f_50%,#FFFFFF_100%)] /* Optional: change spin color on hover */
        "
      />
      {/* Inner span: actual button content and appearance */}
      <span
        className={`
          relative z-10 /* Ensure this is on top of the spinning border */
          ${baseInnerStyles}
          ${defaultInnerBg}
          ${hoverInnerBg}
          ${activeInnerBg}
          {/* backdrop-blur-sm Removed for debugging text visibility */}
        `}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
