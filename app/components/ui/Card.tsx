import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title: string;
  className?: string; // Allow additional classes for custom styling
}

const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-[#008082] dark:border-[#00b3b3] ${className}`}>
      <h3 className="text-xl text-[#008082] dark:text-[#00b3b3] mb-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
