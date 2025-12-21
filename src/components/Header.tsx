import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">TeenList</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            首页
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            关于
          </Link>
        </nav>

        {/* Apply Button */}
        <button
          onClick={onApplyClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
        >
          申请加入
        </button>
      </div>
    </header>
  );
};
