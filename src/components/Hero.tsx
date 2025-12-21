import React from 'react';

interface HeroProps {
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ subtitle = "记录并连接这一代的创造者" }) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
        TeenList
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};