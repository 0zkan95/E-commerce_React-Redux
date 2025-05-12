import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-[#d1ded4]
        opacity-70
        border border-white 
        pt-4 pl-4 pr-4
        rounded-lg 
        shadow-md 
        hover:shadow-xl 
        hover:scale-105 
        hover:opacity-100
        transition-all 
        duration-300 
        ease-in-out
        w-[300px]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
