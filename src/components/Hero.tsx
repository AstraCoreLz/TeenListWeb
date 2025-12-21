import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ subtitle = "记录并连接这一代的创造者" }) => {
  return (
    <div className="text-center mb-16">
      <Link to="/" aria-label="返回首页">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight select-none cursor-pointer">TeenList</h1>
      </Link>
      <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
